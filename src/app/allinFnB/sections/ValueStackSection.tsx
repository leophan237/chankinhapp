'use client'

import { motion } from 'framer-motion'
import { Clock, Wine, Coffee, Percent, Landmark, UserCheck, Handshake } from 'lucide-react'

const values = [
  { icon: Clock, label: '18 Giờ Học', description: 'Kiến thức chuyên sâu, chia nhỏ dễ tiếp thu' },
  { icon: Wine, label: 'Cocktail Chill', description: 'Networking thư giãn trong buổi học' },
  { icon: Coffee, label: 'Tea Break', description: 'Thư giãn, tái tạo năng lượng' },
  { icon: Percent, label: 'Ưu đãi 9% Marketing', description: 'Dịch vụ Marketing & Setup từ XCAP' },
  { icon: Landmark, label: 'Cấp Vốn', description: 'Hỗ trợ tiếp cận nguồn vốn đầu tư' },
  { icon: UserCheck, label: 'Tư Vấn Riêng', description: 'Nhận tư vấn kinh doanh theo case riêng' },
  { icon: Handshake, label: 'Angel & Quỹ Mạo Hiểm', description: 'Kết nối trực tiếp nhà đầu tư' },
]

export default function ValueStackSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-black/80">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] text-silver/60 uppercase mb-4 block font-semibold">
            Giá trị vô cực
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
            Không chỉ là kiến thức
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
          <p className="text-base text-silver/60 font-light max-w-lg mx-auto leading-relaxed">
            Buổi học được chia ra nhiều hoạt động giúp bạn thư thái nhất, dễ dàng tiếp nhận khối kiến thức khổng lồ.
          </p>
        </motion.div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="flex items-start gap-4 p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 shrink-0 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-white/80" />
              </div>
              <div>
                <h4 className="text-base font-medium text-white mb-1">{item.label}</h4>
                <p className="text-sm text-silver/60 font-light leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
