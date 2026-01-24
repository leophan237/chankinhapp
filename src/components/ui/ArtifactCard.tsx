'use client'

import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ArtifactCardProps {
    name: string
    vietnameseName: string
    description: string
    category: string
    status: string
    year: string
    icon: LucideIcon
    details: string[]
    onAcquire?: () => void
}

export default function ArtifactCard({
    name,
    vietnameseName,
    description,
    category,
    status,
    year,
    icon: Icon,
    details,
    onAcquire
}: ArtifactCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    // Motion values for tilt
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Motion values for precise glow position
    const glowX = useMotionValue(50)
    const glowY = useMotionValue(50)

    // Smooth the mouse values
    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    // Map mouse position to rotation (in degrees)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        // Normalize coordinates to [-0.5, 0.5]
        const xPct = (mouseX / width) - 0.5
        const yPct = (mouseY / height) - 0.5

        x.set(xPct)
        y.set(yPct)

        // Set raw percentages for glow [0, 100]
        glowX.set((mouseX / width) * 100)
        glowY.set((mouseY / height) * 100)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        x.set(0)
        y.set(0)
        glowX.set(50)
        glowY.set(50)
    }

    return (
        <div className="perspective-1000">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative group p-8 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl transition-colors duration-700 hover:bg-white/[0.05] h-full flex flex-col"
            >
                {/* 3D Content Container */}
                <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col h-full">

                    {/* The Artifact Object (Top) */}
                    <div className="flex justify-center perspective-500 mb-10">
                        <motion.div
                            animate={{
                                y: isHovered ? -10 : 0,
                            }}
                            className="relative"
                        >
                            {/* The Symbol */}
                            <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-2xl border border-silver/10 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center shadow-inner overflow-hidden">
                                <Icon className="w-16 h-16 md:w-20 md:h-20 text-silver/40 drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]" />

                                {/* Inner pulse effect */}
                                <motion.div
                                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="absolute inset-0 bg-[#c5a059]/5 blur-3xl pointer-events-none"
                                />
                            </div>

                            {/* Base Glow (Beneath) */}
                            <motion.div
                                animate={{
                                    opacity: isHovered ? 0.8 : 0.4,
                                    scale: isHovered ? 1.2 : 0.9,
                                    filter: isHovered ? "blur(32px)" : "blur(24px)"
                                }}
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-[#c5a059]/30 rounded-full z-0"
                            />
                        </motion.div>
                    </div>

                    {/* Information (Bottom) */}
                    <div className="space-y-6 flex-grow flex flex-col text-center" style={{ transform: "translateZ(30px)" }}>
                        <div className="space-y-4">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-[9px] uppercase font-black tracking-[0.4em] text-gray-500">
                                    {category} : ARCHIVE
                                </span>
                                <div className={`w-fit px-2 py-0.5 rounded text-[8px] uppercase font-bold tracking-widest border ${status === 'Available' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-400/5' : 'border-amber-500/30 text-amber-400 bg-amber-400/5'}`}>
                                    {status}
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-serif text-[#c7a059] leading-tight">
                                {name}
                            </h2>
                            <p className="text-base text-gray-300 font-light font-sans italic opacity-60">
                                {vietnameseName}
                            </p>
                        </div>

                        <p className="text-sm text-gray-400 font-light leading-relaxed italic line-clamp-3">
                            "{description}"
                        </p>

                        <div className="flex flex-wrap justify-center gap-2 opacity-40 mb-4">
                            {details.map((d, i) => (
                                <span key={i} className="text-[9px] uppercase tracking-widest font-light">
                                    {d}
                                </span>
                            ))}
                        </div>

                        {/* Acquisition Trigger */}
                        <div className="pt-6 mt-auto">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onAcquire?.();
                                }}
                                className="w-full px-6 py-2.5 rounded-full border border-[#c5a059]/50 text-[#c5a059] font-bold uppercase tracking-[0.3em] text-[9px] hover:bg-[#c5a059] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.1)] hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]"
                            >
                                Thỉnh Kinh
                            </button>
                        </div>
                    </div>
                </div>

                {/* Reflection Highlight Overlay (Precise Cursor Tracking) */}
                <motion.div
                    className="absolute inset-0 pointer-events-none rounded-2xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: useTransform(
                            [glowX, glowY],
                            ([gX, gY]) => `radial-gradient(circle at ${gX}% ${gY}%, rgba(255,255,255,0.08) 0%, transparent 50%)`
                        )
                    }}
                />
            </motion.div>
        </div>
    )
}
