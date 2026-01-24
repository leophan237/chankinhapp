"use client";

import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { ThemeToggle } from "./ThemeToggle";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export function AdminHeader() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    return (
        <header className="fixed top-4 left-[288px] right-4 z-40">
            <div className="h-16 flex items-center justify-between px-6 rounded-3xl bg-glass-bg border border-black/5 dark:border-white/10 backdrop-blur-2xl shadow-xl shadow-black/5 transition-all duration-500">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm">
                    <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                        <Home className="w-4 h-4" />
                    </Link>
                    {segments.map((segment, index) => {
                        const path = `/${segments.slice(0, index + 1).join("/")}`;
                        const isLast = index === segments.length - 1;

                        return (
                            <div key={path} className="flex items-center gap-2">
                                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                                <Link
                                    href={path}
                                    className={`capitalize transition-colors ${isLast ? "text-foreground font-semibold" : "text-muted-foreground hover:text-accent"
                                        }`}
                                >
                                    {segment === "admin" ? "Tàng Thư Các" : segment}
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Global Controls */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <div className="h-6 w-px bg-black/5 dark:bg-white/5" />
                    <div className="flex items-center gap-3 pl-1">
                        <div className="text-right hidden sm:block">
                            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest leading-tight">Admin Portal</p>
                            <p className="text-xs font-semibold leading-tight capitalize">Root Access</p>
                        </div>
                        <div className="border-2 border-accent/20 rounded-full p-0.5 shadow-lg shadow-accent/10">
                            <UserButton
                                afterSignOutUrl="/"
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "w-8 h-8 rounded-full"
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
