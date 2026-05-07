import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

const totalSlots = 10
const basePrice = 4000000
const stepIncrease = 2000000
const reservationWindowMs = 10 * 60 * 1000

type SlotStatus = 'available' | 'reserved' | 'confirmed'

type SlotView = {
  slotNumber: number
  price: number
  status: SlotStatus
  reservedUntil: Date | null
}

function priceForSlot(slotNumber: number) {
  return basePrice + (slotNumber - 1) * stepIncrease
}

async function ensureSlots() {
  const existingCount = await db.allinFnbSlot.count()

  if (existingCount >= totalSlots) return

  await db.$transaction(
    Array.from({ length: totalSlots }, (_, index) => {
      const slotNumber = index + 1

      return db.allinFnbSlot.upsert({
        where: { slotNumber },
        create: {
          slotNumber,
          price: priceForSlot(slotNumber),
        },
        update: {
          price: priceForSlot(slotNumber),
        },
      })
    })
  )
}

async function releaseExpiredReservations() {
  const now = new Date()

  await db.$transaction(async (tx) => {
    const expiredSlots = await tx.allinFnbSlot.findMany({
      where: {
        status: 'reserved',
        reservedUntil: { lte: now },
      },
      select: {
        currentRegistrationId: true,
      },
    })

    const expiredRegistrationIds = expiredSlots
      .map((slot) => slot.currentRegistrationId)
      .filter((id): id is string => Boolean(id))

    if (expiredRegistrationIds.length > 0) {
      await tx.allinFnbRegistration.updateMany({
        where: {
          id: { in: expiredRegistrationIds },
          status: 'reserved',
        },
        data: {
          status: 'expired',
          paymentStatus: 'expired',
        },
      })
    }

    await tx.allinFnbSlot.updateMany({
      where: {
        status: 'reserved',
        reservedUntil: { lte: now },
      },
      data: {
        status: 'available',
        reservedUntil: null,
        currentRegistrationId: null,
      },
    })
  })
}

function getSummary(slots: SlotView[]) {
  const confirmedCount = slots.filter((slot) => slot.status === 'confirmed').length
  const nextSlot = slots.find((slot) => slot.status === 'available')

  return {
    totalSlots,
    confirmedCount,
    nextSlotNumber: nextSlot?.slotNumber ?? null,
    nextPrice: nextSlot?.price ?? null,
    isFull: !nextSlot,
    slots,
  }
}

async function getSlots() {
  return db.allinFnbSlot.findMany({
    orderBy: { slotNumber: 'asc' },
    select: {
      slotNumber: true,
      price: true,
      status: true,
      reservedUntil: true,
    },
  }) as Promise<SlotView[]>
}

export async function GET() {
  await ensureSlots()
  await releaseExpiredReservations()

  return NextResponse.json(getSummary(await getSlots()))
}

export async function POST(request: Request) {
  await ensureSlots()

  const form = await request.json().catch(() => null)

  if (!form?.name || !form?.phone || !form?.email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    const reservation = await db.$transaction(async (tx) => {
      const now = new Date()

      const expiredSlots = await tx.allinFnbSlot.findMany({
        where: {
          status: 'reserved',
          reservedUntil: { lte: now },
        },
        select: {
          currentRegistrationId: true,
        },
      })

      const expiredRegistrationIds = expiredSlots
        .map((slot) => slot.currentRegistrationId)
        .filter((id): id is string => Boolean(id))

      if (expiredRegistrationIds.length > 0) {
        await tx.allinFnbRegistration.updateMany({
          where: {
            id: { in: expiredRegistrationIds },
            status: 'reserved',
          },
          data: {
            status: 'expired',
            paymentStatus: 'expired',
          },
        })
      }

      await tx.allinFnbSlot.updateMany({
        where: {
          status: 'reserved',
          reservedUntil: { lte: now },
        },
        data: {
          status: 'available',
          reservedUntil: null,
          currentRegistrationId: null,
        },
      })

      const nextSlot = await tx.allinFnbSlot.findFirst({
        where: { status: 'available' },
        orderBy: { slotNumber: 'asc' },
      })

      if (!nextSlot) {
        throw new Error('NO_AVAILABLE_SLOTS')
      }

      const reservedUntil = new Date(Date.now() + reservationWindowMs)
      const registration = await tx.allinFnbRegistration.create({
        data: {
          name: form.name,
          phone: form.phone,
          email: form.email,
          model: form.model,
          reason: form.reason,
          slotNumber: nextSlot.slotNumber,
          price: nextSlot.price,
          status: 'reserved',
          paymentStatus: 'pending',
          expiresAt: reservedUntil,
        },
      })

      const updateResult = await tx.allinFnbSlot.updateMany({
        where: {
          slotNumber: nextSlot.slotNumber,
          status: 'available',
        },
        data: {
          status: 'reserved',
          reservedUntil,
          currentRegistrationId: registration.id,
        },
      })

      if (updateResult.count !== 1) {
        throw new Error('SLOT_ALREADY_TAKEN')
      }

      return {
        slotNumber: nextSlot.slotNumber,
        price: nextSlot.price,
        reservedUntil,
      }
    })

    // Gửi thông báo về Telegram
    try {
      const botToken = '8730766454:AAGXMpTFDnZJQoJCwIdXZapnSpMv_o5bKZ0'
      const chatId = '8730766454'
      const message = `🎉 <b>CÓ ĐĂNG KÝ GIỮ CHỖ MỚI! (All-in F&B)</b>\n\n👤 <b>Họ tên:</b> ${form.name}\n📞 <b>SĐT:</b> ${form.phone}\n📧 <b>Email:</b> ${form.email}\n🏪 <b>Mô hình:</b> ${form.model || 'Không có'}\n📝 <b>Lý do:</b> ${form.reason || 'Không có'}\n\n🎫 <b>Slot giữ chỗ:</b> ${reservation.slotNumber}\n💰 <b>Mức giá:</b> ${reservation.price.toLocaleString('vi-VN')} VNĐ`

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      })
    } catch (telegramError) {
      console.error('Lỗi gửi Telegram:', telegramError)
    }

    return NextResponse.json({
      ...getSummary(await getSlots()),
      reservation,
    })
  } catch (error) {
    if (error instanceof Error && error.message === 'NO_AVAILABLE_SLOTS') {
      return NextResponse.json({ error: 'No available slots' }, { status: 409 })
    }

    if (error instanceof Error && error.message === 'SLOT_ALREADY_TAKEN') {
      return NextResponse.json({ error: 'Slot already taken' }, { status: 409 })
    }

    throw error
  }
}

export async function PATCH(request: Request) {
  await ensureSlots()

  const form = await request.json().catch(() => null)

  if (!form?.slotNumber || !form?.email) {
    return NextResponse.json({ error: 'Missing confirmation fields' }, { status: 400 })
  }

  const result = await db.$transaction(async (tx) => {
    const registration = await tx.allinFnbRegistration.findFirst({
      where: {
        slotNumber: Number(form.slotNumber),
        email: form.email,
        status: 'reserved',
      },
    })

    if (!registration) return null

    await tx.allinFnbRegistration.update({
      where: { id: registration.id },
      data: {
        status: 'confirmed',
        paymentStatus: 'confirmed',
        confirmedAt: new Date(),
        expiresAt: null,
      },
    })

    await tx.allinFnbSlot.update({
      where: { slotNumber: registration.slotNumber },
      data: {
        status: 'confirmed',
        reservedUntil: null,
        currentRegistrationId: registration.id,
      },
    })

    return registration
  })

  if (!result) {
    return NextResponse.json({ error: 'Reservation not found' }, { status: 404 })
  }

  return NextResponse.json(getSummary(await getSlots()))
}
