'use client'

import { motion } from 'framer-motion'

interface ActiveElementUnderlineProps {
    color?: string
}

export function ActiveElementUnderline({ color = '#c5a059' }: ActiveElementUnderlineProps) {
    return (
        <motion.div
            layoutId="activeElement"
            className="absolute -bottom-[33px] left-0 right-0 h-0.5"
            style={{ backgroundColor: color }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
    )
}
