'use client'

import React from 'react'
import { ArrowUpRight, MapPin, Clock, Briefcase } from 'lucide-react'
import { JobPosition } from '@/lib/jobs'

interface JobCardProps {
    job: JobPosition
    onApply: (url: string) => void
}

export default function JobCard({ job, onApply }: JobCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#c5a059]/30 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(197,160,89,0.15)]">
            {/* Glow Effect */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#c5a059]/10 blur-[80px] transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
                {/* Card Header: Tags & Time */}
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-2">
                        <span className="inline-block rounded-md bg-[#c5a059]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#c5a059] border border-[#c5a059]/20">
                            {job.department}
                        </span>
                        <span className="inline-block rounded-md bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-500 border border-white/10">
                            {job.type}
                        </span>
                    </div>
                    <span className="text-[10px] text-gray-600 font-medium">
                        2 ngày trước
                    </span>
                </div>

                {/* Title and Meta */}
                <div className="mb-4">
                    <h3 className="mb-2 font-serif text-2xl font-bold text-white transition-colors group-hover:text-[#c5a059]">
                        {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                            <MapPin className="h-3.5 w-3.5 text-[#c5a059]/60" />
                            {job.location}
                        </div>
                        {job.salary && (
                            <div className="flex items-center gap-1.5 text-xs text-[#c5a059]/80 font-medium">
                                <Briefcase className="h-3.5 w-3.5 text-[#c5a059]/60" />
                                {job.salary}
                            </div>
                        )}
                    </div>
                </div>

                <p className="mb-8 text-sm leading-relaxed text-gray-500 line-clamp-2 italic">
                    "{job.description}"
                </p>

                {/* Actions - Pushed to bottom */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex gap-4">
                        <button
                            onClick={() => onApply(job.larkFormUrl)}
                            className="rounded-full bg-[#c5a059] px-6 py-2.5 text-xs font-bold text-black transition-all duration-300 hover:bg-[#b08e4d] hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] active:scale-95"
                        >
                            ỨNG TUYỂN
                        </button>
                        <a
                            href={job.larkDocUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors"
                        >
                            JD CHI TIẾT
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        </a>
                    </div>

                    <button className="p-2 text-gray-600 hover:text-[#c5a059] transition-colors rounded-full hover:bg-white/5">
                        <Briefcase className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
