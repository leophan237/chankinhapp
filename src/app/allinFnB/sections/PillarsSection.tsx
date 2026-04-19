'use client'

import { motion } from 'framer-motion'
import { DollarSign, Megaphone, BarChart3, Settings } from 'lucide-react'

const pillars = [
  {
    icon: DollarSign,
    title: 'Tài Chính',
    items: ['Kế hoạch đầu tư', 'Quản lý dòng tiền', 'Phân tích Lãi lỗ', 'Sử dụng đòn bẩy vốn'],
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    items: ['Phát triển thương hiệu', 'Quản trị nội dung', 'Định hướng chiến lược', 'Sáng tạo hình ảnh'],
  },
  {
    icon: BarChart3,
    title: 'Kinh Doanh',
    items: ['Chiến lược tăng thu', 'Chiến lược đàm phán', 'Tìm kiếm đối tác', 'Xây dựng tệp khách'],
  },
  {
    icon: Settings,
    title: 'Quản Trị',
    items: ['Nhân sự, hành chính', 'Quản lý hàng hóa', 'Pháp lý', 'Rủi ro & Cơ hội'],
  },
]

export default function PillarsSection() {
  return (
    <section className="py-16 md:py-24 px-4 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] text-silver/60 uppercase mb-4 block font-semibold">
            Generalist &gt; Specialist
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
            Nắm rõ mọi thứ từ khi bắt đầu
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
          <p className="text-base text-silver/60 font-light max-w-xl mx-auto leading-relaxed">
            Trở thành một Generalist thay cho một Specialist, ứng dụng 4 thành tố kinh doanh F&B để làm chủ bức tranh toàn cảnh.
          </p>
        </motion.div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 rounded-xl border border-white/5 hover:border-white/20 bg-black/40 backdrop-blur-sm transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 mb-6 group-hover:bg-white/10 transition-colors duration-300">
                <pillar.icon className="w-5 h-5 text-white/80" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-6">{pillar.title}</h3>
              <ul className="space-y-4">
                {pillar.items.map((item, i) => (
                  <li key={i} className="text-sm text-silver/60 font-light flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-silver/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
