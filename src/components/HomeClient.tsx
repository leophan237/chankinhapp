'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import MysticButton from '@/components/MysticButton'

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
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-background">
            {/* Abstract Noise/Grain Texture Background */}
            <div className="absolute inset-0 z-0">
                {/* SVG Noise Filter */}
                <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.65"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

                {/* Abstract Smoke/Orb Effects */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-[20%] left-[15%] w-96 h-96 rounded-full bg-silver/5 blur-[120px]"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0.08, 0.15, 0.08],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                    className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-silver/5 blur-[100px]"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0.05, 0.12, 0.05],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 4,
                    }}
                    className="absolute top-[40%] right-[30%] w-64 h-64 rounded-full bg-silver/5 blur-[80px]"
                />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="w-full h-full" style={{
                        backgroundImage: `
              linear-gradient(rgba(199, 160, 89, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(199, 160, 89, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }} />
                </div>
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
                {/* Logo Symbol */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        duration: 2,
                        delay: 0.8,
                        ease: [0.6, 0.01, 0.05, 0.95],
                    }}
                    className="mb-12"
                >
                    <div className="w-24 h-24 mx-auto rounded-full border border-silver/20 flex items-center justify-center bg-card/30 backdrop-blur-sm relative">
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 0 0px rgba(148, 163, 184, 0)',
                                    '0 0 0 20px rgba(148, 163, 184, 0)',
                                    '0 0 0 0px rgba(148, 163, 184, 0)',
                                ],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 2,
                            }}
                            className="absolute inset-0 rounded-full"
                        />
                        <img
                            src="/logo-chankinh-white-03.png"
                            alt="Chân Kinh Online"
                            className="w-16 h-16 object-contain opacity-80"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-semibold tracking-tight md:tracking-wider mb-8"
                >
                    {text.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className={`inline-block ${letter === ' ' ? 'w-4 md:w-8' : ''}`}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subtitle with Reveal */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 2.5,
                        ease: [0.6, 0.01, 0.05, 0.95],
                    }}
                    className="text-xl md:text-2xl text-silver/70 font-light tracking-wide mb-4"
                >
                    {heroSubtitle}
                </motion.p>

                {/* Mysterious Introduction */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: 3,
                    }}
                    className="text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-16"
                >
                    {introduction}
                </motion.p>

                {/* Decorative Line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '200px' }}
                    transition={{
                        duration: 2,
                        delay: 3.5,
                        ease: [0.6, 0.01, 0.05, 0.95],
                    }}
                    className="h-px mx-auto mb-16 bg-gradient-to-r from-transparent via-silver/30 to-transparent"
                />

                {/* Enter Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 4,
                    }}
                    className="flex items-center justify-center"
                >
                    <Link href="/tong-chi">
                        <MysticButton className="gap-3 font-light text-lg tracking-wider">
                            {buttonText}
                            <span className="text-xl">→</span>
                        </MysticButton>
                    </Link>
                </motion.div>

                {/* Bottom Quote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                        delay: 5,
                    }}
                    className="mt-24 text-sm text-muted-foreground/60 font-light tracking-widest"
                >
                    {bottomQuote}
                </motion.p>
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
