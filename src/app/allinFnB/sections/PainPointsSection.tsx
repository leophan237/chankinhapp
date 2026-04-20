'use client'

import { motion } from 'framer-motion'

const painPoints = [
  {
    number: '01.',
    title: 'Bẫy "Sản Phẩm Ngon"',
    description: 'Bạn là một đầu bếp tài ba, một barista xuất sắc, nhưng lại là một CEO tồi của chính quán mình? Quán đông khách nhưng cuối tháng cộng sổ lại không thấy tiền mặt đâu?',
  },
  {
    number: '02.',
    title: 'Làm Thuê Cho Chính Mình',
    description: 'Bạn mở quán để mua sự tự do, nhưng cuối cùng lại kẹt 14 tiếng/ngày ở quán để canh chừng nhân viên, lo xử lý khủng hoảng truyền thông và liên tục bù lỗ?',
  },
  {
    number: '03.',
    title: 'Bơi Trong Mớ Bòng Bong',
    description: 'Marketing, Vận hành (SOP), Dòng tiền (P&L)... bạn đang làm tất cả bằng bản năng và mong chờ sự may mắn thay vì sở hữu một công thức chiến thắng?',
  },
]

export default function PainPointsSection() {
  return (
    <section className="py-16 md:py-24 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: Content */}
        <div className="flex-1 w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6 leading-tight tracking-tight">
              Có quá nhiều vấn đề bạn chưa rõ phải giải quyết thế nào
            </h2>
            <div className="h-px w-16 bg-white/30" />
          </motion.div>

          {/* Pain Point List */}
          <div className="space-y-8">
            {painPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="flex gap-6 group"
              >
                <div className="text-xl font-light text-silver/40 font-mono pt-1">
                  {point.number}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-silver transition-colors">{point.title}</h3>
                  <p className="text-base text-silver/60 font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 pl-6 border-l border-white/20"
          >
            <p className="text-lg text-silver/80 font-light italic leading-relaxed mb-3">
              &ldquo;Nếu có 6 tiếng để chặt cây, tôi sẽ dành 4 tiếng để mài rìu&rdquo;
            </p>
            <p className="text-xs text-silver/40 tracking-[0.2em] uppercase font-semibold">
              Abraham Lincoln
            </p>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 w-full relative"
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
            <img 
              src="/images/fnb_details.png" 
              alt="F&B Detail Macro" 
              className="w-full h-full object-cover grayscale mix-blend-luminosity hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
