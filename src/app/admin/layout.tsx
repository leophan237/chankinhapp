import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Barlow } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { motion } from "framer-motion";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { sessionClaims } = await auth();
    const userRole = sessionClaims?.metadata?.role;

    if (userRole !== "admin") {
        redirect("/?error=access_denied");
    }

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className={`${barlow.className} relative min-h-screen bg-admin-bg text-foreground antialiased transition-colors duration-500 overflow-hidden`}>

                {/* Animated Background Orbs */}
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#c5a059]/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-500/10 blur-[100px] rounded-full" />
                    <div className="absolute top-[30%] left-[20%] w-[15%] h-[15%] bg-[#c5a059]/5 blur-[80px] rounded-full" />
                </div>

                {/* Liquid Glass Sidebar */}
                <AdminSidebar />

                <div className="relative z-10 flex flex-col min-h-screen ml-72 pt-24 pb-12 pr-6">
                    {/* Floating Glass Header */}
                    <AdminHeader />

                    {/* Main Content Area */}
                    <main className="flex-1 p-6 rounded-[2.5rem] bg-white/30 dark:bg-black/10 border border-white/10 dark:border-white/5 backdrop-blur-md shadow-2xl shadow-black/5">
                        <div className="max-w-7xl mx-auto">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}
