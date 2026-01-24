import { GlassCard } from "@/components/admin/GlassCard";

export default function AdminUsers() {
    return (
        <div className="space-y-10 animate-fadeIn">
            <header>
                <p className="text-[10px] text-accent uppercase font-bold tracking-[0.3em] mb-1">Entity Management</p>
                <h1 className="text-4xl font-extrabold tracking-tight">Disciples</h1>
            </header>

            <GlassCard className="overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold border-b border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
                                <th className="p-6">Name</th>
                                <th className="p-6">Email</th>
                                <th className="p-6">Status</th>
                                <th className="p-6 text-right">Level</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                            {[
                                { name: "Thiền Điền", email: "thien.dien@cko.com", status: "Active", level: "Adept" },
                                { name: "Minh Tâm", email: "minh.tam@cko.com", status: "Active", level: "Seeker" },
                                { name: "Nguyên An", email: "nguyen.an@cko.com", status: "Paused", level: "Novice" },
                            ].map((user, i) => (
                                <tr key={i} className="group border-b border-black/[0.02] dark:border-white/[0.02] last:border-0 hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors">
                                    <td className="p-6 text-gray-900 dark:text-white font-bold">{user.name}</td>
                                    <td className="p-6 text-muted-foreground">{user.email}</td>
                                    <td className="p-6">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl border ${user.status === 'Active'
                                                ? 'text-green-500 bg-green-500/5 border-green-500/10'
                                                : 'text-zinc-500 bg-zinc-500/5 border-zinc-500/10'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="p-6 text-right text-gray-400 font-bold tracking-widest">{user.level}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    );
}
