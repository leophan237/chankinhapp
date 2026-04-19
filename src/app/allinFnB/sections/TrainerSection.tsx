'use client'

import { motion } from 'framer-motion'
import { Building2, Coffee, Briefcase, TrendingUp, Users, PieChart, Award } from 'lucide-react'

const roles = [
  { icon: Building2, role: 'Founder & CEO', org: 'XCAP — Trạm Khởi Nghiệp' },
  { icon: Coffee, role: 'Founder & CEO', org: 'Tiệm Trà Có Sữa' },
  { icon: Briefcase, role: 'Founder & CEO', org: 'Blank Inc' },
  { icon: TrendingUp, role: 'Cố vấn Chiến lược', org: 'Smash Burger Saigon' },
  { icon: TrendingUp, role: 'Cố vấn Chiến lược', org: 'Veeayy Food' },
  { icon: PieChart, role: 'Investor Relations Manager', org: 'Aura Capital' },
  { icon: Users, role: 'Growth Director', org: 'CabinFood & CabinEat' },
  { icon: Award, role: 'Cố vấn Toàn diện', org: 'Another Bakeshop' },
]

export default function TrainerSection() {
  return (
    <section className="py-16 md:py-24 px-4 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Portrait Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-black relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
            <img 
              src="/images/trainer_portrait.png" 
              alt="Portrait of Founder" 
              className="w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity"
            />
            {/* Overlay Info on Image */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <h3 className="text-3xl font-bold text-white mb-2">Phan Thiên Phú</h3>
              <p className="text-sm text-silver/60 tracking-widest uppercase font-semibold">Founder & CEO — XCAP</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Info & Roles */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <span className="text-[11px] tracking-[0.3em] text-silver/50 uppercase mb-4 block font-semibold">
            Người dẫn đường
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
            10 năm thực chiến F&B
          </h2>
          <div className="h-px w-16 bg-white/20 mb-6" />
          
          <p className="text-base text-silver/60 font-light leading-relaxed mb-12">
            Với kinh nghiệm sâu rộng trong việc thiết lập khái niệm, vận hành hệ thống và cấu trúc tài chính cho đa dạng các mô hình F&B. 
            Từng giữ các vai trò trọng yếu từ quản lý vận hành, phát triển kinh doanh đến quan hệ nhà đầu tư.
          </p>

          {/* Roles List */}
          <div className="space-y-4">
            {roles.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="flex items-center gap-4 py-3 border-b border-white/5 group"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                  <item.icon className="w-4 h-4 text-white/60" />
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                  <p className="text-sm font-medium text-white">{item.org}</p>
                  <p className="text-[11px] text-silver/50 uppercase tracking-wider">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
