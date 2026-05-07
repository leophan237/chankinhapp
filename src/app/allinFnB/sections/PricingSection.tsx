'use client'

import { FormEvent, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Circle, Clock3, LockKeyhole, Mail, Phone, UserRound } from 'lucide-react'

type SlotStatus = 'available' | 'reserved' | 'confirmed'

type Slot = {
  slotNumber: number
  price: number
  status: SlotStatus
  reservedUntil?: number
}

type PricingResponse = {
  totalSlots: number
  confirmedCount: number
  nextSlotNumber: number | null
  nextPrice: number | null
  isFull: boolean
  slots: Slot[]
  reservation?: {
    slotNumber: number
    price: number
    reservedUntil: number
  }
}

const statusLabels: Record<SlotStatus, string> = {
  available: 'Chưa có người',
  reserved: 'Đang giữ chỗ',
  confirmed: 'Đã xác nhận',
}

const initialSlots: Slot[] = Array.from({ length: 10 }, (_, index) => ({
  slotNumber: index + 1,
  price: 4000000 + index * 2000000,
  status: 'available',
}))

function formatPrice(value: number | null) {
  if (!value) return 'Đã đủ chỗ'
  return `${value / 1000000} triệu`
}

function formatFullPrice(value: number | null) {
  if (!value) return 'Đã đủ chỗ'
  return new Intl.NumberFormat('vi-VN').format(value) + 'đ'
}

function getStatusClass(status: SlotStatus, isNext: boolean, isLastAvailable: boolean) {
  if (status === 'confirmed') return 'opacity-35'
  if (isNext) return 'border-white/35 bg-white/[0.08] text-white'
  if (isLastAvailable) return 'border-amber-200/25 bg-amber-200/[0.04]'
  if (status === 'reserved') return 'border-white/15 bg-white/[0.04] text-silver/70'
  return 'border-white/10 bg-black/20 text-silver/65'
}

export default function PricingSection() {
  const [pricing, setPricing] = useState<PricingResponse>({
    totalSlots: 10,
    confirmedCount: 0,
    nextSlotNumber: 1,
    nextPrice: 4000000,
    isFull: false,
    slots: initialSlots,
  })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    model: '',
    reason: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [reservation, setReservation] = useState<PricingResponse['reservation'] | null>(null)

  async function refreshPricing() {
    const response = await fetch('/api/allin-fnb/slots', { cache: 'no-store' })
    if (!response.ok) return
    setPricing(await response.json())
  }

  useEffect(() => {
    void refreshPricing()
    const interval = window.setInterval(() => {
      void refreshPricing()
    }, 7000)

    return () => window.clearInterval(interval)
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFeedback(null)
    setReservation(null)

    try {
      const response = await fetch('/api/allin-fnb/slots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setFeedback(data.error === 'No available slots' ? 'Lớp đã đủ 10 vị trí.' : 'Vui lòng kiểm tra lại thông tin đăng ký.')
        return
      }

      setPricing(data)
      setReservation(data.reservation)
      setFeedback(
        `Bạn đang giữ vị trí #${data.reservation.slotNumber} trong 10 phút. Vui lòng thanh toán để giữ mức phí ${formatFullPrice(data.reservation.price)}.`
      )
      setFormData({ name: '', phone: '', email: '', model: '', reason: '' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextSlotNumber = pricing.nextSlotNumber
  const nextPrice = pricing.nextPrice
  const reservedCount = pricing.slots.filter((slot) => slot.status === 'reserved').length
  const availableSlots = pricing.slots.filter((slot) => slot.status === 'available')
  const lastAvailableSlot = availableSlots.length === 1 ? availableSlots[0].slotNumber : null

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-black/40 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-[11px] tracking-[0.3em] text-silver/60 uppercase mb-4 block font-semibold">
            Dynamic Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">Lớp học không có giá cố định</h2>
          <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
          <p className="text-base md:text-lg text-silver/65 font-light max-w-3xl mx-auto leading-relaxed">
            Người đến sau trả nhiều hơn người đến trước. Không phải để tạo áp lực. Mà để phản ánh sự khác biệt giữa người quyết định sớm và người chần chừ.
          </p>
          <p className="text-[11px] tracking-[0.25em] uppercase text-silver/40 mt-6">Chỉ có 10 vị trí. Không mở thêm.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-sm overflow-hidden"
          >
            <div className="grid grid-cols-[0.8fr_1fr_1.2fr] gap-3 px-5 py-4 border-b border-white/10 text-[10px] tracking-[0.22em] uppercase text-silver/40">
              <span>Thứ tự</span>
              <span>Học phí</span>
              <span>Trạng thái</span>
            </div>

            <div className="divide-y divide-white/5">
              {pricing.slots.map((slot) => {
                const isNext = slot.slotNumber === nextSlotNumber
                const isLastAvailable = slot.slotNumber === lastAvailableSlot
                const statusClass = getStatusClass(slot.status, isNext, isLastAvailable)

                return (
                  <div
                    key={slot.slotNumber}
                    className={`grid grid-cols-[0.8fr_1fr_1.2fr] gap-3 px-5 py-4 border-l transition-all duration-300 ${statusClass} ${
                      isNext ? 'border-l-white' : isLastAvailable ? 'border-l-amber-200/60' : 'border-l-transparent'
                    }`}
                  >
                    <span className="text-sm md:text-base font-semibold">#{slot.slotNumber}</span>
                    <span className="text-sm md:text-base">{formatPrice(slot.price)}</span>
                    <span className="flex items-center gap-2 text-xs md:text-sm">
                      {slot.status === 'confirmed' ? (
                        <Check className="w-4 h-4 shrink-0" />
                      ) : slot.status === 'reserved' ? (
                        <Clock3 className="w-4 h-4 shrink-0" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 shrink-0" />
                      )}
                      {isNext ? 'Vị trí tiếp theo' : isLastAvailable ? 'Vị trí cuối' : statusLabels[slot.status]}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-7"
            >
              <p className="text-[10px] tracking-[0.25em] uppercase text-silver/40 mb-4">Trạng thái hiện tại</p>
              <p className="text-xl md:text-2xl font-semibold text-white leading-snug mb-3">
                {pricing.isFull
                  ? '10/10 vị trí đã được giữ hoặc xác nhận.'
                  : `Hiện tại: ${pricing.confirmedCount + reservedCount}/10 vị trí đã được đăng ký. Bạn sẽ là người thứ ${nextSlotNumber}.`}
              </p>
              <p className="text-sm text-silver/55 font-light leading-relaxed">
                {reservedCount > 0
                  ? `${reservedCount} vị trí đang được giữ tạm thời. Bảng trạng thái tự cập nhật mỗi vài giây.`
                  : 'Bảng trạng thái tự cập nhật mỗi vài giây để phản ánh thứ tự đăng ký mới nhất.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm p-6 md:p-7"
            >
              <p className="text-[10px] tracking-[0.25em] uppercase text-silver/40 mb-4">Mức phí của bạn lúc này</p>
              <div className="text-4xl md:text-5xl font-bold text-white mb-4">{formatPrice(nextPrice)}</div>
              <p className="text-sm md:text-base text-silver/70 font-light leading-relaxed">
                {pricing.isFull
                  ? 'Lớp đã đủ vị trí ở thời điểm hiện tại.'
                  : `Nếu đăng ký lúc này, bạn sẽ vào vị trí #${nextSlotNumber} với mức phí ${formatFullPrice(nextPrice)}.`}
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24 }}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-sm p-6 md:p-7 space-y-4"
            >
              <p className="text-[10px] tracking-[0.25em] uppercase text-silver/40 mb-2">Giữ vị trí đăng ký</p>

              <label className="block">
                <span className="sr-only">Họ và tên</span>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <UserRound className="w-4 h-4 text-silver/45" />
                  <input
                    required
                    value={formData.name}
                    onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Họ và tên"
                    className="w-full bg-transparent text-sm text-white placeholder:text-silver/35 outline-none"
                  />
                </div>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="sr-only">Số điện thoại</span>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <Phone className="w-4 h-4 text-silver/45" />
                    <input
                      required
                      value={formData.phone}
                      onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
                      placeholder="Số điện thoại"
                      className="w-full bg-transparent text-sm text-white placeholder:text-silver/35 outline-none"
                    />
                  </div>
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <Mail className="w-4 h-4 text-silver/45" />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                      placeholder="Email"
                      className="w-full bg-transparent text-sm text-white placeholder:text-silver/35 outline-none"
                    />
                  </div>
                </label>
              </div>

              <input
                value={formData.model}
                onChange={(event) => setFormData((current) => ({ ...current, model: event.target.value }))}
                placeholder="Mô hình F&B hiện tại (nếu có)"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-silver/35 outline-none"
              />
              <textarea
                value={formData.reason}
                onChange={(event) => setFormData((current) => ({ ...current, reason: event.target.value }))}
                placeholder="Lý do tham gia"
                rows={3}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-silver/35 outline-none"
              />

              <button
                type="submit"
                disabled={isSubmitting || pricing.isFull}
                className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 text-sm font-semibold tracking-wide text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <LockKeyhole className="w-4 h-4" />
                {isSubmitting ? 'Đang giữ vị trí...' : 'GIỮ VỊ TRÍ HIỆN TẠI'}
              </button>
              
              <p className="text-center text-xs text-red-400/80 mt-2 font-medium animate-pulse">
                Cảnh báo: 12 người khác đang xem trang này lúc này. Nếu bạn thoát ra, suất giá rẻ hiện tại có thể không còn.
              </p>

              {feedback && !reservation && (
                <p className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-silver/75 font-light leading-relaxed mt-4">
                  {feedback}
                </p>
              )}

              {reservation && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.05] p-6 mt-4 text-center">
                  <p className="text-emerald-400 font-medium mb-1">Đăng ký thành công!</p>
                  <p className="text-sm text-silver/80 mb-5">
                    {feedback}
                  </p>
                  <div className="bg-white p-3 rounded-xl inline-block mb-3">
                    {/* VietQR Integration */}
                    <img
                      src={`https://img.vietqr.io/image/VCB-9776776856-compact2.png?amount=${reservation.price}&addInfo=AllinFnB%20Slot%20${reservation.slotNumber}%20${formData.phone}&accountName=PHAN%20THIEN%20PHU`}
                      alt="VietQR Payment"
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                  <p className="text-xs text-silver/60">
                    Sử dụng App ngân hàng để quét mã VietQR.
                  </p>
                </div>
              )}
            </motion.form>

            {/* Risk Reversal Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl border-2 border-emerald-500/20 bg-emerald-500/[0.02] p-6 md:p-7 relative overflow-hidden mt-6"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50" />
              <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-emerald-400">🛡️</span> Cam Kết Hoàn Tiền 100% Không Rủi Ro
              </h4>
              <p className="text-sm text-silver/70 leading-relaxed font-light">
                Nếu sau buổi học đầu tiên, bạn cảm thấy kiến thức không thực chiến, không áp dụng được vào mô hình F&B của bạn, chúng tôi sẽ hoàn trả 100% học phí ngay lập tức, không hỏi thêm một câu nào. Bạn vẫn được giữ lại bộ tài liệu SOP trị giá 10 triệu đồng xem như lời xin lỗi vì đã làm mất thời gian của bạn.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
