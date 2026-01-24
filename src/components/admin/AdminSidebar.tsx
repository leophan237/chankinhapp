"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    ExternalLink,
    ShieldCheck,
    ChevronRight,
    Home
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Disciples", href: "/admin/users", icon: Users },
    { name: "Rituals", href: "/admin/orders", icon: ShoppingCart },
    { name: "Studio", href: "/studio", icon: ExternalLink, external: true },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 flex flex-col fixed inset-y-4 left-4 z-50 rounded-3xl bg-glass-bg border border-black/5 dark:border-white/10 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-500 overflow-hidden">
            <div className="p-6 border-b border-black/5 dark:border-white/5 flex items-center gap-3 bg-white/20 dark:bg-black/20">
                <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-2xl shadow-lg shadow-accent/20">
                    <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold tracking-tight text-sm uppercase">Tàng Thư Các</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Administration</span>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto scrollbar-hide mt-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center justify-between group px-4 py-3 text-sm transition-all duration-300 rounded-2xl border border-transparent",
                                isActive
                                    ? "bg-accent/10 text-accent font-semibold border-accent/20 shadow-sm"
                                    : "text-muted-foreground hover:bg-white/40 dark:hover:bg-white/5 hover:text-foreground"
                            )}
                            target={item.external ? "_blank" : undefined}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon className={cn(
                                    "w-4 h-4 transition-transform duration-300",
                                    isActive ? "scale-110" : "opacity-70 group-hover:scale-110 group-hover:opacity-100"
                                )} />
                                <span className="tracking-wide">{item.name}</span>
                            </div>
                            <ChevronRight className={cn(
                                "w-3.5 h-3.5 transition-all duration-300",
                                isActive ? "opacity-100" : "opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0"
                            )} />
                        </Link>
                    );
                })}

                <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/5">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-accent hover:bg-accent/10 transition-all rounded-xl border border-accent/20 bg-accent/5 backdrop-blur-md group"
                    >
                        <Home className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                        <span className="tracking-wide">Khám phá</span>
                    </Link>
                </div>
            </nav>

            <div className="p-6 border-t border-black/5 dark:border-white/5 bg-white/10 dark:bg-black/10">
                <p className="text-[9px] text-muted-foreground/60 uppercase font-bold tracking-[0.2em] text-center mb-1">
                    CHÂN KINH ONLINE
                </p>
                <p className="text-[8px] text-muted-foreground/40 font-medium text-center">
                    V2.4 LIQUID GLASS
                </p>
            </div>
        </aside>
    );
}
