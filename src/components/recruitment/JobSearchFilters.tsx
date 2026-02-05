'use client'

import React from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'

interface JobSearchFiltersProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    activeCategory: string
    setActiveCategory: (category: string) => void
    categories: string[]
}

export default function JobSearchFilters({
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    categories
}: JobSearchFiltersProps) {
    return (
        <div className="mb-12 space-y-6">
            {/* Search Bar Area */}
            <div className="relative flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-[#c5a059] transition-colors" />
                    <input
                        type="text"
                        placeholder="Tìm kiếm vị trí, kỹ năng hoặc từ khoá..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a059]/50 focus:ring-1 focus:ring-[#c5a059]/20 transition-all backdrop-blur-md"
                    />
                </div>
                <button className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md">
                    <SlidersHorizontal className="h-5 w-5" />
                    <span className="text-sm font-medium">Bộ lọc</span>
                </button>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 items-center">
                <button
                    onClick={() => setActiveCategory('All')}
                    className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all border ${activeCategory === 'All'
                            ? 'bg-[#c5a059] text-black border-[#c5a059]'
                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-[#c5a059]/30 hover:text-gray-200'
                        }`}
                >
                    Tất cả
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all border ${activeCategory === category
                                ? 'bg-[#c5a059] text-black border-[#c5a059]'
                                : 'bg-white/5 text-gray-400 border-white/10 hover:border-[#c5a059]/30 hover:text-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}
