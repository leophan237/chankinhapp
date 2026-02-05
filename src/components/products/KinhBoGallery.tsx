
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Package } from 'lucide-react'
import SpotlightCone from '@/components/ui/SpotlightCone'
import ArtifactCard from '@/components/ui/ArtifactCard'
import AcquisitionModal from '@/components/ui/AcquisitionModal'

export interface SanityProduct {
    _id: string
    title: string
    slug: { current: string }
    type: 'course' | 'service' | 'consultancy'
    price?: number
    isContactRequired?: boolean
    description: string
    features?: string[]
    icon?: string | { name: string }
    status: 'available' | 'sold-out' | 'coming-soon'
}

interface KinhBoGalleryProps {
    initialProducts: SanityProduct[]
}

export default function KinhBoGallery({ initialProducts }: KinhBoGalleryProps) {
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAcquire = (product: SanityProduct) => {
        // Map SanityProduct to the structure AcquisitionModal expects
        const mappedArtifact = {
            name: product.title,
            vietnameseName: product.type.toUpperCase(), // Or another field
            price: product.isContactRequired ? 'Liên Hệ' : (product.price ? `${product.price.toLocaleString()} VND` : 'Liên Hệ'),
            terms: product.features || []
        }
        setSelectedProduct(mappedArtifact)
        setIsModalOpen(true)
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {initialProducts.map((product, index) => {
                    const isComingSoon = product.status === 'coming-soon'

                    // Map Sanity types to display labels
                    const typeLabel = product.type === 'course' ? 'KHÓA HỌC' :
                        product.type === 'service' ? 'DỊCH VỤ' : 'TƯ VẤN'

                    const statusLabel = product.status === 'available' ? 'Available' :
                        product.status === 'coming-soon' ? 'Coming Soon' : 'Sold Out'

                    return (
                        <motion.section
                            key={product._id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
                            className={`relative ${isComingSoon ? 'opacity-50 pointer-events-none' : ''}`}
                        >
                            <SpotlightCone>
                                <ArtifactCard
                                    name={product.title}
                                    vietnameseName={product.type === 'course' ? 'Học Phí' : 'Ngân Sách'}
                                    description={product.description}
                                    category={typeLabel}
                                    status={statusLabel}
                                    year="2025"
                                    icon={product.icon || ''}
                                    details={product.features || []}
                                    onAcquire={() => handleAcquire(product)}
                                />
                            </SpotlightCone>
                        </motion.section>
                    )
                })}
            </div>

            {selectedProduct && (
                <AcquisitionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    artifact={selectedProduct}
                />
            )}
        </>
    )
}
