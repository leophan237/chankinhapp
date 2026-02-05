
import React from 'react'
import { icons, Package } from 'lucide-react'

interface IconResolverProps {
    icon?: string | { name: string }
    className?: string
}

export default function IconResolver({ icon, className }: IconResolverProps) {
    // Safe extraction of the icon name
    const iconName = typeof icon === 'string' ? icon : icon?.name

    if (!iconName) {
        return <Package className={className} />
    }

    // Access the icon component dynamically
    const LucideIcon = (icons as any)[iconName]

    if (!LucideIcon) {
        console.warn(`Icon "${iconName}" not found in lucide-react. Falling back to Package.`)
        return <Package className={className} />
    }

    return <LucideIcon className={className} />
}
