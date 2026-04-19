'use client'

import { motion } from 'framer-motion'
import { Check, X, Star, Zap } from 'lucide-react'

const packages = [
  {
    name: 'Premium Training',
    icon: Star,
    originalPrice: '19.390.000đ',
    dealPrice: '10.000.000đ',
    discount: '48% OFF',
    accent: 'silver',
    borderColor: 'border-white/10',
    hoverBorder: 'hover:border-white/30',
    bgGlow: 'bg-white/5',
    accentColor: 'text-silver/80',
    btnClass: 'border border-white/20 text-silver/80 hover:bg-white/10 hover:text-white',
    features: [
      { text: '5 buổi training tiêu chuẩn', included: true },
      { text: 'Học lại lần 2 miễn phí', included: true },
      { text: '2 giờ tư vấn riêng 1:1', included: true },
      { text: 'Kết nối đối tác mạng lưới XCAP', included: true },
      { text: 'Ưu đãi 10% chi phí Agency', included: true },
      { text: 'Buổi mở rộng (Scaling Up)', included: false },
      { text: '03 tháng coaching nhóm kín', included: false },
      { text: 'Chuyển giao giáo án đào tạo', included: false },
    ],
  },
  {
    name: 'Premium Coaching',
    icon: Zap,
    originalPrice: '48.000.000đ',
    dealPrice: '18.888.888đ',
    discount: '61% OFF',
    accent: 'white',
    borderColor: 'border-white/20',
    hoverBorder: 'hover:border-white/50',
    bgGlow: 'bg-white/10',
    accentColor: 'text-white',
    btnClass: 'bg-white text-black hover:bg-silver',
    popular: true,
    features: [
      { text: '5 buổi tiêu chuẩn + 1 buổi mở rộng', included: true },
      { text: 'Học lại lần 2 miễn phí', included: true },
      { text: '16 giờ tư vấn riêng 1:1', included: true, highlight: true },
      { text: 'Kết nối đối tác mạng lưới XCAP', included: true },
      { text: 'Ưu đãi 12% chi phí Agency', included: true },
      { text: '03 tháng coaching nhóm kín', included: true, highlight: true },
      { text: 'Chuyển giao giáo án đào tạo', included: true, highlight: true },
      { text: 'Buổi mở rộng: Scaling Up & Diversification', included: true },
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 bg-black/40 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] tracking-[0.3em] text-silver/60 uppercase mb-4 block font-semibold">
            Chi phí tham gia
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
            Chọn con đường của bạn
          </h2>
          <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
          <p className="text-base text-silver/60 font-light max-w-lg mx-auto leading-relaxed">
            Đầu tư cho bản thân hôm nay, thu hoạch cả sự nghiệp ngày mai.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`relative p-8 rounded-2xl border ${pkg.borderColor} ${pkg.hoverBorder} ${pkg.bgGlow} backdrop-blur-sm transition-all duration-500 flex flex-col`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-wider uppercase">
                    Phổ biến nhất
                  </span>
                </div>
              )}

              {/* Package Name */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg border ${pkg.borderColor} flex items-center justify-center ${pkg.bgGlow}`}>
                  <pkg.icon className={`w-5 h-5 ${pkg.accentColor}`} />
                </div>
                <h3 className={`text-xl font-semibold ${pkg.accentColor}`}>{pkg.name}</h3>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-sm text-silver/40 line-through">{pkg.originalPrice}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-white border border-white/20 font-medium">
                    {pkg.discount}
                  </span>
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${pkg.accentColor}`}>
                  {pkg.dealPrice}
                </div>
                <p className="text-[11px] text-muted-foreground/40 mt-2">
                  Cho 10 người đăng ký đầu tiên
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${feature.highlight ? 'text-white' : 'text-silver/60'}`} />
                    ) : (
                      <X className="w-4 h-4 shrink-0 mt-0.5 text-silver/20" />
                    )}
                    <span className={`text-sm font-light leading-relaxed ${
                      feature.included 
                        ? feature.highlight ? 'text-silver/90 font-medium' : 'text-silver/60'
                        : 'text-muted-foreground/30 line-through'
                    }`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`w-full py-4 rounded-xl font-semibold text-sm tracking-wide text-center transition-all duration-300 block ${pkg.btnClass}`}
              >
                ĐĂNG KÝ {pkg.name.toUpperCase()}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
