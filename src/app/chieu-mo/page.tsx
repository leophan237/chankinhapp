
import React from 'react'
import { GET_JOBS_QUERY } from '@/lib/sanity'
import { sanityFetch } from '@/sanity/lib/fetch'
import RecruitmentListing, { SanityJob } from '@/components/recruitment/RecruitmentListing'

export default async function RecruitmentPage() {
    const jobs = await sanityFetch<SanityJob[]>({
        query: GET_JOBS_QUERY,
        tags: ['job']
    })

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#c5a059]/30">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#c5a059]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#c5a059]/5 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto py-24 px-6">

                {/* Header Section */}
                <header className="text-center mb-16">
                    <span className="text-[#c5a059] text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
                        KHAI MỞ CƠ HỘI
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#c5a059] tracking-tight mb-8">
                        CHIÊU MỘ HIỀN TÀI
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed text-lg italic opacity-80">
                        "Tại Chân Kinh F&B, mỗi cộng sự là một mảnh ghép của sự tỉnh thức. Chúng tôi cùng nhau kiến tạo những giá trị bền vững và thanh tịnh."
                    </p>
                </header>

                {/* Client-side Listing & Interaction */}
                <RecruitmentListing initialJobs={jobs} />

            </div>
        </main>
    )
}
