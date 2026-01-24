import { GlassCard } from "@/components/admin/GlassCard";

export default function AdminOrders() {
    return (
        <div className="space-y-10 animate-fadeIn">
            <header>
                <p className="text-[10px] text-accent uppercase font-bold tracking-[0.3em] mb-1">Ritual Archives</p>
                <h1 className="text-4xl font-extrabold tracking-tight">Rituals</h1>
            </header>

            <GlassCard className="p-20 flex items-center justify-center border-dashed border-black/10 dark:border-white/10">
                <div className="text-center">
                    <h3 className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">No rituals recorded</h3>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">The archives are awaiting synchronization</p>
                </div>
            </GlassCard>
        </div>
    );
}
