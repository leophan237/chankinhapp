'use client'

import React, { useState } from 'react'
import JobCard from '@/components/recruitment/JobCard'
import JobSearchFilters from '@/components/recruitment/JobSearchFilters'
import ApplicationModal from '@/components/recruitment/ApplicationModal'
import WorkspaceGallery from '@/components/recruitment/WorkspaceGallery'

export interface SanityJob {
    _id: string
    title: string
    department: string
    location: string
    type: string
    salary?: string
    description: string
    larkDocUrl?: string
    larkFormUrl?: string
    publishedAt: string
}

interface RecruitmentListingProps {
    initialJobs: SanityJob[]
}

export default function RecruitmentListing({ initialJobs }: RecruitmentListingProps) {
    const [selectedFormUrl, setSelectedFormUrl] = useState<string | null>(null)
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')

    // Map SanityJob to the format JobCard expects (JobPosition), if necessary.
    // JobCard expects: { id, title, department, location, type, salary, description, larkDocUrl, larkFormUrl }
    // Our Sanity fields mostly match. _id -> id.

    const mappedJobs = initialJobs.map(job => ({
        id: job._id,
        title: job.title,
        department: job.department,
        location: job.location,
        type: job.type as 'Full-time' | 'Part-time' | 'Contract', // Type assertion or validation might be needed
        salary: job.salary || 'Thoả thuận',
        description: job.description,
        larkDocUrl: job.larkDocUrl || '#',
        larkFormUrl: job.larkFormUrl || '#'
    }))

    const categories = Array.from(new Set(mappedJobs.map(j => j.department)))

    const filteredJobs = mappedJobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = activeCategory === 'All' || job.department === activeCategory
        return matchesSearch && matchesCategory
    })

    return (
        <>
            {/* LaborX Style Search & Filters */}
            <JobSearchFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={categories}
            />

            {/* Job Gallery Grid - 2 columns on large screens */}
            <section className="mb-32">
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <h2 className="text-xl font-serif text-white font-bold flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                        Vị Trí Phụng Sự
                    </h2>
                    <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">
                        {filteredJobs.length} Kết quả
                    </span>
                </div>

                {filteredJobs.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        {filteredJobs.map((job) => (
                            <JobCard
                                key={job.id}
                                job={job}
                                onApply={(url) => setSelectedFormUrl(url)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-32 text-center border border-dashed border-white/10 rounded-3xl bg-white/5">
                        <p className="text-gray-500 font-serif italic text-lg">
                            Không tìm thấy vị trí nào phù hợp với yêu cầu của bạn.
                        </p>
                    </div>
                )}
            </section>

            {/* Culture Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 border-t border-white/5">
                <div className="space-y-8">
                    <h2 className="text-4xl font-serif text-[#c5a059] italic leading-tight">Triết Lý Làm Việc <br /> Tại Chân Kinh</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        Môi trường tại Chân Kinh F&B được xây dựng trên sự tĩnh tại và minh bạch. Chúng tôi trân trọng những tâm hồn tỉ mỉ, kiên nhẫn.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { t: "Tỉnh Thức", d: "Sự tập trung tuyệt đối vào từng chi tiết nhỏ." },
                            { t: "Minh Bạch", d: "Mọi nỗ lực đều được ghi nhận xứng đáng." },
                            { t: "Bền Vững", d: "Phát triển đi đôi với sự cân bằng nội tại." },
                            { t: "Phụng Sự", d: "Lan toả giá trị tốt đẹp đến cộng đồng." }
                        ].map((item, i) => (
                            <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c5a059]/30 transition-colors group">
                                <h4 className="text-[#c5a059] font-serif font-bold mb-2 group-hover:scale-105 transition-transform origin-left">{item.t}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    onClick={() => setIsGalleryOpen(true)}
                    className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                >
                    {/* Background Image */}
                    <img
                        src="/images/workspace/workspace_cover.png"
                        alt="Chân Kinh Workspace"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                    />

                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-[#c5a059]/5 group-hover:bg-transparent transition-colors duration-1000 z-10" />

                    {/* Content */}
                    <div className="absolute bottom-12 left-12 z-20 space-y-4">
                        <p className="text-sm text-[#c5a059] uppercase tracking-[0.3em] font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
                            Không gian làm việc
                        </p>
                        <p className="text-3xl font-serif italic text-white leading-snug group-hover:text-[#c5a059] transition-colors">"Nơi làm việc cũng là <br /> nơi tu tập tâm hồn."</p>
                        <button className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">
                            Khám phá không gian
                            <span className="w-8 h-px bg-white/20 group-hover:bg-[#c5a059] group-hover:w-12 transition-all" />
                        </button>
                    </div>

                    {/* Logo Watermark (behind text but on top of image) */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-10 pointer-events-none">
                        <div className="text-white font-serif text-[10rem] select-none group-hover:scale-125 transition-transform duration-[3000ms]">CK</div>
                    </div>
                </div>
            </section>

            {/* Footer Note */}
            <footer className="mt-20 text-center">
                <p className="text-gray-500 text-sm italic">
                    Cảm ơn bạn đã quan tâm đến cơ hội nghề nghiệp tại Chân Kinh F&B.
                </p>
            </footer>

            {/* Modular Application Modal */}
            <ApplicationModal
                isOpen={!!selectedFormUrl}
                formUrl={selectedFormUrl || ''}
                onClose={() => setSelectedFormUrl(null)}
            />

            {/* Workspace Gallery Modal */}
            <WorkspaceGallery
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
            />
        </>
    )
}
