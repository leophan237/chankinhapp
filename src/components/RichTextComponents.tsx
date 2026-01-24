import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { PortableTextComponents } from '@portabletext/react'

export const RichTextComponents: PortableTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-[400px] my-10 rounded-xl overflow-hidden shadow-lg border border-border/50 bg-muted/20">
                    <Image
                        className="object-cover object-center"
                        src={urlFor(value).url()}
                        alt={value.alt || 'Post Content Image'}
                        fill
                    />
                </div>
            )
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-10 py-5 list-disc space-y-3 text-lg font-sans text-foreground/90">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="ml-10 py-5 list-decimal space-y-3 text-lg font-sans text-foreground/90">{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-[#c5a059] mt-12 mb-6 leading-tight tracking-tight">
                {children}
            </h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#c5a059] mt-10 mb-5 leading-tight tracking-tight">
                {children}
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-2xl md:text-3xl font-sans font-bold text-[#c5a059] mt-8 mb-4 leading-tight">
                {children}
            </h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-xl md:text-2xl font-sans font-bold text-[#c5a059] mt-8 mb-4 leading-tight">
                {children}
            </h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-[#c5a059] pl-6 py-3 my-8 italic text-lg text-muted-foreground bg-muted/10 rounded-r-lg font-sans">
                {children}
            </blockquote>
        ),
        normal: ({ children }: any) => (
            <p className="font-sans text-lg leading-loose mb-6 text-foreground/90 font-light tracking-wide">
                {children}
            </p>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="text-[#c5a059] font-medium hover:underline decoration-[#c5a059] decoration-2 underline-offset-4 transition-all"
                >
                    {children}
                </Link>
            )
        },
        strong: ({ children }: any) => (
            <strong className="font-bold text-foreground font-sans">{children}</strong>
        ),
        em: ({ children }: any) => (
            <em className="italic font-sans text-foreground/90">{children}</em>
        ),
    },
}
