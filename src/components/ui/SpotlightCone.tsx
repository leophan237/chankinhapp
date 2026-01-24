'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SpotlightConeProps {
    children: ReactNode
    className?: string
}

export default function SpotlightCone({ children, className = '' }: SpotlightConeProps) {
    return (
        <div className={`relative ${className}`}>
            {/* The Light Beam */}
            <div className="absolute -top-[20vh] left-1/2 -translate-x-1/2 w-[150%] aspect-square spotlight-cone pointer-events-none z-0" />

            {/* The Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Subtle base glow under the item */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-4 rounded-full bg-silver/5 blur-xl pointer-events-none" />
        </div>
    )
}
