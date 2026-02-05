'use client'

import React, { useState, useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { createPortal } from 'react-dom'

interface ApplicationModalProps {
    formUrl: string
    isOpen: boolean
    onClose: () => void
}

export default function ApplicationModal({ formUrl, isOpen, onClose }: ApplicationModalProps) {
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

    if (!mounted) return null

    return (
        <>
            {/* Modal Portal */}
            {isOpen && createPortal(
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 text-white">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <div className="relative w-full max-w-4xl h-[85vh] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5 backdrop-blur">
                            <h3 className="text-[#c5a059] font-serif text-lg font-bold pl-2">
                                Đơn Ứng Tuyển
                            </h3>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Iframe Container with refined padding */}
                        <div className="flex-1 bg-white pt-8 pb-10 px-1">
                            <iframe
                                src={formUrl}
                                className="w-full h-full border-0"
                                title="Application Form"
                            />
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}
