'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Calculator,
    ChevronRight,
    ChevronLeft,
    TrendingUp,
    DollarSign,
    BarChart3,
    AlertCircle,
    Coffee,
    ShoppingBag,
    Zap,
    Users
} from 'lucide-react'

type Step = 1 | 2 | 3 | 4

export function BusinessValidator() {
    const [step, setStep] = useState<Step>(1)
    const [formData, setFormData] = useState({
        businessType: 'cafe',
        scale: 30, // m2
        seats: 15,
        initialInvestment: 200000000, // 200M VND
        avgCheck: 45000,
        dailyCustomers: 40,
        cogs: 35, // %
        monthlyRent: 15000000,
        staffCosts: 12000000,
        utilities: 3000000,
        marketing: 2000000
    })

    const nextStep = () => setStep((prev) => (prev < 4 ? (prev + 1) as Step : prev))
    const prevStep = () => setStep((prev) => (prev > 1 ? (prev - 1) as Step : prev))

    // Industry Benchmarks (from validator.vn/fnb research)
    const benchmarks = {
        cafe: { cogs: 30, spacePerSeat: 1.6, waste: 5, rentRatio: 0.2 },
        retail: { cogs: 50, spacePerSeat: 2.0, waste: 2, rentRatio: 0.15 }
    }

    const currentBenchmark = formData.businessType === 'cafe' ? benchmarks.cafe : benchmarks.retail

    // Basic Calculations
    const monthlyRevenue = formData.avgCheck * formData.dailyCustomers * 30
    const monthlyCOGS = (monthlyRevenue * formData.cogs) / 100
    const wasteCost = (monthlyCOGS * currentBenchmark.waste) / 100
    const monthlyOPEX = formData.monthlyRent + formData.staffCosts + formData.utilities + formData.marketing + wasteCost
    const monthlyProfit = monthlyRevenue - monthlyCOGS - monthlyOPEX
    const paybackPeriod = formData.initialInvestment / (monthlyProfit > 0 ? monthlyProfit : 1)
    const breakEvenCustomers = monthlyOPEX / (formData.avgCheck * (1 - formData.cogs / 100))

    // Efficiency Scores
    const spaceEfficiency = formData.scale / (formData.seats || 1)
    const rentEfficiency = formData.monthlyRent / (monthlyRevenue || 1)

    const feasibilityScore = Math.min(100, Math.max(0,
        (monthlyProfit / (formData.initialInvestment * 0.1)) * 50 +
        (rentEfficiency < currentBenchmark.rentRatio ? 30 : 10) +
        (spaceEfficiency > currentBenchmark.spacePerSeat ? 20 : 0)
    ))

    return (
        <div className="w-full rounded-2xl border border-silver/30 bg-card/40 backdrop-blur-md overflow-hidden flex flex-col min-h-[500px]">
            {/* Header */}
            <div className="p-6 border-b border-silver/10 bg-silver/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-silver/20 flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-silver" />
                    </div>
                    <div>
                        <h2 className="text-xl font-sans text-gradient-silver font-semibold">Business Plan Validator</h2>
                        <p className="text-xs text-muted-foreground font-light">Thẩm định mô hình kinh doanh của bạn</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`w-8 h-1 rounded-full transition-colors ${s <= step ? 'bg-silver' : 'bg-silver/20'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 relative">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-lg font-sans text-silver font-medium">1. Mô hình & Quy mô</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setFormData({ ...formData, businessType: 'cafe' })}
                                    className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-2 ${formData.businessType === 'cafe' ? 'border-silver bg-silver/10' : 'border-border/50 hover:border-silver/30'}`}
                                >
                                    <Coffee className="w-6 h-6" />
                                    <span className="text-sm">Quán Cà Phê</span>
                                </button>
                                <button
                                    onClick={() => setFormData({ ...formData, businessType: 'retail' })}
                                    className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-2 ${formData.businessType === 'retail' ? 'border-silver bg-silver/10' : 'border-border/50 hover:border-silver/30'}`}
                                >
                                    <ShoppingBag className="w-6 h-6" />
                                    <span className="text-sm">Bán Lẻ / Shop</span>
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-muted-foreground mb-2 block">Diện tích (m2)</label>
                                    <input
                                        type="number"
                                        value={formData.scale}
                                        onChange={(e) => setFormData({ ...formData, scale: Number(e.target.value) })}
                                        className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-2 text-silver focus:outline-none focus:border-silver/50"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-muted-foreground mb-2 block">Số chỗ ngồi dự kiến</label>
                                    <input
                                        type="number"
                                        value={formData.seats}
                                        onChange={(e) => setFormData({ ...formData, seats: Number(e.target.value) })}
                                        className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-2 text-silver focus:outline-none focus:border-silver/50"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-lg font-sans text-silver font-medium">2. Vốn đầu tư ban đầu</h3>
                            <div className="p-6 rounded-xl bg-silver/5 border border-silver/10 text-center">
                                <DollarSign className="w-8 h-8 text-silver mx-auto mb-2" />
                                <p className="text-sm text-muted-foreground mb-4">Ước tính tổng vốn cần thiết (CAPEX)</p>
                                <input
                                    type="number"
                                    value={formData.initialInvestment}
                                    onChange={(e) => setFormData({ ...formData, initialInvestment: Number(e.target.value) })}
                                    className="text-3xl font-sans text-center bg-transparent border-b border-silver/30 focus:outline-none focus:border-silver w-full pb-2"
                                />
                                <p className="text-xs text-silver/50 mt-2">VNĐ</p>
                            </div>
                            <p className="text-xs text-muted-foreground italic">
                                * Bao gồm: Cọc mặt bằng, sửa sang, máy móc, trang thiết bị và vốn lưu động 3 tháng đầu.
                            </p>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-lg font-sans text-silver font-medium">3. Doanh thu & Vận hành</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-muted-foreground mb-1 block">Khách/ngày</label>
                                    <input
                                        type="number"
                                        value={formData.dailyCustomers}
                                        onChange={(e) => setFormData({ ...formData, dailyCustomers: Number(e.target.value) })}
                                        className="w-full bg-background/50 border border-border/50 rounded-lg px-3 py-2 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-muted-foreground mb-1 block">Chi tiêu/khách</label>
                                    <input
                                        type="number"
                                        value={formData.avgCheck}
                                        onChange={(e) => setFormData({ ...formData, avgCheck: Number(e.target.value) })}
                                        className="w-full bg-background/50 border border-border/50 rounded-lg px-3 py-2 text-sm"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Thuê mặt bằng</span>
                                    <input
                                        type="number"
                                        value={formData.monthlyRent}
                                        onChange={(e) => setFormData({ ...formData, monthlyRent: Number(e.target.value) })}
                                        className="w-32 bg-background/50 border border-border/50 rounded px-2 py-1 text-right text-xs"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Nhân sự</span>
                                    <input
                                        type="number"
                                        value={formData.staffCosts}
                                        onChange={(e) => setFormData({ ...formData, staffCosts: Number(e.target.value) })}
                                        className="w-32 bg-background/50 border border-border/50 rounded px-2 py-1 text-right text-xs"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-6"
                        >
                            <div className="text-center space-y-2">
                                <h3 className="text-2xl font-sans text-gradient-silver font-bold">KẾT QUẢ THẨM ĐỊNH</h3>
                                <div className="inline-block px-4 py-1 rounded-full bg-silver/10 border border-silver/20 text-silver text-xs">
                                    {feasibilityScore > 70 ? 'KHẢ THI CAO' : feasibilityScore > 40 ? 'CẦN CÂN NHẮC' : 'RỦI RO CAO'}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border border-border/50 bg-card/50 text-center">
                                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Thời gian hoàn vốn</p>
                                    <p className="text-xl font-sans text-silver">{paybackPeriod.toFixed(1)} <span className="text-xs">tháng</span></p>
                                </div>
                                <div className="p-4 rounded-xl border border-border/50 bg-card/50 text-center">
                                    <p className="text-[10px] text-muted-foreground uppercase mb-1">Hòa vốn/Ngày</p>
                                    <p className="text-xl font-sans text-silver">{Math.ceil(breakEvenCustomers)} <span className="text-xs">khách</span></p>
                                </div>
                            </div>

                            {/* P&L Breakdown */}
                            <div className="rounded-xl border border-border/50 bg-card/30 overflow-hidden text-[11px]">
                                <div className="bg-silver/10 p-2 border-b border-border/50 font-medium text-silver">Dự báo P&L hàng tháng</div>
                                <div className="p-3 space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Doanh thu dự kiến</span>
                                        <span className="text-silver">{monthlyRevenue.toLocaleString()} đ</span>
                                    </div>
                                    <div className="flex justify-between text-red-300">
                                        <span>Giá vốn & Hao hụt ({currentBenchmark.waste}%)</span>
                                        <span>- {(monthlyCOGS + wasteCost).toLocaleString()} đ</span>
                                    </div>
                                    <div className="flex justify-between text-red-300">
                                        <span>Chi phí vận hành</span>
                                        <span>- {(monthlyOPEX - wasteCost).toLocaleString()} đ</span>
                                    </div>
                                    <div className="border-t border-border/50 pt-2 flex justify-between font-bold">
                                        <span className="text-silver">Lợi nhuận ròng</span>
                                        <span className={monthlyProfit > 0 ? 'text-green-400' : 'text-red-400'}>
                                            {monthlyProfit.toLocaleString()} đ
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex gap-2 p-3 rounded-lg bg-silver/5 border border-silver/20 text-[11px] text-silver/80">
                                    <Zap className="w-4 h-4 flex-shrink-0 text-silver" />
                                    <div>
                                        <span className="font-bold block mb-1">AI Advisor Insight:</span>
                                        <p className="font-light italic text-[10px] leading-relaxed">
                                            "{monthlyProfit < 0
                                                ? 'Chi phí vận hành đang chiếm quá lớn. Hãy cân nhắc cắt giảm nhân sự hoặc tối ưu định mức nguyên liệu (COGS).'
                                                : rentEfficiency > currentBenchmark.rentRatio
                                                    ? `Mặt bằng đang chiếm ${(rentEfficiency * 100).toFixed(0)}% doanh thu (ngưỡng an toàn là ${(currentBenchmark.rentRatio * 100).toFixed(0)}%). Bạn cần tăng doanh thu hoặc thương lượng lại giá thuê.`
                                                    : spaceEfficiency < currentBenchmark.spacePerSeat
                                                        ? 'Không gian đang hơi chật so với số chỗ ngồi. Hãy chú ý đến trải nghiệm khách hàng để giữ chân họ quay lại.'
                                                        : 'Mô hình có chỉ số vận hành rất tốt. Chúc mừng bạn!'}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-silver/10 flex justify-between bg-silver/5">
                <button
                    onClick={prevStep}
                    disabled={step === 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 text-sm text-muted-foreground hover:text-foreground disabled:opacity-0 transition-all"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Quay lại
                </button>
                {step < 4 ? (
                    <button
                        onClick={nextStep}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-all text-sm"
                    >
                        Tiếp theo
                        <ChevronRight className="w-4 h-4" />
                    </button>
                ) : (
                    <button
                        onClick={() => setStep(1)}
                        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-all text-sm"
                    >
                        Thử lại
                        <Zap className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    )
}
