'use client'

import { motion } from 'framer-motion'
import { Clock, Wine, Coffee, Percent, Landmark, UserCheck, Handshake } from 'lucide-react'

const values = [
  { icon: Clock, label: '18 Giờ Thực Chiến', description: 'Đóng gói toàn bộ hệ thống kinh doanh F&B (Trị giá 20.000.000đ)' },
  { icon: UserCheck, label: 'Tư Vấn Riêng 1:1', description: 'Phân tích trực tiếp case study doanh nghiệp của bạn (Trị giá 5.000.000đ/giờ)' },
  { icon: Percent, label: 'Ưu Đãi Đặc Quyền XCAP', description: 'Giảm 10-12% phí dịch vụ Setup & Marketing (Tiết kiệm > 50.000.000đ)' },
  { icon: Landmark, label: 'Hỗ Trợ Cấp Vốn', description: 'Được ưu tiên thẩm định và tiếp cận nguồn vốn từ đối tác tín dụng' },
  { icon: Handshake, label: 'Mạng Lưới Quỹ Mạo Hiểm', description: 'Cơ hội tiếp cận hệ sinh thái quỹ đầu tư quy mô > 10 Triệu USD' },
  { icon: Coffee, label: 'Premium Networking', description: 'Kết nối tinh hoa ngành F&B trong không gian Tea Break chất lượng cao' },
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
            Hệ sinh thái XCAP
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
            ĐẶC QUYỀN TRỊ GIÁ HÀNG TRĂM TRIỆU
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
          <p className="text-base text-silver/60 font-light max-w-lg mx-auto leading-relaxed">
            Bạn không chỉ học kiến thức, bạn đang gia nhập một hệ sinh thái hỗ trợ toàn diện từ vận hành đến dòng vốn.
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
