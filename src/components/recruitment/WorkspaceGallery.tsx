'use client'

import React, { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { createPortal } from 'react-dom'

interface WorkspaceGalleryProps {
    isOpen: boolean
    onClose: () => void
}

const images = [
    {
        url: '/images/workspace/workspace_1.png',
        title: 'Đạo Tràng Sáng Tạo',
        desc: 'Không gian mở kết hợp giữa kiến trúc Thiền và công năng hiện đại.'
    },
    {
        url: '/images/workspace/workspace_2.png',
        title: 'Góc Tĩnh Khẩu',
        desc: 'Nơi tập trung tuyệt đối với ánh sáng tự nhiên và sự thanh tịnh.'
    },
    {
        url: '/images/workspace/workspace_3.png',
        title: 'Trà Thất Cộng Sự',
        desc: 'Không gian thảo luận và kết nối tâm hồn trong từng tách trà.'
    }
]

export default function WorkspaceGallery({ isOpen, onClose }: WorkspaceGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!mounted || !isOpen) return null

    const next = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prev = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return createPortal(
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-500">
            <button
                onClick={onClose}
                className="absolute top-8 right-8 z-[120] p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
                <X className="w-8 h-8" />
            </button>

            <div className="relative w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Main Image View */}
                <div className="lg:col-span-8 relative group aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                        src={images[currentIndex].url}
                        alt={images[currentIndex].title}
                        className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                    />

                    {/* Navigation Controls */}
                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={prev} className="p-4 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-[#c5a059] transition-all">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={next} className="p-4 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-[#c5a059] transition-all">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-[#c5a059]' : 'w-2 bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-4 space-y-8 animate-in slide-in-from-right-8 duration-700">
                    <div>
                        <span className="text-[#c5a059] text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                            Triết lý không gian
                        </span>
                        <h2 className="text-4xl font-serif text-white italic leading-tight">
                            Sở học trong <br /> sự tĩnh tại
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[#c5a059] font-serif text-xl font-bold">{images[currentIndex].title}</h4>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            {images[currentIndex].desc}
                        </p>
                    </div>

                    <div className="pt-8 border-t border-white/10">
                        <p className="text-gray-500 text-sm leading-relaxed italic">
                            "Tại Chân Kinh F&B, chúng tôi tin rằng một không gian làm việc chuẩn mực Thiền định sẽ khơi gợi những ý tưởng tinh khiết nhất và sự tập trung sâu sắc nhất."
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={onClose}
                            className="px-8 py-3 rounded-full border border-[#c5a059]/30 text-[#c5a059] text-xs font-bold hover:bg-[#c5a059]/10 transition-all uppercase tracking-widest"
                        >
                            Quay lại
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}
