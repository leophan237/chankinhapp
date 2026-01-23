'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Wifi, Coffee, Clock, Calendar, CheckCircle, XCircle, Sparkles, Star, Users, Utensils, Lock } from 'lucide-react'

interface SpaceImage {
  id: number
  name: string
  description: string
  imageUrl: string
  capacity: number
  size: string
  amenities: string[]
  available: boolean
  price: string
  location: string
  tag?: 'new' | 'special'
}

const spaces: SpaceImage[] = [
  {
    id: 1,
    name: 'Zen Garden Room',
    description: 'Không gian yên tĩnh với view vườn thiền',
    imageUrl: '/spaces/zen-garden-room.jpg',
    capacity: 4,
    size: '25 m²',
    amenities: ['High-speed WiFi', 'Air conditioning', 'Natural light'],
    available: true,
    price: '$1,200/tháng',
    location: 'Tầng 2',
    tag: 'new',
  },
  {
    id: 2,
    name: 'Lotus Hall',
    description: 'Phòng họp lớn cho team',
    imageUrl: '/spaces/lotus-hall.jpg',
    capacity: 12,
    size: '60 m²',
    amenities: ['Projector', 'Whiteboard', 'Video conferencing', 'Water dispenser'],
    available: true,
    price: '$3,500/tháng',
    location: 'Tầng 1',
    tag: 'special',
  },
  {
    id: 3,
    name: 'Mindful Corner',
    description: 'Góc làm việc riêng tư',
    imageUrl: '/spaces/mindful-corner.jpg',
    capacity: 1,
    size: '8 m²',
    amenities: ['Ergonomic chair', 'Standing desk', 'Personal storage'],
    available: false,
    price: '$800/tháng',
    location: 'Tầng 2',
  },
  {
    id: 4,
    name: 'Tea Lounge',
    description: 'Khu vực relax & networking',
    imageUrl: '/spaces/tea-lounge.jpg',
    capacity: 15,
    size: '40 m²',
    amenities: ['Complimentary tea', 'Comfortable seating', 'Plants', 'Ambient music'],
    available: true,
    price: 'Miễn phí cho thành viên',
    location: 'Tầng 1',
  },
  {
    id: 5,
    name: 'Focus Pod',
    description: 'Pod yên tĩnh cho deep work',
    imageUrl: '/spaces/focus-pod.jpg',
    capacity: 1,
    size: '4 m²',
    amenities: ['Soundproof', 'Ventilation', 'Task lighting'],
    available: true,
    price: '$600/tháng',
    location: 'Tầng 2',
  },
  {
    id: 6,
    name: 'Collaborative Space',
    description: 'Khu vực làm việc chung sáng tạo',
    imageUrl: '/spaces/collaborative-space.jpg',
    capacity: 20,
    size: '80 m²',
    amenities: ['Hot desks', 'Meeting pods', 'Flexible seating', 'Power outlets'],
    available: true,
    price: '$1,500/tháng',
    location: 'Tầng 1',
  },
]

export default function TinhTrangPage() {
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  const handleBook = (spaceId: number) => {
    setSelectedSpace(spaceId)
    setShowBookingModal(true)
  }

  return (
    <div className="min-h-screen texture-overlay">
      {/* Header - Relative positioning, no z-index */}
      <header className="border-b border-border/20 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-sans text-gradient-silver font-semibold mb-2">
              Tịnh Trang
            </h1>
            <p className="text-muted-foreground font-light">
              Sacred Co-working Space
            </p>
          </motion.div>
        </div>
      </header>

      {/* Spacer to prevent content from being covered by sticky header */}
      <div className="h-8" />

      {/* Location Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 py-6"
      >
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-silver/60" />
            <span className="font-light">123 Zen Street, Hanoi</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-silver/60" />
            <span className="font-light">24/7 Access</span>
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-silver/60" />
            <span className="font-light">Fiber WiFi</span>
          </div>
        </div>
      </motion.div>

      {/* Uniform Grid Gallery */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {spaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`
                group relative overflow-hidden rounded-2xl border bg-card/30 backdrop-blur-sm
                ${space.tag === 'new'
                  ? 'border-emerald-400/60 shadow-[0_0_20px_rgba(52,211,153,0.3)]'
                  : space.tag === 'special'
                  ? 'border-amber-400/60 shadow-[0_0_25px_rgba(251,191,36,0.4)]'
                  : 'border-border/40 hover:border-silver/40'
                }
                transition-all duration-500
              `}
            >
              {/* Tag Badge */}
              {space.tag && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`
                    absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold
                    ${space.tag === 'new'
                      ? 'bg-emerald-500/20 border-2 border-emerald-400/60 text-emerald-300'
                      : 'bg-amber-500/20 border-2 border-amber-400/60 text-amber-300'
                    }
                    backdrop-blur-sm
                  `}
                >
                  {space.tag === 'new' ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      New
                    </>
                  ) : (
                    <>
                      <Star className="w-3.5 h-3.5 fill-current" />
                      Special
                    </>
                  )}
                </motion.div>
              )}

              {/* Glow Effect for Tagged Cards */}
              {space.tag === 'new' && (
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent pointer-events-none"
                />
              )}

              {space.tag === 'special' && (
                <motion.div
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/15 to-transparent pointer-events-none"
                />
              )}

              {/* Space Image with uniform aspect ratio */}
              <div className="relative overflow-hidden cursor-pointer aspect-[4/3]">
                <img
                  src={space.imageUrl}
                  alt={space.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex flex-col items-center justify-center p-6"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-sans text-silver font-semibold mb-2">
                      {space.name}
                    </h3>
                    <p className="text-sm text-foreground font-light leading-relaxed mb-4">
                      {space.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={!space.available}
                      onClick={() => handleBook(space.id)}
                      className={`
                        px-6 py-3 rounded-lg font-light transition-colors
                        ${space.available
                          ? 'bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20'
                          : 'bg-muted/30 border border-border/30 text-muted-foreground cursor-not-allowed'
                        }
                      `}
                    >
                      {space.available ? 'Đặt chỗ' : 'Hết chỗ'}
                    </motion.button>
                  </div>
                </motion.div>

                {/* Availability Badge */}
                <div className="absolute top-4 right-4 z-10">
                  {space.available ? (
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-silver/10 border border-silver/30 backdrop-blur-sm">
                      <CheckCircle className="w-4 h-4 text-silver" />
                      <span className="text-xs text-silver font-medium">Còn chỗ</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted/30 border border-border/30 backdrop-blur-sm">
                      <XCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground font-medium">Hết chỗ</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Space Info Card */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6 space-y-4"
              >
                <div>
                  <h3 className="text-xl font-sans text-gradient-silver font-semibold mb-1">
                    {space.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    {space.description}
                  </p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-silver/50" />
                    <span className="font-light">{space.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-silver/50" />
                    <span className="font-light">{space.capacity} người</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-silver/50" />
                    <span className="font-light">{space.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="w-1 h-1 rounded-full bg-silver" />
                    <span>{space.price}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2 font-light">
                    Tiện ích
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {space.amenities.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded bg-silver/10 border border-silver/20 text-xs text-silver/80 font-light"
                      >
                        {amenity}
                      </span>
                    ))}
                    {space.amenities.length > 3 && (
                      <span className="px-2 py-1 rounded bg-muted/20 text-xs text-muted-foreground/60 font-light">
                        +{space.amenities.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Book Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!space.available}
                  onClick={() => handleBook(space.id)}
                  className={`
                    w-full px-5 py-3 rounded-lg font-light transition-all duration-300
                    ${space.available
                      ? 'bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 hover:border-silver/40'
                      : 'bg-muted/20 border border-border/20 text-muted-foreground/50 cursor-not-allowed'
                    }
                  `}
                >
                  {space.available ? (
                    <>
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Đặt chỗ ngay
                    </>
                  ) : (
                    'Đang bảo trì'
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Amenities Overview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 py-12 border-t border-border/20"
      >
        <h2 className="text-3xl md:text-4xl font-sans text-gradient-silver font-semibold mb-8 text-center">
          Tiện Ích Chung
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Wifi, title: 'High-Speed WiFi', desc: 'Fiber optic 1Gbps' },
            { icon: Coffee, title: 'Zen Tea Station', desc: 'Trà miễn phí 24/7' },
            { icon: Clock, title: '24/7 Access', desc: 'Vào bất cứ lúc nào' },
            { icon: Users, title: 'Meeting Rooms', desc: 'Đặt chỗ dễ dàng' },
            { icon: Utensils, title: 'Kitchen', desc: 'Bếp đầy đủ tiện nghi' },
            { icon: Lock, title: 'Storage Lockers', desc: 'Két an toàn' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border/30 bg-card/30 hover:border-silver/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg border border-silver/20 bg-card/50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-silver/70" />
                </div>
                <div>
                  <h3 className="text-lg font-sans text-silver font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Booking CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto px-4 py-12 border-t border-border/20 text-center"
      >
        <div className="p-10 rounded-2xl border border-silver/30 bg-gradient-to-br from-silver/5 to-transparent backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-sans text-gradient-silver font-semibold mb-4">
            Đặt Chỗ Ngay
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Chọn không gian phù hợp với nhu cầu của bạn và trải nghiệm sự bình an trong công việc
            tại Tịnh Trang.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-xl bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-all duration-300 font-light text-lg"
          >
            Liên hệ đặt chỗ
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}
