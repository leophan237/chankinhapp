'use client'
import React from 'react'
import { motion } from 'framer-motion'

import { Package, Sparkles, Star, Scroll, Key, Award, FileSearch, Compass, ShoppingBag, Cpu, Coins, UtensilsCrossed } from 'lucide-react'
import SpotlightCone from '@/components/ui/SpotlightCone'
import ArtifactCard from '@/components/ui/ArtifactCard'
import AcquisitionModal from '@/components/ui/AcquisitionModal'

const artifacts = [
  {
    id: 1,
    name: 'Chân Kinh Ecom',
    vietnameseName: 'Giải Pháp Thương Mại Tỉnh Thức',
    description: 'Khai mở dòng chảy giao thương trong sự tỉnh thức, biến mỗi giao dịch thành một duyên lành kết nối giữa người bán và người mua.',
    details: ['Retail Zen', 'Conscious Trade', 'Flow-Analytics'],
    category: 'SOLUTION',
    status: 'Available',
    year: '2024',
    icon: ShoppingBag,
    price: '45,000,000 VND / Setup',
    terms: [
      'Cam kết minh bạch hoàn toàn về nguồn gốc và chất lượng sản phẩm.',
      'Tối ưu hóa trải nghiệm khách hàng dựa trên sự tôn trọng và thấu hiểu.',
      'Không sử dụng các thủ thuật thao túng tâm lý tiêu dùng.',
      'Chia sẻ một phần lợi nhuận cho các hoạt động bảo tồn văn hóa.'
    ]
  },
  {
    id: 2,
    name: 'Chân Kinh AI',
    vietnameseName: 'Chuyển Hóa Trí Tuệ Nhân Tạo',
    description: 'Khi thuật toán gặp gỡ ánh sáng trí tuệ, AI không chỉ là công cụ hiệu suất mà là người đồng hành trong sự tiến hóa của nhận thức tổ chức.',
    details: ['Mindful AI', 'Neural Zen', 'Ethical Tech'],
    category: 'TECH',
    status: 'Available',
    year: '2025',
    icon: Cpu,
    price: 'Contact for Integration',
    terms: [
      'Dữ liệu được quản trị với tiêu chuẩn đạo đức và bảo mật cao nhất.',
      'Sử dụng AI để giải phóng con người khỏi những công việc lặp lại vô nghĩa.',
      'Luôn giữ "tính người" và "sự thấu cảm" làm trọng tâm của mọi mô hình.',
      'Kiểm định định kỳ về tác động của thuật toán đối với sức khỏe tâm thần người dùng.'
    ]
  },
  {
    id: 3,
    name: 'Chân Kinh Capital',
    vietnameseName: 'Nguồn Lực Tài Chính Từ Bi',
    description: 'Dòng chảy tài chính được dẫn dắt bởi tâm từ, tạo nên sức mạnh chuyển hóa cho những dự án mang lại giá trị thực cho cộng đồng.',
    details: ['Compassion ROI', 'Impact Funding', 'Soul-Growth'],
    category: 'CAPITAL',
    status: 'Sealed',
    year: '2023',
    icon: Coins,
    price: 'Endowment Basis',
    terms: [
      'Nhà đầu tư phải thấu triệt triết lý kinh doanh nhân văn của Chân Kinh.',
      'Ưu tiên các dự án có tác động tích cực đến môi trường và giáo dục.',
      'Chấp nhận lộ trình phát triển bền vững thay vì lợi nhuận nóng.',
      'Tính minh bạch tài chính được giám sát bởi cộng đồng Curator.'
    ]
  },
  {
    id: 4,
    name: 'Chân Kinh F&B',
    vietnameseName: 'Hệ Sinh Thái Ẩm Thực Toàn Diện',
    description: 'Nơi hương vị chạm đến linh hồn, mỗi bữa ăn là một thực hành chánh niệm, nuôi dưỡng thân tâm trong sự hòa hợp tuyệt đối.',
    details: ['Zen Dining', 'Pure Source', 'Culinary Art'],
    category: 'LIFESTYLE',
    status: 'Available',
    year: '2024',
    icon: UtensilsCrossed,
    price: '120,000,000 VND / License',
    terms: [
      'Nguồn nguyên liệu phải đạt chuẩn thuần khiết và canh tác tự nhiên.',
      'Đội ngũ phục vụ được đào tạo về thực hành chánh niệm và tận tâm.',
      'Không gian thiết kế tối giản, hỗ trợ sự tĩnh lặng và thưởng thức.',
      'Mỗi thực đơn đều được tính toán để cân bằng năng lượng và sức khỏe.'
    ]
  },
]

export default function KinhBoPage() {
  const [selectedArtifact, setSelectedArtifact] = React.useState<typeof artifacts[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const handleAcquire = (artifact: typeof artifacts[0]) => {
    setSelectedArtifact(artifact)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen museum-void relative overflow-x-hidden pt-12 md:pt-20 pb-64">
      {/* Global Ambient Fog */}
      <div className="fixed inset-x-0 bottom-0 h-[40vh] ambient-fog pointer-events-none z-20" />

      {/* Header Area */}
      <header className="max-w-4xl mx-auto px-6 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="w-12 h-12 mx-auto mb-6 rounded-full border border-silver/20 flex items-center justify-center bg-card/30 backdrop-blur-sm">
            <Package className="w-6 h-6 text-silver/60" />
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-gradient-silver mb-4">
            Kinh Bộ
          </h1>
          <div className="space-y-4">
            <p className="text-base md:text-lg text-muted-foreground font-sans font-light tracking-[0.3em] uppercase">
              The Artifact Gallery
            </p>
            <p className="text-xs md:text-sm text-[#c5a059] font-sans italic opacity-70">
              "Mọi dịch vụ là một pháp môn, mọi sản phẩm là một duyên lành."
            </p>
          </div>
        </motion.div>
      </header>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {artifacts.map((artifact, index) => (
          <motion.section
            key={artifact.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: index * 0.1 }}
            className="relative"
          >
            <SpotlightCone>
              <ArtifactCard
                {...artifact}
                onAcquire={() => handleAcquire(artifact)}
              />
            </SpotlightCone>
          </motion.section>
        ))}
      </div>

      {/* Acquisition Ritual Modal */}
      {selectedArtifact && (
        <AcquisitionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          artifact={selectedArtifact}
        />
      )}
    </div>
  )
}
