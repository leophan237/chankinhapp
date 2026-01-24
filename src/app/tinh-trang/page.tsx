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

      {/* Daily Rituals - Chuyển Hoá Thân Tâm */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-24 border-t border-border/10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans text-gradient-silver font-bold mb-4">
            Hoạt Động Thường Nhật
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Tại Tịnh Trang, mỗi ngày là một hành trình quay về bên trong, nơi công việc và sự tu tập hòa quyện thành một dòng chảy duy nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Toạ Thiền Mỗi Sớm",
              desc: "Gác lại âu lo, bắt đầu ngày mới bằng 30 phút im lặng để định hình ý định và khơi thông nguồn sáng sáng tạo.",
              time: "08:00 AM - 08:30 AM",
              icon: Sparkles
            },
            {
              title: "Thưởng Trà Chánh Niệm",
              desc: "Dừng lại giữa bộn bề để cùng các Curator thưởng thức những chén trà đạo, tìm thấy sự quân bình trong từng ngụm nước.",
              time: "03:00 PM - 04:00 PM",
              icon: Coffee
            },
            {
              title: "Giờ Im Lặng Tuyệt Đối",
              desc: "Không gian đi sâu vào tần số tập trung cao độ, nơi chỉ có tiếng thở và nhịp đập của những ý tưởng lớn.",
              time: "10:00 AM - 12:00 PM",
              icon: Lock
            }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-silver/20 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-silver/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-silver/60" />
              </div>
              <h3 className="text-xl font-sans text-silver font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 italic opacity-80">
                "{item.desc}"
              </p>
              <div className="text-[10px] uppercase tracking-[0.2em] text-silver/40 font-bold border-t border-white/5 pt-4">
                Thời gian: {item.time}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Community Spirit - Kết Nối Tỉnh Thức */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-silver/[0.02] to-transparent"
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-12 inline-block px-4 py-2 rounded-full border border-silver/10 bg-black/20 backdrop-blur-sm">
            <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-silver/60">Tinh Thần Chân Kinh</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white italic mb-10 leading-tight">
            "Không phải mạng lưới quan hệ, <br className="hidden md:block" /> mà là sự
            <span className="text-gradient-silver not-italic font-sans font-bold"> Cộng Hưởng</span> của những tần số tỉnh thức."
          </h2>
          <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              Đứng độc lập nhưng không cô độc. Bạn làm việc trong không gian của riêng mình, nhưng hít thở chung một bầu không khí của sự hỗ trợ và thấu cảm.
            </p>
            <div className="pt-8 flex justify-center gap-12 border-t border-white/5">
              <div className="text-center">
                <div className="text-3xl font-sans font-bold text-white mb-1">200+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Hành Giả</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-sans font-bold text-white mb-1">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Tĩnh Lặng</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background glow to ground the section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-silver/[0.01] blur-[120px] rounded-full pointer-events-none" />
      </motion.section>
      {/* Footer Area */}
      <footer className="max-w-7xl mx-auto px-4 pt-16 pb-32 border-t border-border/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo-chankinh-white-03.png"
                alt="Chân Kinh Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-sans text-gradient-silver font-bold tracking-tight text-xl">Chân Kinh Online</span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Một hệ sinh thái thực thi triết lý nhân văn, nơi công nghệ và tâm linh hội tụ để khai mở những giá trị bền vững cho doanh nhân.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-silver font-semibold tracking-widest text-xs uppercase">Tọa Độ</h4>
            <nav className="flex flex-col gap-3">
              <a href="/kinh-cac" className="text-sm text-muted-foreground hover:text-silver transition-colors font-light">Kinh Các (Thư Viện)</a>
              <a href="/kinh-bo" className="text-sm text-muted-foreground hover:text-silver transition-colors font-light">Kinh Bộ (Giải Pháp)</a>
              <a href="/dao-trang" className="text-sm text-muted-foreground hover:text-silver transition-colors font-light">Đạo Tràng (Cộng Đồng)</a>
              <a href="/tong-chi" className="text-sm text-muted-foreground hover:text-silver transition-colors font-light">Tông Chỉ (Linh Hồn)</a>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-silver font-semibold tracking-widest text-xs uppercase">Liên Hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-silver/40 mt-0.5" />
                <p className="text-sm text-muted-foreground font-light leading-tight">
                  Tòa nhà Zen Tower, 123 Đường Chánh Niệm, Quận Hoàn Kiếm, Hà Nội
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground font-light">
                <span className="text-silver/40">Email:</span>
                <span>curator@chankinh.vn</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground font-light">
                <span className="text-silver/40">Hotline:</span>
                <span>1900 8888</span>
              </div>
            </div>
          </div>

          {/* Column 4: Legal/Spirit */}
          <div className="space-y-6">
            <h4 className="text-silver font-semibold tracking-widest text-xs uppercase">Pháp Lý</h4>
            <p className="text-xs text-muted-foreground/60 font-light leading-relaxed">
              © 2024 Chân Kinh Online Group. <br />
              Mọi nội dung đều thuộc bản quyền bảo tồn của Artifact Curator. <br /><br />
              <span className="italic">"Khai sáng tâm trí, vững chãi kiến tạo."</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
