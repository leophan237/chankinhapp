'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Sự khác biệt lớn nhất của Phú không phải là dạy bạn nấu ăn ngon, mà là dạy bạn cách thiết kế một cỗ máy sinh lời. Nhờ tư duy hệ thống của Phú, chuỗi của chúng tôi đã cắt giảm được 30% chi phí ẩn chỉ sau 2 tháng áp dụng.",
    author: "Anh Nguyễn Văn A",
    role: "Founder Chuỗi Cà Phê X",
  },
  {
    quote: "Một người có tư duy tài chính sắc bén hiếm hoi trong ngành F&B. Lộ trình All-in F&B đã giúp tôi hiểu thế nào là 'tiền tệ hóa thương hiệu' và chuẩn bị hồ sơ gọi vốn chuyên nghiệp.",
    author: "Chị Lê Thị B",
    role: "CEO Nhà hàng Y",
  },
  {
    quote: "Bài toán chia sẻ lợi nhuận và khoán cho cửa hàng trưởng đã hoàn toàn thay đổi cách tôi vận hành. Giờ đây tôi có thể rời quán 1 tháng mà hệ thống vẫn tự chạy trơn tru.",
    author: "Anh Trần Văn C",
    role: "Founder Z Bakery",
  },
]

export default function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white/[0.01] border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] text-silver/60 uppercase mb-4 block font-semibold">
            Góc nhìn chuyên gia
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
            Họ nói gì về người dẫn đường?
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col relative"
            >
              <Quote className="w-10 h-10 text-white/10 absolute top-6 right-6" />
              <p className="text-silver/80 font-light leading-relaxed mb-8 flex-1 relative z-10 italic">
                "{item.quote}"
              </p>
              <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{item.author.charAt(4)}</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{item.author}</p>
                  <p className="text-[11px] text-silver/50 uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
