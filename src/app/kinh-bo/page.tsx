
import React from 'react'
import { Package } from 'lucide-react'
import SpotlightCone from '@/components/ui/SpotlightCone'
import { sanityFetch } from '@/sanity/lib/fetch'
import { groq } from 'next-sanity'
import KinhBoGallery, { SanityProduct } from '@/components/products/KinhBoGallery'

export default async function KinhBoPage() {
  const products = await sanityFetch<SanityProduct[]>({
    query: groq`*[_type == "product"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      type,
      price,
      isContactRequired,
      description,
      features,
      icon,
      status
    }`,
    tags: ['product']
  })

  return (
    <div className="min-h-screen museum-void relative overflow-x-hidden pt-12 md:pt-20 pb-64">
      {/* Global Ambient Fog */}
      <div className="fixed inset-x-0 bottom-0 h-[40vh] ambient-fog pointer-events-none z-20" />

      {/* Header Area */}
      <header className="max-w-4xl mx-auto px-6 mb-16 text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-silver/20 flex items-center justify-center bg-card/30 backdrop-blur-sm">
            <Package className="w-6 h-6 text-silver/60" />
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-gradient-silver mb-4 uppercase">
            Kinh Bộ
          </h1>
          <div className="space-y-4">
            <p className="text-base md:text-lg text-muted-foreground font-sans font-light tracking-[0.3em] uppercase">
              The Artifact Gallery
            </p>
            <p className="text-xs md:text-sm text-[#c5a059] font-sans italic opacity-70">
              "Mọi dịch vụ là một pháp môn, mọi sản phẩm là một duyên lành."
            </p>
          </div>
        </div>
      </header>

      {/* Gallery Grid - Client Side Component for Interaction */}
      <KinhBoGallery initialProducts={products || []} />
    </div>
  )
}
