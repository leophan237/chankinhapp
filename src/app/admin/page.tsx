import { GlassCard } from "@/components/admin/GlassCard";
import { Users, ShoppingBag, BookOpen, Activity, ArrowUpRight } from "lucide-react";

export default function AdminOverview() {
    const stats = [
        { label: "Active Disciples", value: "1,240", delta: "+12%", icon: Users },
        { label: "Daily Rituals", value: "84", delta: "+5%", icon: ShoppingBag },
        { label: "Artifacts Count", value: "256", delta: "+2", icon: BookOpen },
        { label: "Mindfulness Index", value: "98.2", delta: "+0.4", icon: Activity },
    ];

    return (
        <div className="space-y-10 animate-fadeIn">
            <header className="flex justify-between items-end">
                <div>
                    <p className="text-[10px] text-accent uppercase font-bold tracking-[0.3em] mb-1">System Overview</p>
                    <h1 className="text-4xl font-extrabold tracking-tight">Tàng Thư Các</h1>
                </div>
                <div className="text-right pb-1">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Status: Operational</p>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <GlassCard key={i} className="p-8 group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                                <stat.icon className="w-5 h-5 text-accent" />
                            </div>
                            <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
                                {stat.delta}
                            </span>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold mb-2">{stat.label}</p>
                            <h3 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white leading-none">{stat.value}</h3>
                        </div>
                    </GlassCard>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity Table */}
                <GlassCard className="lg:col-span-2 p-8 overflow-hidden">
                    <div className="flex justify-between items-center mb-8 px-2">
                        <h2 className="text-xl font-bold tracking-tight">Recent Synchronizations</h2>
                        <button className="text-xs font-bold text-accent hover:underline flex items-center gap-1 group">
                            View All <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold border-b border-black/5 dark:border-white/5">
                                    <th className="pb-4 px-2">Entity</th>
                                    <th className="pb-4 px-2">Activity</th>
                                    <th className="pb-4 px-2">Timestamp</th>
                                    <th className="pb-4 px-2 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-medium">
                                {[
                                    { name: "Thiền Điền", action: "Entered Đạo Tràng", time: "2m ago", status: "Active" },
                                    { name: "Minh Tâm", action: "Purchased Pháp Khí", time: "15m ago", status: "Completed" },
                                    { name: "Nguyên An", action: "Updated Profile", time: "1h ago", status: "Success" },
                                    { name: "Lạc Diệp", action: "Joined Ritual", time: "3h ago", status: "Live" },
                                ].map((row, i) => (
                                    <tr key={i} className="group border-b border-black/[0.02] dark:border-white/[0.02] last:border-0">
                                        <td className="py-5 px-2 text-gray-900 dark:text-white font-bold">{row.name}</td>
                                        <td className="py-5 px-2 text-muted-foreground">{row.action}</td>
                                        <td className="py-5 px-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold">{row.time}</td>
                                        <td className="py-5 px-2 text-right">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/5 px-3 py-1.5 rounded-xl border border-accent/10">
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>

                {/* System Health / Right Widget */}
                <GlassCard className="p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold tracking-tight mb-2">Temple Pulse</h2>
                        <p className="text-xs text-muted-foreground leading-relaxed">Core meditative systems are operating within optimal latency parameters.</p>
                    </div>

                    <div className="py-8 space-y-6">
                        {[
                            { label: "Server Load", value: 24 },
                            { label: "Sync Speed", value: 92 },
                            { label: "Uptime", value: 99.9 },
                        ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest">
                                    <span className="text-gray-400">{item.label}</span>
                                    <span className="text-accent">{item.value}%</span>
                                </div>
                                <div className="h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-accent rounded-full"
                                        style={{ width: `${item.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="w-full py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                        Synchronize Archives
                    </button>
                </GlassCard>
            </div>
        </div>
    );
}
