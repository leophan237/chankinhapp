import type { Metadata } from 'next'
import AllinFnBClient from './AllinFnBClient'

export const metadata: Metadata = {
  title: 'All-in F&B — Khóa Huấn Luyện Toàn Diện Cho Founder Ngành F&B | Foodify × Chân Kinh',
  description: 'Khóa học 18 giờ giúp Founder F&B nắm vững 4 trụ cột: Tài chính, Marketing, Kinh doanh, Quản trị. Từ Ideation đến Scaling Up. Chỉ 10 suất Early Bird.',
  keywords: ['khóa học F&B', 'kinh doanh F&B', 'startup F&B', 'Foodify', 'Chân Kinh', 'All-in F&B', 'founder F&B', 'khởi nghiệp ẩm thực'],
  openGraph: {
    title: 'All-in F&B — Khóa Huấn Luyện Toàn Diện Cho Founder Ngành F&B',
    description: 'Nắm vững 4 trụ cột kinh doanh F&B trong 18 giờ. Từ Ideation → Scaling Up. Chỉ 10 suất Early Bird.',
    type: 'website',
  },
}

export default function AllinFnBPage() {
  return <AllinFnBClient />
}
