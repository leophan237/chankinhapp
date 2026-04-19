'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="contact" className="py-12 md:py-16 px-4 bg-black/40">
      <div className="max-w-3xl mx-auto">
        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-14 rounded-2xl border border-white/10 bg-white/[0.02] text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-[80px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">
              Sẵn sàng bắt đầu?
            </h2>
            <p className="text-base text-silver/60 font-light max-w-md mx-auto mb-10 leading-relaxed">
              Liên hệ ngay để giữ suất Early Bird. Chỉ <strong className="text-white font-medium">10 suất đầu tiên</strong> được ưu đãi.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <a href="mailto:admin@xcap.vn" className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 hover:border-white/30 transition-colors group bg-black/20">
                <Mail className="w-5 h-5 text-silver/80 group-hover:text-white transition-colors" />
                <span className="text-xs text-silver/40 uppercase tracking-wider font-semibold">Email</span>
                <span className="text-sm text-silver/80">admin@xcap.vn</span>
              </a>
              <a href="tel:+84776776856" className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 hover:border-white/30 transition-colors group bg-black/20">
                <Phone className="w-5 h-5 text-silver/80 group-hover:text-white transition-colors" />
                <span className="text-xs text-silver/40 uppercase tracking-wider font-semibold">Hotline</span>
                <span className="text-sm text-silver/80">+84 776 776 856</span>
              </a>
              <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/10 bg-black/20">
                <MapPin className="w-5 h-5 text-silver/80" />
                <span className="text-xs text-silver/40 uppercase tracking-wider font-semibold">Địa chỉ</span>
                <span className="text-sm text-silver/80 text-center">Bình Trưng Tây, TP. Thủ Đức, HCM</span>
              </div>
            </div>

            {/* Big CTA */}
            <a
              href="tel:+84776776856"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-xl hover:bg-silver transition-all duration-300 text-base tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <Phone className="w-5 h-5" />
              GỌI NGAY: 0776 776 856
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
