'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/components/RichTextComponents'
import { ArrowLeft, Calendar, Clock, Share2, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface SinglePostViewProps {
    post: any
}

export default function SinglePostView({ post }: SinglePostViewProps) {
    if (!post) return null

    return (
        <article className="min-h-full relative bg-[#2d2d2d] text-gray-200 selection:bg-[#c5a059]/40">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Vignette Glow */}
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />

            <div className="relative z-20 pb-40 pt-4 md:pt-8 px-6 md:px-16 max-w-4xl mx-auto">
                {/* Navigation Bar */}
                <div className="flex items-center justify-between mb-6 md:mb-10 opacity-70 hover:opacity-100 transition-opacity">
                    <Link href="/kinh-cac">
                        <Button variant="ghost" className="text-gray-400 hover:text-[#c5a059] hover:bg-transparent pl-0 gap-2 font-light tracking-widest text-sm uppercase">
                            <ArrowLeft className="w-4 h-4" />
                            Library
                        </Button>
                    </Link>

                    <div className="flex gap-4">
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#c5a059] hover:bg-transparent transition-colors">
                            <Share2 className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Header Section */}
                <header className="space-y-3 md:space-y-6 text-center md:text-left animate-fadeInSlow">
                    {/* Element Badge */}
                    <span className="inline-block px-3 py-1 rounded-2xl border border-[#c5a059]/20 text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.2em]">
                        {post.elementName || post.element || 'Kinh Cac'}
                    </span>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black text-[#e5e5e5] leading-tight tracking-tight drop-shadow-2xl">
                        {post.title}
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-xl text-gray-400 font-sans font-light leading-relaxed max-w-2xl border-l-2 border-[#c5a059]/50 pl-4 md:pl-6 italic">
                        {post.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-[10px] md:text-xs text-gray-500 font-sans uppercase tracking-widest pt-8 border-t border-white/10">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-[#c5a059]" />
                            <span>
                                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('vi-VN', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown Date'}
                            </span>
                        </div>
                        {post.readTime && (
                            <div className="flex items-center gap-2">
                                <Clock className="w-3 h-3 text-[#c5a059]" />
                                <span>{post.readTime} min read</span>
                            </div>
                        )}
                    </div>
                </header>

                {/* Main Image */}
                {post.mainImage && (
                    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-white/5 my-8 md:my-16 opacity-90 hover:opacity-100 transition-opacity duration-700">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                    </div>
                )}

                {/* Content */}
                {post.content && (
                    <div className="prose prose-sm sm:prose-base md:prose-lg prose-invert prose-p:text-gray-300 prose-headings:text-[#c5a059] prose-headings:font-sans max-w-none pb-12 border-b border-white/10">
                        <PortableText value={post.content} components={RichTextComponents} />
                    </div>
                )}

                {/* Footer Link */}
                <div className="pt-16 flex justify-center opacity-60 hover:opacity-100 transition-all">
                    <Link href="/kinh-cac">
                        <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] border-b border-[#c5a059] pb-1">
                            Return to Sanctuary
                        </span>
                    </Link>
                </div>
            </div>
        </article>
    )
}
