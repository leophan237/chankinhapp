'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleUserRound, Crown, Sparkles } from 'lucide-react'

type Session = {
  id: number
  tab: string
  title: string
  bullets: string[]
  premium?: boolean
}

const sessions: Session[] = [
  {
    id: 1,
    tab: 'Buổi 1',
    title: 'Ideation to Concept',
    bullets: [
      'Giải mã tư duy "Khởi nghiệp gia Tư bản": Làm chủ cuộc chơi kinh doanh, thoát khỏi cái bẫy "người làm thuê cho chính mình".',
      'Tại sao sản phẩm ngon vẫn sập tiệm? Đi tìm yếu tố sống còn quyết định thành bại của một Start-up F&B.',
      'Thiết kế Mô hình kinh doanh bất bại: Ứng dụng 3 nguyên lý cốt lõi và bài học thực chiến từ các đế chế (KFC, Starbucks...).',
      'Vẽ chân dung Khách hàng & Chiến lược Sản phẩm: Định giá và thiết kế sản phẩm đánh trúng tử huyệt cảm xúc lẫn lý tính của thị trường.',
      'Nghệ thuật chọn mặt bằng "Hái ra tiền": Nhận diện mỏ vàng và né tránh những tử huyệt rủi ro chí mạng.',
      'Lập Kế hoạch Đầu tư (Investment Plan) chuẩn xác: Tính toán từng đồng vốn, không để dòng tiền đứt gãy ngay từ vạch xuất phát.',
    ],
  },
  {
    id: 2,
    tab: 'Buổi 2',
    title: 'Concept to Market',
    bullets: [
      'Nghệ thuật "Tiền tệ hóa thương hiệu": Biến cái tên quán thành tài sản vô hình có khả năng sinh lời và định giá hàng triệu đô.',
      'Đóng gói Brand Concept: Tự tay xây dựng bộ nhận diện thương hiệu nhất quán, có hồn và khác biệt.',
      'Xây dựng cỗ máy Marketing: Bài toán nhân sự - Tự xây dựng đội ngũ In-house hay thuê ngoài (Agency) để tối ưu ngân sách?',
      'Lập bản đồ Marketing cho Founder: Chống lãng phí, phân bổ ngân sách sắc bén theo từng giai đoạn vòng đời dự án.',
      'Lập Kế hoạch Tài chính ngắn & trung hạn (3-12 tháng): Đảm bảo dòng máu sinh tồn và duy trì sức khỏe dòng tiền cho doanh nghiệp.',
    ],
  },
  {
    id: 3,
    tab: 'Buổi 3',
    title: 'System Governance & Financial Control',
    bullets: [
      'Tư duy Thiết kế Hệ thống (System Design Thinking): Làm sao để thiết kế một cỗ máy mà ở đó, Founder có thể biến mất 1 tháng nhưng quán vẫn chạy tốt và sinh lời?',
      'Thiết lập các "Chốt chặn" Rủi ro & Thất thoát: Không cần dạy cách nấu ăn, nhưng phải dạy cách kiểm soát định mức nguyên vật liệu (Food Cost/Beverage Cost), chống gian lận tại quầy thu ngân và kho bãi.',
      'Xây dựng Bộ máy Hậu phương (Back-Office): Tổ chức phòng Kế toán, Thu mua, và Nhân sự tinh gọn để hỗ trợ tiền tuyến (Cửa hàng) mà không phình to chi phí.',
      'Nghệ thuật Phân quyền & Cơ chế Khoán: Cách thiết lập KPI và cơ chế chia sẻ lợi nhuận (Incentive) để Cửa hàng trưởng (Store Manager) tự giác cày cuốc như chính quán của họ.',
      'Đọc vị P&L cấp độ Quản trị: Không dạy cách ghi chép sổ sách kế toán, mà dạy cách nhìn vào Bảng Lãi Lỗ để ra quyết định: Cắt giảm chi phí nào, thúc đẩy mặt hàng nào, và khi nào thì điểm bán đang "chảy máu" cần cấp cứu.',
    ],
  },
  {
    id: 4,
    tab: 'Buổi 4',
    title: 'Management to Growth',
    bullets: [
      'Kế hoạch Tài chính (Financial Plan) làm la bàn: Ứng dụng số liệu để dẫn dắt chiến lược phát triển kinh doanh.',
      'Thiết kế lộ trình Nhân chuỗi: Soi chiếu qua lăng kính của Đầu tư vốn & Thiết lập KPI tăng trưởng.',
      'Ma trận Số liệu Đa chiều: Đọc hiểu và sử dụng Kế hoạch tài chính dưới góc độ Marketing (ROI) và Gọi vốn (Funding).',
      'Đo lường "Sức khỏe" Dự án: Tiêu chí đánh giá hiệu quả kinh doanh, quyết định mở tiếp hay cắt lỗ dựa trên số liệu thực.',
      'Nhập môn Gọi vốn: Xây dựng lộ trình phát triển và từng bước nâng tầm định giá doanh nghiệp.',
    ],
  },
  {
    id: 5,
    tab: 'Buổi 5',
    title: 'Growth to Scaling Up & Diversification',
    premium: true,
    bullets: [
      'Định giá Doanh nghiệp F&B: Nắm vững các phương pháp định giá - Bạn thực sự đáng giá bao nhiêu trên bàn đàm phán?',
      'Bắt mạch Tâm lý Nhà đầu tư: Phân loại khẩu vị rủi ro và chiến lược thâu tóm tâm lý khi gọi vốn.',
      'Kiến tạo Thặng dư & Lợi tức: Nghệ thuật phát hành cổ phiếu và thiết kế chính sách cổ tức hấp dẫn dòng tiền.',
      'Tái cấu trúc Hội đồng quản trị (BOD): Vận hành doanh nghiệp chuẩn theo Cơ chế vốn.',
      'Bí mật ESOP: Dùng cổ phần trói chân nhân tài, chiêu mộ C-Level mà không tốn tiền mặt.',
      'Quy tắc sinh tồn khi Gọi vốn: Lộ trình cưa đổ Thiên thần, Quỹ VC và cách quản trị rủi ro khi đưa "cá mập" vào nhà.',
    ],
  },
  {
    id: 6,
    tab: 'Buổi 6',
    title: 'Ready to Play',
    bullets: [
      'Tổng duyệt Chân Kinh: Hệ thống hóa toàn bộ chuỗi giá trị từ Ý tưởng đến Cỗ máy sinh tiền.',
      'Sàn đấu Thực chiến (Pitching): Thuyết trình dự án thực tế, cọ xát và nhận phản biện chéo góc độ Nhà đầu tư.',
      'Đúc kết & Cố vấn Lộ trình: Nhìn lại hành trình, vạch rõ những việc cần làm ngay ngày mai.',
      'Lễ Tốt nghiệp & Kết nối Tinh hoa: Cấp chứng nhận Foodify và tiệc giao lưu, mở rộng mạng lưới quan hệ trong ngành.',
    ],
  },
]

export default function ProgramDetailSection() {
  const [activeId, setActiveId] = useState(1)
  const activeSession = sessions.find((session) => session.id === activeId) ?? sessions[0]
  const isPremium = !!activeSession.premium

  return (
    <section id="program-detail" className="py-16 md:py-24 px-4 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] tracking-[0.3em] text-silver/60 uppercase mb-4 block font-semibold">
            Nội dung chi tiết chương trình
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">Lộ trình 6 buổi học thực chiến</h2>
          <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
          <p className="text-base text-silver/60 font-light max-w-3xl mx-auto leading-relaxed">
            Mỗi buổi tập trung một bước chuyển hóa rõ ràng, giúp Founder hiểu đúng bài toán và áp dụng ngay vào doanh nghiệp.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {sessions.map((session) => {
            const active = session.id === activeId
            return (
              <button
                key={session.id}
                onClick={() => setActiveId(session.id)}
                className={`px-5 md:px-7 py-3 rounded-xl text-xl md:text-2xl font-sans font-semibold transition-all duration-300 border ${
                  active
                    ? session.premium
                      ? 'bg-emerald-300/20 border-emerald-300/30 text-emerald-100 shadow-[0_0_22px_rgba(16,185,129,0.18)]'
                      : 'bg-white/15 border-white/25 text-white'
                    : session.premium
                    ? 'bg-emerald-950/35 border-emerald-700/40 text-emerald-200/80 hover:bg-emerald-900/40'
                    : 'bg-white/[0.03] border-white/15 text-silver/80 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {session.tab}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeSession.id}
            initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className={`rounded-2xl border overflow-hidden backdrop-blur-sm ${
              isPremium
                ? 'border-emerald-300/30 bg-gradient-to-b from-emerald-800/45 via-emerald-900/40 to-emerald-950/50'
                : 'border-white/10 bg-black/35'
            }`}
          >
            <div
              className={`p-6 md:p-7 border-b ${
                isPremium
                  ? 'border-emerald-200/30 bg-gradient-to-r from-emerald-500/25 to-transparent'
                  : 'border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border w-fit ${
                    isPremium ? 'border-emerald-200/35 bg-emerald-100/10 text-emerald-50' : 'border-white/15 bg-white/5 text-white/80'
                  }`}
                >
                  {isPremium ? <Crown className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                  <span className="text-[11px] tracking-wider uppercase font-semibold">{activeSession.tab}</span>
                </div>
                {isPremium && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200/35 bg-emerald-100/10 text-[11px] tracking-wider uppercase text-emerald-50 font-semibold">
                    <CircleUserRound className="w-3.5 h-3.5" />
                    Gói mở rộng Private Coaching
                  </div>
                )}
              </div>

              <motion.h3
                key={`${activeSession.id}-title`}
                initial={{ opacity: 0, y: 10, letterSpacing: '0.02em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '0.01em' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className={`text-3xl md:text-4xl font-sans font-semibold leading-snug mb-2 text-center ${
                  isPremium ? 'text-lime-200 drop-shadow-[0_0_18px_rgba(187,247,208,0.28)]' : 'text-[#d8b36a]'
                }`}
              >
                {activeSession.title}
              </motion.h3>
            </div>

            <div className="p-6 md:p-8">
              <ul className="max-w-4xl mx-auto space-y-3">
                {activeSession.bullets.map((item) => (
                  <li
                    key={item}
                    className={`text-base md:text-[18px] font-light leading-relaxed flex items-start gap-3 ${
                      isPremium ? 'text-emerald-50/95' : 'text-silver/80'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full mt-3 shrink-0 ${isPremium ? 'bg-lime-200/90' : 'bg-white/70'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}
