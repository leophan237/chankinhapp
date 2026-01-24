'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { Book, Box, Droplets, Flame, Wind, Sparkles, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ActiveElementUnderline } from './ActiveElementUnderline'
import ElementalBackground from '@/components/ui/ElementalBackground'

export type ElementType = 'all' | 'earth' | 'water' | 'fire' | 'air' | 'void'

interface Post {
    _id: string
    title: string
    slug: { current: string }
    excerpt?: string
    description?: string
    element: string
    publishedAt?: string
    mainImage?: any
}

interface ThemeConfig {
    primary: string
    bg: string
    accent: string
}

const THEMES: Record<ElementType, ThemeConfig> = {
    all: { primary: '#c5a059', bg: '#0a0a0a', accent: 'rgba(197, 160, 89, 0.1)' },
    earth: { primary: '#8d6e63', bg: '#1a1614', accent: 'rgba(141, 110, 99, 0.1)' },
    water: { primary: '#4fc3f7', bg: '#0a1929', accent: 'rgba(79, 195, 247, 0.1)' },
    fire: { primary: '#ff7043', bg: '#1f0a0a', accent: 'rgba(255, 112, 67, 0.1)' },
    air: { primary: '#b0bec5', bg: '#15191c', accent: 'rgba(176, 190, 197, 0.1)' },
    void: { primary: '#9575cd', bg: '#0f0518', accent: 'rgba(149, 117, 205, 0.1)' },
}

const ELEMENTS = [
    { id: 'all' as ElementType, name: 'TẤT CẢ', icon: Book },
    { id: 'earth' as ElementType, name: 'ĐẤT', icon: Box },
    { id: 'water' as ElementType, name: 'NƯỚC', icon: Droplets },
    { id: 'fire' as ElementType, name: 'LỬA', icon: Flame },
    { id: 'air' as ElementType, name: 'KHÍ', icon: Wind },
    { id: 'void' as ElementType, name: 'KHÔNG', icon: Sparkles },
]

interface LibraryClientViewProps {
    initialPosts: Post[]
}

export default function LibraryClientView({ initialPosts }: LibraryClientViewProps) {
    const [activeElement, setActiveElement] = useState<ElementType>('all')
    const theme = THEMES[activeElement]

    const filteredPosts = activeElement === 'all'
        ? initialPosts
        : initialPosts.filter(p => p.element === activeElement)

    return (
        <div
            className="min-h-screen transition-colors duration-700 ease-in-out relative overflow-hidden"
            style={{ backgroundColor: theme.bg }}
        >
            {/* Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <ElementalBackground element={activeElement} color={theme.primary} />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 md:pt-12 pb-20">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-10"
                >
                    <motion.div
                        className="w-12 h-12 mx-auto mb-4 rounded-full border border-silver/30 flex items-center justify-center bg-card backdrop-blur-sm transition-colors duration-700"
                    >
                        <Book className="w-6 h-6 text-silver transition-colors duration-700" />
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-sans font-semibold tracking-tighter text-gradient-silver transition-colors duration-700">
                        Kinh Các
                    </h1>
                    <p className="mt-4 text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 font-light">
                        The Elemental Bookshelf
                    </p>
                </motion.header>

                {/* Grid Tabs */}
                <nav className="mb-8 sticky top-4 z-50 flex justify-center translate-y-2">
                    <div className="flex items-center gap-1 p-1 bg-black/40 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl">
                        {ELEMENTS.map((el) => {
                            const Icon = el.icon
                            const isActive = activeElement === el.id
                            return (
                                <button
                                    key={el.id}
                                    onClick={() => setActiveElement(el.id)}
                                    className={`relative px-5 py-2.5 transition-all duration-[50ms] ease-out flex items-center gap-2 rounded-full overflow-visible ${isActive ? 'z-10' : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                    style={{
                                        color: isActive ? theme.primary : undefined,
                                        textShadow: isActive ? `0 0 24px ${theme.primary}aa` : 'none',
                                        backgroundColor: isActive ? `${theme.primary}22` : 'transparent'
                                    }}
                                >
                                    <Icon
                                        className={`w-3.5 h-3.5 transition-all duration-[50ms] ease-out ${isActive ? 'scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' : ''}`}
                                        style={{ color: isActive ? theme.primary : undefined }}
                                    />
                                    <span className="text-[10px] uppercase font-black tracking-[0.15em]">
                                        {el.name}
                                    </span>

                                    {isActive && (
                                        <motion.div
                                            layoutId="navGlow"
                                            className="absolute inset-0 rounded-full blur-xl -z-10 bg-current opacity-40"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}

                                    {isActive && <ActiveElementUnderline color={theme.primary} />}
                                </button>
                            )
                        })}
                    </div>
                </nav>

                {/* Bookshelf Layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post) => {
                            const postElement = ELEMENTS.find(e => e.id === post.element) || ELEMENTS[0]
                            const PostIcon = postElement.icon

                            return (
                                <motion.div
                                    key={post._id}
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-b border-white/5 pb-8"
                                >
                                    <Link href={`/kinh-cac/${post.slug.current}`}>
                                        <article
                                            className="group relative aspect-[3/4] flex flex-col bg-black/40 border transition-all duration-500 overflow-hidden rounded-2xl shadow-xl"
                                            style={{
                                                borderColor: `${theme.primary}22`,
                                            }}
                                        >
                                            {/* Hover Glow Border */}
                                            <div
                                                className="absolute inset-0 border border-transparent group-hover:border-current transition-colors duration-500 pointer-events-none z-20 rounded-2xl"
                                                style={{ color: theme.primary }}
                                            />

                                            {/* Top 50% Image */}
                                            <div className="relative h-1/2 w-full overflow-hidden bg-[#1a1a1a]">
                                                {post.mainImage ? (
                                                    <Image
                                                        src={urlForImage(post.mainImage).url()}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center opacity-20">
                                                        <Book className="w-12 h-12" />
                                                    </div>
                                                )}
                                                {/* Gradient overlay on image */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                            </div>

                                            {/* Bottom 50% Content */}
                                            <div className="relative flex-1 p-5 flex flex-col justify-between z-20">
                                                <h3 className="text-lg md:text-xl font-sans font-bold leading-snug text-gray-100 group-hover:text-white transition-colors duration-500 line-clamp-3">
                                                    {post.title}
                                                </h3>

                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center gap-2">
                                                        <PostIcon
                                                            className="w-3 h-3 transition-colors duration-500"
                                                            style={{ color: THEMES[post.element as ElementType]?.primary || theme.primary }}
                                                        />
                                                        <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">
                                                            {postElement.name}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-gray-600 font-bold">
                                                        <Calendar className="w-2.5 h-2.5" />
                                                        <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '---'}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Inner subtle glow on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />
                                        </article>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </div>

                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-40 rounded-2xl border border-dashed border-white/5"
                    >
                        <p className="text-gray-500 text-[10px] uppercase tracking-[0.5em] font-medium italic">
                            Chưa có Chân Kinh nào được khai phá ở tầng này...
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
