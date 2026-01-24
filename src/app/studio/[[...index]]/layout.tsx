export const metadata = {
    title: 'Sanity Studio',
    description: 'Content Management for Digital Monastery',
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="fixed inset-0 z-[9999] bg-white">
            {children}
        </div>
    )
}
