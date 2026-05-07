'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Flame } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
      {/* Decorative top corners */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-24 left-6 w-16 h-16 border-l border-t border-silver/20 hidden md:block"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute top-24 right-6 w-16 h-16 border-r border-t border-silver/20 hidden md:block"
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-silver/80 text-xs tracking-widest uppercase">
          <Flame className="w-3 h-3" />
          Foodify × Chân Kinh Online
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
      >
        <span className="text-white">ALL-IN F&B:</span>
        <br />
        <span className="text-silver/80 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 block">
          TỰ ĐỘNG HÓA & x3 LỢI NHUẬN
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-lg md:text-xl text-silver/60 font-light tracking-wide mb-4 max-w-3xl mx-auto leading-relaxed"
      >
        Công thức thực chiến đã được kiểm chứng bởi hệ sinh thái Foodify, giúp Founder F&B thoát khỏi cảnh "làm thuê cho chính mình" và thiết lập hệ thống tự chạy hoàn toàn.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="text-sm md:text-base text-muted-foreground/60 font-light max-w-xl mx-auto mb-10 leading-relaxed"
      >
        Nắm vững <strong className="text-white font-medium">4 trụ cột</strong> kinh doanh — 
        từ Ideation đến Scaling Up — trong{' '}
        <strong className="text-white font-medium">18 giờ</strong> huấn luyện thực chiến
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
      >
        <a
          href="#pricing"
          className="group px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-silver transition-all duration-300 flex items-center gap-2 text-sm tracking-wide text-center"
        >
          GIỮ SUẤT & NHẬN TOÀN BỘ QUÀ TẶNG
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href="#journey"
          className="px-8 py-4 border border-white/20 text-silver/80 font-light rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-sm tracking-wide"
        >
          Xem Lộ Trình
        </a>
      </motion.div>

      {/* Urgency Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="mb-16"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-silver/60 text-[11px] tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-silver/60 animate-pulse" />
          Chỉ 10 suất Early Bird
        </span>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img 
          src="/images/hero_fnb.png" 
          alt="Fine Dining Professional Kitchen" 
          className="w-full h-[400px] object-cover grayscale opacity-80 mix-blend-luminosity"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 3 }}
        className="absolute bottom-12 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-silver/40 uppercase">Khám phá</span>
        <ArrowDown className="w-4 h-4 text-silver/30" />
      </motion.div>
    </section>
  )
}
