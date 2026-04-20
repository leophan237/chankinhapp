'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

const suitableFor = [
  'Chủ quán cà phê, nhà hàng đang vận hành tốt nhưng không biết cách đóng gói để nhân bản.',
  'Founder có "sản phẩm ngon" nhưng dòng tiền luôn âm, không kiểm soát được chi phí (Food Cost).',
  'Quản lý cấp trung (Store Manager, F&B Manager) muốn nâng cấp tư duy lên cấp độ làm chủ doanh nghiệp.',
  'Nhà đầu tư tay ngang muốn mở quán nhưng sợ rủi ro "vứt tiền qua cửa sổ" vì thiếu kiến thức hệ thống.',
]

const notSuitableFor = [
  'Những người tìm kiếm "công thức nấu ăn ngon" (Khóa học này dạy quản trị và kiếm tiền, không dạy pha chế/nấu nướng).',
  'Những ai mang tâm lý "làm cho vui", mở quán để "có chỗ bạn bè tụ tập" mà không quan tâm đến Lợi nhuận (P&L).',
  'Founder ảo tưởng "học xong sẽ thành tỷ phú sau 1 đêm" mà không chịu xắn tay áo áp dụng quy trình.',
]

export default function TargetAudienceSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#0a0c10] border-t border-white/5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-emerald-500/5 blur-[120px] rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] text-silver/60 uppercase mb-4 block font-semibold">
            Chân dung học viên
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
            Ai nên tham gia ALL-IN F&B?
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
          <p className="text-base text-silver/60 font-light max-w-2xl mx-auto leading-relaxed">
            Chúng tôi thiết kế chương trình này dành cho những người kinh doanh thực chiến, không dành cho những kẻ mộng mơ.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Suitable */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-transparent"
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              <h3 className="text-xl md:text-2xl font-bold text-emerald-50">KHÓA HỌC DÀNH CHO BẠN, NẾU:</h3>
            </div>
            <ul className="space-y-6">
              {suitableFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p className="text-emerald-100/80 font-light leading-relaxed text-sm md:text-base">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not Suitable */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl border border-rose-500/20 bg-gradient-to-b from-rose-500/5 to-transparent"
          >
            <div className="flex items-center gap-3 mb-8">
              <XCircle className="w-8 h-8 text-rose-400/80" />
              <h3 className="text-xl md:text-2xl font-bold text-rose-100/90">BẠN KHÔNG NÊN THAM GIA, NẾU:</h3>
            </div>
            <ul className="space-y-6">
              {notSuitableFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400/60 mt-2 shrink-0" />
                  <p className="text-rose-100/70 font-light leading-relaxed text-sm md:text-base">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
