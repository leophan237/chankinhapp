'use client'

import { motion } from 'framer-motion'
import { Sprout, Rocket, Scale, TrendingUp, Mountain, Flag } from 'lucide-react'

const phases = [
  {
    icon: Sprout,
    name: 'SINH',
    title: 'Ideation to Concept',
    description: 'Tư duy khởi nghiệp, mô hình kinh doanh, case study KFC/McDonald\'s/Starbucks, thiết kế sản phẩm, Investment Plan',
  },
  {
    icon: Rocket,
    name: 'THĂNG',
    title: 'Concept to Market',
    description: 'Xây dựng thương hiệu, tiền tệ hóa brand, tối ưu Marketing, bộ nhận diện, kế hoạch tài chính 3-12 tháng',
  },
  {
    icon: Scale,
    name: 'BÌNH',
    title: 'Market to Management',
    description: 'Quản trị con người, văn hóa doanh nghiệp, truyền thông đa kênh, Back Office, SOP, quản trị PnL',
  },
  {
    icon: TrendingUp,
    name: 'BÌNH',
    title: 'Management to Growth',
    description: 'Financial Plan cho kinh doanh, thiết kế nhân chuỗi, tài chính góc nhìn Marketing & Funding, huy động vốn',
  },
  {
    icon: Mountain,
    name: 'TRIỆT',
    title: 'Growth to Scaling Up',
    description: 'Định giá doanh nghiệp, phát hành cổ phiếu, ESOP, Angel Investor, quỹ đầu tư, quản trị rủi ro huy động vốn',
    premium: true,
  },
  {
    icon: Flag,
    name: 'XUỐNG NÚI',
    title: 'Ready to Play',
    description: 'Hệ thống hóa lộ trình, Pitching & góp ý chéo, review đúc kết, cấp chứng nhận Foodify Certificate',
  },
]

export default function JourneySection() {
  return (
    <section id="journey" className="py-16 md:py-24 px-4 bg-black/40 border-t border-white/5">
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
            Lộ trình tu luyện
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
            6 Giai Đoạn Chuyển Hóa
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
          <p className="text-base text-silver/60 font-light max-w-lg mx-auto leading-relaxed">
            Từ ý tưởng đến thực chiến, mỗi giai đoạn là một bước tiến vững chắc trên con đường làm chủ F&B
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

          <div className="space-y-8 md:space-y-12">
            {phases.map((phase, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 hidden sm:block"
                    style={{ top: '2rem' }}>
                    <div className="w-full h-full rounded-full bg-white/60" />
                  </div>

                  {/* Mobile dot */}
                  <div className="w-3 h-3 rounded-full bg-white/60 shrink-0 mt-2 sm:hidden" />

                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className={`p-6 md:p-8 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:bg-white/5 relative`}>
                      {phase.premium && (
                        <span className="absolute top-4 right-4 text-[9px] tracking-wider px-2 py-1 rounded-full border border-silver/30 bg-silver/10 text-white uppercase">
                          Gói mở rộng
                        </span>
                      )}
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center bg-white/5">
                          <phase.icon className="w-5 h-5 text-white/80" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold tracking-wider text-silver/50">{phase.name}</span>
                          <h3 className="text-lg font-semibold text-white">{phase.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-silver/60 font-light leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
