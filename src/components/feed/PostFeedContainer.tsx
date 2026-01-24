'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SinglePostView from './SinglePostView'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface Post {
    _id: string
    title: string
    slug: { current: string }
    body?: any
    description?: string
    mainImage?: any
    publishedAt?: string
    readTime?: number
    element?: string
    elementName?: string
    content?: any
}

interface PostFeedContainerProps {
    initialPosts: Post[]
    initialSlug?: string
}

export default function PostFeedContainer({ initialPosts, initialSlug }: PostFeedContainerProps) {
    const startIdx = initialSlug
        ? initialPosts.findIndex(p => p.slug.current === initialSlug)
        : 0

    const [currentIndex, setCurrentIndex] = useState(startIdx !== -1 ? startIdx : 0)
    const [direction, setDirection] = useState(0)

    const router = useRouter()

    // URL Update Logic
    useEffect(() => {
        const currentPost = initialPosts[currentIndex]
        if (currentPost && currentPost.slug.current) {
            router.replace(`/kinh-cac/${currentPost.slug.current}`, { scroll: false })
        }
    }, [currentIndex, initialPosts, router])

    const handleNext = useCallback(() => {
        if (currentIndex < initialPosts.length - 1) {
            setDirection(1)
            setCurrentIndex((prev) => prev + 1)
        }
    }, [currentIndex, initialPosts.length])

    const handlePrev = useCallback(() => {
        if (currentIndex > 0) {
            setDirection(-1)
            setCurrentIndex((prev) => prev - 1)
        }
    }, [currentIndex])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                handleNext()
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                handlePrev()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleNext, handlePrev])

    const variants = {
        enter: (direction: number) => ({
            opacity: 0,
            x: direction > 0 ? 100 : -100,
            filter: "blur(10px)",
        }),
        center: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: (direction: number) => ({
            opacity: 0,
            x: direction < 0 ? 100 : -100,
            filter: "blur(10px)",
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        })
    }

    const currentPost = initialPosts[currentIndex]
    const hasPrev = currentIndex > 0
    const hasNext = currentIndex < initialPosts.length - 1

    return (
        <div className="h-screen w-screen bg-[#1a1a1a] relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full"
                >
                    <div className="w-full h-full overflow-y-auto no-scrollbar selection:bg-[#c5a059]/30">
                        <SinglePostView post={currentPost} />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
                <button
                    onClick={handlePrev}
                    disabled={!hasPrev}
                    className={`group flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 ${hasPrev
                            ? 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-[#c5a059]/50 text-white'
                            : 'bg-white/5 border-white/5 text-white/20 cursor-not-allowed'
                        }`}
                >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase tracking-wider">Previous</span>
                </button>

                <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/60 text-xs font-mono">
                    {currentIndex + 1} / {initialPosts.length}
                </div>

                <button
                    onClick={handleNext}
                    disabled={!hasNext}
                    className={`group flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl border transition-all duration-300 ${hasNext
                            ? 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-[#c5a059]/50 text-white'
                            : 'bg-white/5 border-white/5 text-white/20 cursor-not-allowed'
                        }`}
                >
                    <span className="text-sm font-medium uppercase tracking-wider">Next</span>
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Progress Indicator */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-40">
                {initialPosts.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1)
                            setCurrentIndex(idx)
                        }}
                        className={`w-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? 'bg-[#c5a059] h-8'
                                : 'bg-white/20 h-1.5 hover:bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
