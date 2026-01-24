"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-[2rem] backdrop-blur-md transition-all duration-300",
                // Light Mode Surface
                "bg-white/70 border border-white/40 shadow-sm",
                // Dark Mode Surface
                "dark:bg-black/20 dark:border-white/10 dark:shadow-lg",
                // Interactivity
                hoverEffect && "hover:scale-[1.01] hover:shadow-xl dark:hover:shadow-black/40",
                className
            )}
        >
            {children}
        </div>
    );
}
