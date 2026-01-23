'use client'

import { motion } from 'framer-motion'
import { Package, Sparkles, Clock, Users, Star } from 'lucide-react'

interface Artifact {
  id: number
  name: string
  vietnameseName: string
  description: string
  details: string[]
  category: string
  year: string
  significance: string
  icon: React.ComponentType<{ className?: string }>
}

const artifacts: Artifact[] = [
  {
    id: 1,
    name: 'Chân Kinh Agency',
    vietnameseName: 'Sáng Tạo Truyền Thông Nhân Văn',
    description: 'Đơn vị sáng tạo truyền thông kết hợp nghệ thuật và giá trị nhân văn.',
    details: [
      'Brand Storytelling',
      'Cultural Marketing',
      'Thiết kế nhận thức',
      'Chiến lược nội dung',
    ],
    category: 'Dịch vụ',
    year: '2022',
    significance: 'Tạo cầu nối giữa thương hiệu và người tiêu dùng thông qua những câu chuyện ý nghĩa.',
    icon: Sparkles,
  },
  {
    id: 2,
    name: 'Chân Kinh F&B',
    vietnameseName: 'Ẩm Thực Chánh Niệm',
    description: 'Không gian ẩm thực kết hợp chánh niệm và trải nghiệm ẩm thực tinh tế.',
    details: [
      'Thực phẩm thuần khiết',
      'Không gian thiền',
      'Ẩm thực chữa lành',
      'Dịch vụ tận tâm',
    ],
    category: 'Không gian',
    year: '2023',
    significance: 'Biến mỗi bữa ăn thành một thực hành chánh niệm và kết nối.',
    icon: Package,
  },
  {
    id: 3,
    name: 'Chân Kinh Consulting',
    vietnameseName: 'Tư Vấn Chiến Lược Nhận Thức',
    description: 'Dịch vụ tư vấn chiến lược doanh nghiệp với nền tảng nhận thức.',
    details: [
      'Phát triển lãnh đạo',
      'Chiến lược tổ chức',
      'Văn hóa doanh nghiệp',
      'Quản trị thay đổi',
    ],
    category: 'Dịch vụ',
    year: '2021',
    significance: 'Định hình lại cách thức lãnh đạo và vận hành doanh nghiệp theo hướng nhân văn.',
    icon: Star,
  },
  {
    id: 4,
    name: 'Chân Kinh Space',
    vietnameseName: 'Không Gian Thiền Đường',
    description: 'Không gian thực hành thiền định và các workshop chuyển hóa.',
    details: [
      'Phòng thiền',
      'Workshop chuyển hóa',
      'Retreat linh hoạt',
      'Không gian cộng đồng',
    ],
    category: 'Không gian',
    year: '2024',
    significance: 'Nơi thực hành và trải nghiệm trực tiếp những nguyên lý của Chân Kinh.',
    icon: Clock,
  },
  {
    id: 5,
    name: 'Chân Kinh Education',
    vietnameseName: 'Giáo Dục Nhận Thức',
    description: 'Hệ thống giáo dục và đào tạo về lãnh đạo nhận thức.',
    details: [
      'Chương trình học tập',
      'Mentorship',
      'Certification',
      'Cộng đồng học tập',
    ],
    category: 'Giáo dục',
    year: '2023',
    significance: 'Trao quyền cho thế hệ lãnh đạo mới với công cụ tâm linh và thực tiễn.',
    icon: Users,
  },
]

export default function KinhBoPage() {
  return (
    <div className="min-h-screen texture-overlay">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-silver/30 flex items-center justify-center bg-card">
            <Package className="w-10 h-10 text-silver" />
          </div>
          <h1 className="text-5xl md:text-6xl font-sans text-gradient-silver font-semibold mb-4">
            Kinh Bộ
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Sacred Collections & Offerings
          </p>
        </motion.div>

        {/* Introductory Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-20"
        >
          <div className="max-w-3xl mx-auto p-10 rounded-2xl border border-silver/20 bg-gradient-to-br from-silver/5 to-transparent text-center">
            <p className="text-xl md:text-2xl font-sans text-foreground/90 font-light leading-relaxed mb-4">
              "Mỗi bộ là một hiện thân của triết lý Chân Kinh,
              không phải sản phẩm để bán,
              mà là cơ hội để thực hành và trải nghiệm."
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-silver/50 to-transparent mx-auto" />
          </div>
        </motion.div>

        {/* Museum-Style Artifacts List */}
        <div className="space-y-16">
          {artifacts.map((artifact, index) => (
            <motion.div
              key={artifact.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              {/* Number Indicator */}
              <div className="absolute -left-4 md:left-0 top-0 w-12 h-12 rounded-lg border border-silver/20 bg-card/50 flex items-center justify-center text-silver font-sans text-xl font-semibold">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Artifact Card */}
              <div className="ml-12 md:ml-16 p-8 md:p-10 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm hover:border-silver/30 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left: Icon & Basic Info */}
                  <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-24 h-24 rounded-2xl border border-silver/20 bg-card/50 flex items-center justify-center"
                    >
                      <artifact.icon className="w-12 h-12 text-silver" />
                    </motion.div>

                    {/* Name */}
                    <div className="space-y-2">
                      <h2 className="text-2xl md:text-3xl font-sans text-gradient-silver font-semibold">
                        {artifact.name}
                      </h2>
                      <p className="text-lg text-silver/70 font-light">
                        {artifact.vietnameseName}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                      <span className="font-light">{artifact.category}</span>
                      <span className="font-light">•</span>
                      <span className="font-light">{artifact.year}</span>
                    </div>
                  </div>

                  {/* Right: Description & Details */}
                  <div className="lg:col-span-8 space-y-6">
                    {/* Description */}
                    <p className="text-lg text-foreground/90 font-light leading-relaxed">
                      {artifact.description}
                    </p>

                    {/* Significance Quote */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-silver/5 to-transparent border-l-4 border-silver/30">
                      <p className="text-base text-muted-foreground font-light italic leading-relaxed">
                        "{artifact.significance}"
                      </p>
                    </div>

                    {/* Details List */}
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-light">
                        Các yếu tố
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {artifact.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-muted-foreground font-light"
                          >
                            <div className="w-1 h-1 rounded-full bg-silver/50" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Request Access Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-silver/10 to-silver/5 border border-silver/30 text-silver hover:from-silver/20 hover:to-silver/10 transition-all duration-300 font-light"
                    >
                      Thỉnh Kinh
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 p-12 rounded-2xl border border-silver/30 bg-gradient-to-br from-silver/5 to-transparent text-center"
        >
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-silver/60" />
          <h2 className="text-3xl md:text-4xl font-sans text-gradient-silver font-semibold mb-4">
            Tìm Cơ Hội Của Bạn
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Mỗi bộ là một cơ hội để thực hành và trải nghiệm. Hãy chọn con đường phù hợp
            với hành trình của bạn để bắt đầu.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-colors font-light text-lg"
          >
            Liên Hệ Tư Vấn
          </motion.button>
        </motion.div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground/60 font-light tracking-wide">
            MỌI KINH BỘ ĐỀU ĐƯỢC DÀNH CHO NHỮNG NGƯỜI TRONG TÂM
          </p>
        </motion.div>
      </div>
    </div>
  )
}
