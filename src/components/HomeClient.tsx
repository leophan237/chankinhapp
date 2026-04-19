'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import MysticButton from '@/components/MysticButton'
import { StarsBackground } from '@/components/StarsBackground'
import {
    Scroll,
    BookOpen,
    LayoutDashboard,
    Zap,
    Users,
    Wind,
    BookMarked,
    ArrowRight,
    Lock
} from 'lucide-react'

interface HomeClientProps {
    data: {
        heroTitle: string
        heroSubtitle: string
        introduction: string
        buttonText: string
        bottomQuote: string
    }
}

export default function HomeClient({ data }: HomeClientProps) {
    const { heroTitle, heroSubtitle, introduction, buttonText, bottomQuote } = data
    const text = heroTitle || 'CHÂN KINH ONLINE'

    const sections = [
        {
            id: 'hoc-luyen',
            title: 'Học Luyện',
            subtitle: 'Digital Toolbox',
            description: 'Công cụ thực chiến và lộ trình tu tập kinh doanh hiện đại.',
            icon: LayoutDashboard,
            link: '/hoc-luyen',
            active: true,
            color: 'from-white/[0.08] to-transparent',
            span: 'md:col-span-2 lg:col-span-2',
            height: 'min-h-[300px]'
        },
        {
            id: 'kinh-cac',
            title: 'Kinh Các',
            subtitle: 'The Library',
            description: 'Nơi lưu trữ tài liệu, thư viện tri thức và kinh điển số.',
            icon: BookMarked,
            link: '/kinh-cac',
            active: true,
            color: 'from-white/[0.05] to-transparent',
            span: 'md:col-span-1',
            height: 'min-h-[300px]'
        },
        {
            id: 'tong-chi',
            title: 'Tông Chỉ',
            subtitle: 'Philosophy',
            description: 'Nền tảng tâm thức và sứ mệnh cốt lõi của người lãnh đạo.',
            icon: Scroll,
            link: '/tong-chi',
            active: false,
            color: 'from-white/[0.08] to-transparent',
            span: 'md:col-span-1',
            height: 'min-h-[250px]'
        },
        {
            id: 'kinh-bo',
            title: 'Kinh Bộ',
            subtitle: 'The Scriptures',
            description: 'Hệ thống tri thức bài giảng và phương pháp luận.',
            icon: BookOpen,
            link: '/kinh-bo',
            active: false,
            color: 'from-white/[0.05] to-transparent',
            span: 'md:col-span-1',
            height: 'min-h-[250px]'
        },
        {
            id: 'hanh',
            title: 'Hành',
            subtitle: 'Execution',
            description: 'Đưa lý thuyết vào thực tiễn, quản trị dự án thực chiến.',
            icon: Zap,
            link: '/hanh',
            active: false,
            color: 'from-white/[0.08] to-transparent',
            span: 'md:col-span-1',
            height: 'min-h-[250px]'
        },
        {
            id: 'dao-trang',
            title: 'Đạo Tràng',
            subtitle: 'Community',
            description: 'Không gian kết nối những người thực hành cùng chí hướng.',
            icon: Users,
            link: '/dao-trang',
            active: false,
            color: 'from-white/[0.05] to-transparent',
            span: 'md:col-span-1 lg:col-span-2',
            height: 'min-h-[200px]'
        },
        {
            id: 'tinh-trang',
            title: 'Tịnh Trang',
            subtitle: 'Sanctuary',
            description: 'Nơi tĩnh lặng để tái tạo năng lượng và cân bằng tâm trí.',
            icon: Wind,
            link: '/tinh-trang',
            active: false,
            color: 'from-white/[0.08] to-transparent',
            span: 'md:col-span-1',
            height: 'min-h-[200px]'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.5,
            },
        },
    }

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            filter: 'blur(10px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 2,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        },
    }

    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col items-center bg-transparent selection:bg-silver/20">
            {/* Stars & Atmosphere Background */}
            <div className="fixed inset-0 z-0">
                <StarsBackground />

                {/* Custom Gradient Overlay for Chân Kinh Mood */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0c10]/50 to-[#090a0f]" />

                {/* SVG Noise Filter (Preserved) */}
                <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.65"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>

                {/* Abstract Orbs (Preserved & Adjusted) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.05, 0.1, 0.05],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-silver/[0.03] blur-[120px]"
                />
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto min-h-[85vh] flex flex-col items-center justify-center"
            >
                {/* Title with Glowing Text */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-[clamp(2rem,5.5vw,5.5rem)] font-sans font-bold tracking-[0.08em] md:tracking-[0.12em] mb-6 whitespace-nowrap"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(148,163,184,0.7) 50%, rgba(148,163,184,0.3) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        filter: 'drop-shadow(0 0 40px rgba(148,163,184,0.15))',
                    }}
                >
                    {text.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className={`inline-block ${letter === ' ' ? 'w-4 md:w-8' : ''}`}
                            style={{
                                background: 'inherit',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Decorative Line between title and subtitle */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '120px', opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.8, ease: 'easeOut' }}
                    className="h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-silver/40 to-transparent"
                />

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 2,
                        ease: [0.6, 0.01, 0.05, 0.95],
                    }}
                    className="text-lg md:text-xl text-silver/50 font-light tracking-[0.25em] uppercase mb-8"
                >
                    {heroSubtitle}
                </motion.p>

                {/* Introduction */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2.5 }}
                    className="text-base md:text-lg text-muted-foreground/70 font-light leading-relaxed max-w-xl mx-auto mb-14 italic"
                >
                    {introduction}
                </motion.p>

                {/* Enter Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3 }}
                    className="flex items-center justify-center"
                >
                    <Link href="/tong-chi">
                        <MysticButton className="gap-3 font-light text-lg tracking-wider">
                            {buttonText}
                            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </MysticButton>
                    </Link>
                </motion.div>


            </motion.div>

            {/* Content Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full"
            >

                {/* Masonry Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32 text-left">
                    {sections.map((section, idx) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${section.span} ${section.height} group relative rounded-2xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${section.color} backdrop-blur-md hover:border-white/30 hover:bg-white/[0.05] transition-all duration-500`}
                        >
                            {/* Card Content */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl border border-silver/20 flex items-center justify-center bg-silver/5 group-hover:scale-110 transition-transform duration-500">
                                        <section.icon className="w-6 h-6 text-silver" />
                                    </div>
                                    {!section.active && (
                                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-silver/10 bg-silver/5 text-[10px] text-silver/50 tracking-wider">
                                            <Lock className="w-3 h-3" />
                                            COMING SOON
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-sans font-semibold text-gradient-silver">
                                        {section.title}
                                    </h3>
                                    <p className="text-xs tracking-[0.2em] text-silver/40 uppercase font-light">
                                        {section.subtitle}
                                    </p>
                                </div>
                                <p className="mt-6 text-sm text-muted-foreground font-light leading-relaxed">
                                    {section.description}
                                </p>
                            </div>

                            {/* Action Link */}
                            <div className="mt-8">
                                {section.active ? (
                                    <Link href={section.link} className="inline-flex items-center gap-2 text-sm text-silver font-light hover:gap-4 transition-all duration-300">
                                        Bước vào không gian <ArrowRight className="w-4 h-4" />
                                    </Link>
                                ) : (
                                    <span className="text-xs text-muted-foreground/40 italic font-light">
                                        Đang xây dựng...
                                    </span>
                                )}
                            </div>

                            {/* Background Glow Overlay */}
                            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-silver/5 blur-[60px] rounded-full group-hover:bg-silver/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>

                {/* Final Footer Quote */}
                <div className="pb-24">
                    {/* Decorative Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '150px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="h-px mx-auto mb-12 bg-gradient-to-r from-transparent via-silver/30 to-transparent"
                    />
                    <p className="text-sm text-muted-foreground/60 font-light tracking-widest uppercase">
                        {bottomQuote}
                    </p>
                </div>
            </motion.div>

            {/* Corner Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 3 }}
                className="absolute top-8 left-8 w-16 h-16 border-l border-t border-silver/20"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 3.2 }}
                className="absolute top-8 right-8 w-16 h-16 border-r border-t border-silver/20"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 3.4 }}
                className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-silver/20"
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, delay: 3.6 }}
                className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-silver/20"
            />
        </div>
    )
}
