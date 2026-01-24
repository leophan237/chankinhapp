'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scroll, Quote, Sparkles } from 'lucide-react'
import MysticReveal from '@/components/MysticReveal'

export default function TongChiPage() {
  const [isEcosystemInView, setIsEcosystemInView] = useState(false)

  const ecosystemNodes = [
    { id: 'cko', name: 'CKO', fullName: 'Chân Kinh Online', x: 50, y: 50, isCenter: true },
    { id: 'agency', name: 'ADA', fullName: 'A Different Agency', x: 20, y: 30 },
    { id: 'cafe', name: 'CUP', fullName: 'The Cup Cafe', x: 80, y: 30 },
    { id: 'atlas', name: 'ATL', fullName: 'Atlas Group', x: 50, y: 80 },
  ]

  const connections = [
    { from: 'cko', to: 'agency' },
    { from: 'cko', to: 'cafe' },
    { from: 'cko', to: 'atlas' },
    { from: 'agency', to: 'cafe' },
    { from: 'cafe', to: 'atlas' },
    { from: 'atlas', to: 'agency' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Quote Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-silver blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-silver blur-[120px]" />
        </div>

        {/* Enso Circle - Human Practice Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-2 border-silver/30 bg-silver/10 flex items-center justify-center"
        >
          <span className="text-2xl text-silver/80">•</span>
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Decorative Icon */}
          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            className="w-16 h-16 mx-auto mb-12 rounded-full border border-silver/20 flex items-center justify-center"
          >
            <Scroll className="w-8 h-8 text-silver/60" />
          </motion.div>

          {/* Scripture-Style Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <Quote className="absolute -top-8 -left-8 w-8 h-8 text-silver/20" />
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-sans text-gradient-silver font-light leading-relaxed tracking-wide">
              TÔNG CHỈ
            </blockquote>
            <Quote className="absolute -bottom-8 -right-8 w-8 h-8 text-silver/20 rotate-180" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="mt-12 text-lg md:text-xl text-muted-foreground font-light tracking-widest"
          >
            The Guiding Principles
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '150px' }}
            transition={{ duration: 1.5, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="h-px mx-auto mt-16 bg-gradient-to-r from-transparent via-silver/30 to-transparent"
          />
        </div>
      </section>

      {/* Scripture-Style Introduction */}
      <MysticReveal delay={0.2}>
        <section className="py-24 px-4 border-t border-border/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
              className="text-center space-y-12"
            >
              <p className="text-xl md:text-2xl font-sans text-foreground/90 font-light leading-relaxed px-8 md:px-0">
                "Trong thế giới đầy ồn ào của kinh doanh hiện đại,
                chúng tôi tin rằng sự bình an trong tâm hồn là nền tảng vững chắc nhất
                cho mọi quyết định lãnh đạo."
              </p>

              <p className="text-lg text-muted-foreground font-light leading-relaxed px-8 md:px-0">
                Chân Kinh Online không chỉ là một nền tảng học tập.
                Đó là một hành trình khám phá bản thân, nơi mọi doanh nhân có thể tìm thấy
                sự cân bằng giữa tham vọng kinh doanh và sự thanh thản trong tâm trí.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="w-24 h-24 mx-auto rounded-full border border-silver/20 flex items-center justify-center bg-card/30"
              >
                <Sparkles className="w-10 h-10 text-silver/60" />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </MysticReveal>

      {/* Museum-Style Layout: Text + Abstract Imagery */}
      <MysticReveal delay={0.3}>
        <section className="py-24 px-4 border-t border-border/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: Scripture-Style Text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl md:text-4xl font-sans text-gradient-silver font-semibold mb-8 text-center lg:text-left">
                    Triết Lý
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed text-justify lg:text-left">
                    Nền tảng của "Chân Kinh" không bắt đầu từ tâm thức của người lãnh đạo. Sự kết hợp giữa minh triết phương Đông và cơ chế vốn phương Tây tạo ra một lợi thế cạnh tranh độc bản (Unique Value Proposition) cho toàn bộ tổ chức này.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-sans text-gradient-silver font-semibold mb-8 text-center lg:text-left">
                    Sứ Mệnh
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed text-justify lg:text-left">
                    Tạo ra một không gian số nơi doanh nhân có thể thực hành chánh niệm,
                    phát triển trí tuệ lãnh đạo, và xây dựng doanh nghiệp không chỉ vì lợi nhuận
                    mà còn vì giá trị tinh thần cao hơn.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-sans text-gradient-silver font-semibold mb-8 text-center lg:text-left">
                    Lời Hứa
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed text-justify lg:text-left">
                    Cam kết đồng hành cùng từng học viên trên con đường chuyển hóa,
                    từ nhận thức đến hành động, từ tư duy đến kết quả thực tế,
                    từ thành công cá nhân đến tác động cộng đồng.
                  </p>
                </div>
              </motion.div>

              {/* Right: Abstract Imagery */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="relative h-[600px] rounded-xl border border-border/30 bg-card/30 backdrop-blur-sm overflow-hidden"
              >
                {/* Abstract Zen Garden Visualization */}
                <div className="absolute inset-0 p-8">
                  {/* Concentric Circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
                      className="w-80 h-80 rounded-full border border-silver/10"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                      className="absolute w-60 h-60 rounded-full border border-silver/15"
                    />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                      className="absolute w-40 h-40 rounded-full border border-silver/20"
                    />
                    <div className="absolute w-20 h-20 rounded-full bg-silver/5 blur-sm" />
                  </div>

                  {/* Floating Particles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 6 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5,
                      }}
                      className="absolute w-2 h-2 rounded-full bg-silver/40"
                      style={{
                        left: `${20 + i * 12}%`,
                        top: `${30 + (i % 3) * 20}%`,
                      }}
                    />
                  ))}

                  {/* Enso Circle */}
                  <motion.svg
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    viewBox="0 0 200 200"
                    className="absolute inset-0 w-full h-full"
                  >
                    <motion.path
                      d="M 100, 20 A 80,80 0 1,1 95,180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-silver/30"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 4, delay: 1, ease: [0.4, 0, 0.2, 1] }}
                      style={{
                        strokeLinecap: 'round',
                      }}
                    />
                  </motion.svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </MysticReveal>

      {/* The Ecosystem Diagram */}
      <MysticReveal delay={0.4}>
        <section className="py-24 px-4 border-t border-border/20 bg-gradient-to-b from-background via-background to-card/20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-sans text-gradient-silver font-semibold mb-4">
                The Ecosystem
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Môi trường kinh doanh toàn diện
              </p>
            </motion.div>

            {/* Ecosystem Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              onViewportEnter={() => setIsEcosystemInView(true)}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full aspect-square md:aspect-[16/9] max-w-4xl mx-auto"
            >
              <svg viewBox="0 0 800 500" className="w-full h-full">
                <defs>
                  {/* Gradient for lines */}
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(148, 163, 184, 0.1)" />
                    <stop offset="50%" stopColor="rgba(148, 163, 184, 0.2)" />
                    <stop offset="100%" stopColor="rgba(148, 163, 184, 0.1)" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Connection Lines */}
                {connections.map((conn, index) => {
                  const fromNode = ecosystemNodes.find(n => n.id === conn.from)
                  const toNode = ecosystemNodes.find(n => n.id === conn.to)
                  if (!fromNode || !toNode) return null

                  return (
                    <motion.line
                      key={index}
                      x1={fromNode.x * 8}
                      y1={fromNode.y * 5}
                      x2={toNode.x * 8}
                      y2={toNode.y * 5}
                      stroke="url(#lineGradient)"
                      strokeWidth="1.5"
                      initial={{ opacity: 0, pathLength: 0 }}
                      animate={isEcosystemInView ? { opacity: 1, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
                      transition={{
                        duration: 1.5,
                        delay: 1.2 + index * 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="opacity-20"
                    />
                  )
                })}

                {/* Nodes */}
                {ecosystemNodes.map((node, index) => (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0 }}
                    animate={isEcosystemInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + index * 0.2,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    {/* Node Circle */}
                    <circle
                      cx={node.x * 8}
                      cy={node.y * 5}
                      r={node.isCenter ? 60 : 45}
                      fill={node.isCenter ? 'rgba(148, 163, 184, 0.1)' : 'rgba(148, 163, 184, 0.05)'}
                      stroke={node.isCenter ? 'rgba(148, 163, 184, 0.2)' : 'rgba(148, 163, 184, 0.1)'}
                      strokeWidth="1"
                      filter="url(#glow)"
                    />

                    {/* Node Label - Short */}
                    <motion.text
                      x={node.x * 8}
                      y={node.y * 5}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="currentColor"
                      className={`text-${node.isCenter ? '3xl' : '2xl'} font-sans fill-silver`}
                      style={{ fontWeight: node.isCenter ? '500' : '300' }}
                      initial={{ opacity: 0 }}
                      animate={isEcosystemInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        duration: 1,
                        delay: 1 + index * 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      {node.name}
                    </motion.text>

                    {/* Node Label - Full */}
                    <motion.text
                      x={node.x * 8}
                      y={node.y * 5 + (node.isCenter ? 80 : 65)}
                      textAnchor="middle"
                      fill="currentColor"
                      className="text-sm fill-muted-foreground font-light opacity-60"
                      initial={{ opacity: 0 }}
                      animate={isEcosystemInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{
                        duration: 1,
                        delay: 1.5 + index * 0.2,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      {node.fullName}
                    </motion.text>
                  </motion.g>
                ))}
              </svg>
            </motion.div>

            {/* Ecosystem Description */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1, ease: [0.4, 0, 0.2, 1] }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              {[
                {
                  title: 'Chân Kinh Online',
                  description: 'Trái tim của hệ sinh thái, nơi mọi giá trị và nguyên tắc bắt nguồn.',
                },
                {
                  title: 'A Different Agency',
                  description: 'Agency sáng tạo, biến triết lý thành các chiến lược marketing ý nghĩa.',
                },
                {
                  title: 'The Cup Cafe',
                  description: 'Không gian vật lý, nơi cộng đồng kết nối và chia sẻ.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                  className="p-6"
                >
                  <h3 className="text-xl font-sans text-silver font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </MysticReveal>

      {/* Final Scripture Quote */}
      <MysticReveal delay={0.5}>
        <section className="py-24 px-4 border-t border-border/20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-silver/10 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-sans text-foreground/90 font-light leading-relaxed tracking-wide mb-8">
              "Như cây sen vươn lên từ bùn lầy nhưng vẫn tỏa hương thơm,
              doanh nhân nhận thức có thể phát triển mạnh mẽ giữa thị trường
              đầy biến động mà vẫn giữ được sự thanh tịnh trong tâm."
            </blockquote>
            <p className="text-lg text-muted-foreground/60 font-light tracking-widest">
              — CHÂN KINH ONLINE
            </p>
          </motion.div>
        </section>
      </MysticReveal>
    </div>
  )
}
