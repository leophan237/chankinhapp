'use client'

import { motion } from 'framer-motion'
import { StarsBackground } from '@/components/StarsBackground'
import HeroSection from './sections/HeroSection'
import PainPointsSection from './sections/PainPointsSection'
import PillarsSection from './sections/PillarsSection'
import JourneySection from './sections/JourneySection'
import ValueStackSection from './sections/ValueStackSection'
import TrainerSection from './sections/TrainerSection'
import PricingSection from './sections/PricingSection'
import CTASection from './sections/CTASection'

export default function AllinFnBClient() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background selection:bg-silver/20">
      {/* Stars & Atmosphere Background */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0c10]/50 to-[#090a0f]" />
        <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.05, 0.1, 0.05], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-silver/[0.03] blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-white/[0.01] blur-[100px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <PainPointsSection />
        <PillarsSection />
        <JourneySection />
        <ValueStackSection />
        <TrainerSection />
        <PricingSection />
        <CTASection />

        {/* Footer */}
        <footer className="py-12 border-t border-border/20 text-center">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <img src="/logo-chankinh-white-03.png" alt="Chân Kinh Online" className="w-12 h-12 mx-auto opacity-40" />
            <p className="text-xs text-muted-foreground/40 tracking-widest uppercase">
              XCAP — Trạm Khởi Nghiệp × Chân Kinh Online
            </p>
            <p className="text-[10px] text-muted-foreground/30">
              © 2025 XCAP. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
