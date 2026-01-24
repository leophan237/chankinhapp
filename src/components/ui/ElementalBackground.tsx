'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mountain, Waves, Flame, Wind, CircleDashed, Library } from 'lucide-react'
import { ElementType } from '@/components/feed/LibraryClientView'

interface ElementalBackgroundProps {
    element: ElementType
    color: string
}

const ICON_MAP: Record<ElementType, React.ComponentType<any>> = {
    all: Library,
    earth: Mountain,
    water: Waves,
    fire: Flame,
    air: Wind,
    void: CircleDashed,
}

export default function ElementalBackground({ element, color }: ElementalBackgroundProps) {
    const Icon = ICON_MAP[element]

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={element}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.06 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="relative"
                    style={{ color }}
                >
                    <Icon
                        className="w-[85vh] h-[85vh] md:w-[90vh] md:h-[90vh] transition-colors duration-1000"
                        strokeWidth={0.2}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Subtle Gradient Overlay to ensure center isn't too distracting */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
        </div>
    )
}
