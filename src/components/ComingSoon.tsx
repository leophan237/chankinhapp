'use client'

import { motion } from 'framer-motion'
import { Hammer, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function ComingSoon({ title }: { title: string }) {
    return (
        <div className="min-h-screen texture-overlay flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-md w-full p-8 rounded-xl border border-silver/30 bg-card/80 backdrop-blur-md text-center"
            >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-silver/30 flex items-center justify-center bg-background">
                    <Hammer className="w-10 h-10 text-silver" />
                </div>
                <h1 className="text-3xl font-sans text-gradient-silver font-semibold mb-4">
                    {title}
                </h1>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                    Không gian này đang được xây dựng và sẽ sớm ra mắt cộng đồng Chân Kinh.
                    Hãy quay lại sau để trải nghiệm.
                </p>
                <Link href="/">
                    <button className="w-full px-6 py-3 rounded-lg bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-colors font-light flex items-center justify-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Quay về trang chủ
                    </button>
                </Link>
            </motion.div>
        </div>
    )
}
