'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Scroll, ShieldCheck, Zap } from 'lucide-react'

interface AcquisitionModalProps {
    isOpen: boolean
    onClose: () => void
    artifact: {
        name: string
        vietnameseName: string
        price?: string
        terms?: string[]
    }
}

export default function AcquisitionModal({ isOpen, onClose, artifact }: AcquisitionModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (isOpen) {
            window.addEventListener('keydown', handleEsc)
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden'
        }

        return () => {
            window.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = 'auto'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, height: "2px", scaleX: 0.8 }}
                    animate={{ opacity: 1, height: "auto", scaleX: 1 }}
                    exit={{ opacity: 0, height: "2px", scaleX: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative w-full max-w-2xl bg-[#141414] border border-[#c5a059]/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(197,160,89,0.1)]"
                >
                    {/* Interior Content (Delayed Reveal) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        {/* Header Image/Pattern */}
                        <div className="h-32 bg-gradient-to-br from-[#c5a059]/10 to-transparent flex items-center justify-center border-b border-white/5">
                            <div className="w-16 h-16 rounded-full border border-[#c5a059]/20 flex items-center justify-center bg-black/40">
                                <Scroll className="w-8 h-8 text-[#c5a059]" />
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-colors text-gray-500 hover:text-white z-50"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 md:p-12 space-y-8">
                            {/* Title Section */}
                            <div className="space-y-2 text-center">
                                <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#c5a059] font-bold">
                                    Lời Mời Từ Curator
                                </h2>
                                <h3 className="text-3xl font-serif text-white">
                                    Bạn đang Thỉnh Chân Kinh
                                </h3>
                                <p className="text-xl font-serif text-[#c5a059] italic opacity-80">
                                    {artifact.name}
                                </p>
                            </div>

                            {/* Terms of Knowledge */}
                            <div className="space-y-6">
                                <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 font-bold border-b border-white/5 pb-4">
                                    <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                                    Điều Kiện Thụ Nhận (Terms of Knowledge)
                                </h4>

                                <div className="space-y-4 max-h-48 overflow-y-auto pr-4 custom-scrollbar">
                                    {artifact.terms?.map((term, i) => (
                                        <div key={i} className="flex gap-4 group">
                                            <span className="text-xs text-[#c5a059] font-serif opacity-40">0{i + 1}</span>
                                            <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors">
                                                {term}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price & Action */}
                            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Công Đức Phí</span>
                                    <div className="text-3xl font-serif text-white flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-[#c5a059]" />
                                        {artifact.price || "Contact Artifact Curator"}
                                    </div>
                                </div>

                                <button className="w-full md:w-auto px-10 py-4 rounded-full bg-[#c5a059] text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(197,160,89,0.2)]">
                                    Xác Nhận Thỉnh Kinh
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
