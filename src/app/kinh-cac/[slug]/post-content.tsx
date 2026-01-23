'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Book, 
  Clock, 
  Calendar, 
  Share2, 
  ThumbsUp, 
  Bookmark, 
  MessageCircle,
  Box, 
  Droplets, 
  Flame, 
  Wind, 
  Sparkles,
  MoreHorizontal,
  ChevronRight,
  Hash
} from 'lucide-react'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  content?: any[]
  excerpt?: string
  category: 'earth' | 'water' | 'fire' | 'air' | 'void'
  publishedAt?: string
  readTime?: number
  element?: string
  tags?: string[]
}

// Mock data for demo posts - all 15 posts
const mockPosts: Record<string, Post> = {
  'xay-dung-cau-truc-phap-ly': {
    _id: 'earth-1',
    title: 'Xây Dựng Cấu Trúc Pháp Lý Ngay Từ Ngày Đầu (Day 1 XCAP)',
    slug: { current: 'xay-dung-cau-truc-phap-ly' },
    excerpt: 'Không có kỹ thuật nào hiệu quả nếu thế đứng không vững. Cấu trúc pháp lý Holdings, SPV và mô hình kinh doanh chuẩn chỉnh là nền tảng bắt buộc.',
    category: 'earth',
    element: 'earth',
    publishedAt: '2025-01-15T00:00:00Z',
    readTime: 8,
    tags: ['Day 1 XCAP', 'Pháp lý', 'Holdco', 'SPV'],
    content: [
      {
        _type: 'heading',
        _key: 'heading1',
        level: 1,
        text: 'Nguyên tắc cơ bản'
      },
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Trong kinh doanh, có một nguyên tắc bất biến: nền tảng phải vững chắc. Nếu không có cấu trúc pháp lý chặt chẽ, mọi kỹ thuật kinh doanh, mọi chiến lược marketing, mọi tài năng nhân sự đều vô nghĩa.'
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: ' Không có kỹ thuật nào hiệu quả nếu thế đứng không vững.'
          }
        ]
      },
      {
        _type: 'heading',
        _key: 'heading2',
        level: 2,
        text: 'Day 1 XCAP'
      },
      {
        _type: 'block',
        _key: 'day1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Day 1 của XCAP (Xây Dựng Chân Kinh) bắt đầu từ đây: thiết lập cấu trúc pháp lý đúng ngay từ ngày đầu tiên.'
          }
        ]
      },
      {
        _type: 'callout',
        _key: 'callout1',
        tone: 'info',
        emoji: '📋',
        title: 'Ba thành phần pháp lý cốt lõi',
        content: [
          {
            _type: 'list',
            style: 'bullet',
            children: [
              {
                _type: 'listItem',
                text: 'Holdings: Là công ty mẹ nắm giữ các đơn vị kinh doanh riêng biệt'
              },
              {
                _type: 'listItem',
                text: 'SPV (Special Purpose Vehicle): Công ty đặc mục đích cho từng dự án/vertical'
              },
              {
                _type: 'listItem',
                text: 'Mô hình kinh doanh chuẩn: SOPS, quy trình, hệ thống'
              }
            ]
          }
        ]
      },
      {
        _type: 'callout',
        _key: 'warning',
        tone: 'warning',
        emoji: '⚠️',
        title: 'Lưu ý quan trọng',
        content: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: 'Nếu "Địa" không vững (pháp lý lỏng lẻo), doanh nghiệp sẽ sụp đổ khi quy mô tăng. Lịch sử đã chứng minh điều này nhiều lần.'
              }
            ]
          }
        ]
      },
      {
        _type: 'heading',
        _key: 'heading3',
        level: 2,
        text: 'Kết luận'
      },
      {
        _type: 'quote',
        _key: 'quote1',
        style: 'highlighted',
        text: 'Cấu trúc pháp lý đúng là nền tảng để scale. Đừng tiếc thời gian và chi phí cho bước này.'
      }
    ]
  },
  'nguyen-tac-vung-chac': {
    _id: 'earth-2',
    title: 'Nguyên Tắc Vững Chắc: Khi Pháp Lý Lỏng Lẻo, Doanh Nghiệp Sập Đổ',
    slug: { current: 'nguyen-tac-vung-chac' },
    excerpt: 'Lịch sử đã chứng minh: doanh nghiệp có cấu trúc pháp lý yếu kém sẽ sụp đổ khi quy mô tăng. Bài học từ những thất bại đắt giá.',
    category: 'earth',
    element: 'earth',
    publishedAt: '2025-01-10T00:00:00Z',
    readTime: 7,
    tags: ['Pháp lý', 'Cấu trúc doanh nghiệp'],
    content: [
      {
        _type: 'heading',
        level: 1,
        text: 'Cảnh báo từ thực tế'
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Lịch sử đã chứng minh: doanh nghiệp có cấu trúc pháp lý yếu kém sẽ sụp đổ khi quy mô tăng. Bài học từ những thất bại đắt giá.'
          }
        ]
      },
      {
        _type: 'callout',
        tone: 'warning',
        emoji: '⚠️',
        title: 'Bài học từ thất bại',
        content: [
          {
            _type: 'list',
            style: 'bullet',
            children: [
              { _type: 'listItem', text: 'Cấu trúc pháp lý lỏng lẻo dẫn đến rủi ro cao khi scale' },
              { _type: 'listItem', text: 'Thiếu sự tách biệt giữa các vertical khiến rủi ro lan rộng' },
              { _type: 'listItem', text: 'Bảo vệ nhà đầu tư không đầy đủ' }
            ]
          }
        ]
      }
    ]
  },
  'holdco-spc-chieu-luoc': {
    _id: 'earth-3',
    title: 'Mô Hình Holdco-SPC: Chiến Lược Tối Ưu Cho Venture Studio',
    slug: { current: 'holdco-spc-chieu-luoc' },
    excerpt: 'Cách thiết kế cấu trúc công ty để bảo vệ nhà đầu tư, tối ưu thuế, và tạo điều kiện mở rộng linh hoạt cho từng vertical.',
    category: 'earth',
    element: 'earth',
    publishedAt: '2025-01-05T00:00:00Z',
    readTime: 9,
    tags: ['Holdco', 'SPV', 'Venture Studio'],
    content: [
      {
        _type: 'heading',
        level: 1,
        text: 'Cấu trúc Holdco-SPV'
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Cách thiết kế cấu trúc công ty để bảo vệ nhà đầu tư, tối ưu thuế, và tạo điều kiện mở rộng linh hoạt cho từng vertical.'
          }
        ]
      },
      {
        _type: 'heading',
        level: 2,
        text: 'Lợi ích của mô hình'
      },
      {
        _type: 'list',
        style: 'bullet',
        children: [
          { _type: 'listItem', text: 'Bảo vệ rủi ro: Mỗi SPV chịu trách nhiệm riêng' },
          { _type: 'listItem', text: 'Tối ưu thuế: Chuyển giá giữa các entity' },
          { _type: 'listItem', text: 'Dễ scale: Thêm SPV mới cho từng vertical' }
        ]
      }
    ]
  },
  'tam-chien-binh-nhu-nuoc': {
    _id: 'water-1',
    title: 'Tâm Chiến Binh Như Nước: Linh Hoạt, Phản Chiếu, Không Dính Mắc',
    slug: { current: 'tam-chien-binh-nhu-nuoc' },
    excerpt: 'Nước tùy vật mà định hình. Trong kinh doanh, khả năng thích nghi và xoay trục nhanh hơn đối thủ là chiến lược sống còn.',
    category: 'water',
    element: 'water',
    publishedAt: '2025-01-18T00:00:00Z',
    readTime: 6,
    tags: ['Tâm chiến binh', 'Linh hoạt', 'Pivot'],
    content: [
      {
        _type: 'heading',
        _key: 'heading1',
        level: 1,
        text: 'Triết lý của nước'
      },
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Trong Tôn Tử nói về nước: '
          },
          {
            _type: 'span',
            marks: ['em'],
            text: '"Thượng thiện như nước."'
          },
          {
            _type: 'span',
            marks: [],
            text: ' Nước là tấm gương hoàn hảo của linh hoạt trong kinh doanh.'
          }
        ]
      },
      {
        _type: 'heading',
        _key: 'heading2',
        level: 2,
        text: 'Nguyên tắc linh hoạt'
      },
      {
        _type: 'quote',
        _key: 'quote1',
        style: 'highlighted',
        text: 'Tâm chiến binh phải như nước, phản chiếu tất cả nhưng không bị dính mắc.',
        attribution: 'Nguyên tắc linh hoạt'
      }
    ]
  },
  'quan-tri-dong-tien-linh-hoat': {
    _id: 'water-2',
    title: 'Quản Trị Dòng Tiền Linh Hoạt Khi Thị Trường Đóng Băng',
    slug: { current: 'quan-tri-dong-tien-linh-hoat' },
    excerpt: 'Khi BĐS đóng băng, dòng vốn phải chảy. Chiến lược pivot từ bất động sản sang dịch vụ và sản xuất để duy trì cash flow.',
    category: 'water',
    element: 'water',
    publishedAt: '2025-01-12T00:00:00Z',
    readTime: 8,
    tags: ['Dòng tiền', 'Pivot', 'Cash flow'],
    content: [
      {
        _type: 'heading',
        level: 1,
        text: 'Quản trị dòng tiền linh hoạt'
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Khi BĐS đóng băng, dòng vốn phải chảy. Chiến lược pivot từ bất động sản sang dịch vụ và sản xuất để duy trì cash flow.'
          }
        ]
      },
      {
        _type: 'callout',
        tone: 'info',
        emoji: '💰',
        title: 'Chiến lược dòng tiền',
        content: [
          {
            _type: 'list',
            style: 'bullet',
            children: [
              { _type: 'listItem', text: 'Đa dạng hóa nguồn thu' },
              { _type: 'listItem', text: 'Tối ưu vòng quay vốn' },
              { _type: 'listItem', text: 'Giảm phụ thuộc vào single vertical' }
            ]
          }
        ]
      }
    ]
  },
  'khong-co-chap-kiem-tien': {
    _id: 'water-3',
    title: 'Không Cố Chấp Với Một Phương Thức Kiếm Tiền',
    slug: { current: 'khong-co-chap-kiem-tien' },
    excerpt: 'Doanh nghiệp bền vững hiểu rằng kiếm tiền có nhiều cách. Đa dạng hóa nguồn thu và linh hoạt trong chiến lược doanh thu.',
    category: 'water',
    element: 'water',
    publishedAt: '2025-01-08T00:00:00Z',
    readTime: 5,
    tags: ['Doanh thu', 'Đa dạng hóa'],
    content: [
      {
        _type: 'heading',
        level: 1,
        text: 'Đa dạng hóa doanh thu'
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Doanh nghiệp bền vững hiểu rằng kiếm tiền có nhiều cách. Đa dạng hóa nguồn thu và linh hoạt trong chiến lược doanh thu.'
          }
        ]
      },
      {
        _type: 'heading',
        level: 2,
        text: 'Các phương thức kiếm tiền'
      },
      {
        _type: 'list',
        style: 'bullet',
        children: [
          { _type: 'listItem', text: 'Sản phẩm: Bán hàng vật lý/digital' },
          { _type: 'listItem', text: 'Dịch vụ: Tư vấn, triển khai' },
          { _type: 'listItem', text: 'Platform: Kết nối người mua người bán' },
          { _type: 'listItem', text: 'Data: Bán dữ liệu, insights' }
        ]
      }
    ]
  },
  'go-to-market-aggressive': {
    _id: 'fire-1',
    title: 'Chiến Lược Chiếm Lĩnh Thị Trường: Go-to-Market Aggressive',
    slug: { current: 'go-to-market-aggressive' },
    excerpt: 'Tấn công vào điểm yếu của đối thủ. Sử dụng đòn bẩy marketing để bùng nổ doanh số và định vị thương hiệu ngay từ đầu (Day 2 XCAP).',
    category: 'fire',
    element: 'fire',
    publishedAt: '2025-01-20T00:00:00Z',
    readTime: 7,
    tags: ['Go-to-market', 'Marketing', 'Day 2 XCAP'],
    content: [
      {
        _type: 'heading',
        _key: 'heading1',
        level: 1,
        text: 'Tư duy chiến đấu'
      },
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Chiến đấu là phải thắng. Trong kinh doanh, điều đó có nghĩa là '
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'chiếm lĩnh thị trường nhanh hơn đối thủ.'
          }
        ]
      },
      {
        _type: 'heading',
        _key: 'heading2',
        level: 2,
        text: 'Chiến lược Go-to-market'
      },
      {
        _type: 'quote',
        _key: 'quote1',
        style: 'highlighted',
        text: 'Tấn công vào điểm yếu của đối thủ. Sử dụng các đòn bẩy marketing để bùng nổ doanh số và định vị thương hiệu.',
        attribution: 'Chiến lược go-to-market'
      },
      {
        _type: 'callout',
        _key: 'callout1',
        tone: 'important',
        emoji: '🎯',
        title: 'Day 2 XCAP',
        content: [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                marks: [],
                text: 'Sau khi xây dựng nền tảng pháp lý, ngay lập tức triển khai chiến lược chiếm lĩnh thị trường.'
              }
            ]
          }
        ]
      }
    ]
  },
  'tam-nhin-quyet-liet': {
    _id: 'fire-2',
    title: 'Tầm Nhìn Quyết Liệt: Khi Chiến Đấu Là Phải Thắng',
    slug: { current: 'tam-nhin-quyet-liet' },
    excerpt: 'Trong kinh doanh, quyết liệt không phải là hung hăng. Đó là sự dám ra quyết định khó, chấp nhận rủi ro tính toán để đạt mục tiêu.',
    category: 'fire',
    element: 'fire',
    publishedAt: '2025-01-16T00:00:00Z',
    readTime: 6,
    tags: ['Quyết liệt', 'Ra quyết định'],
    content: [
      {
        _type: 'heading',
        level: 1,
        text: 'Tầm nhìn quyết liệt'
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Trong kinh doanh, quyết liệt không phải là hung hăng. Đó là sự dám ra quyết định khó, chấp nhận rủi ro tính toán để đạt mục tiêu.'
          }
        ]
      },
      {
        _type: 'heading',
        level: 2,
        text: 'Quyết định khó'
      },
      {
        _type: 'callout',
        tone: 'warning',
        emoji: '⚡',
        title: 'Ví dụ quyết định khó',
        content: [
          {
            _type: 'list',
            style: 'bullet',
            children: [
              { _type: 'listItem', text: 'Từ bỏ direction không còn phù hợp' },
              { _type: 'listItem', text: 'Cắt lỗ khi thấy không có tương lai' },
              { _type: 'listItem', text: 'Chấp nhận mất ngắn hạn để thắng dài hạn' }
            ]
          }
        ]
      }
    ]
  },
  'don-bay-marketing': {
    _id: 'fire-3',
    title: 'Đòn Bẩy Marketing: Tối Ưu ROI Để Bùng Nổ Doanh Số',
    slug: { current: 'don-bay-marketing' },
    excerpt: 'Chiến thuật tạo hiệu ứng nổ đom đóm: bắt đầu nhỏ, tìm traction, scale nhanh. Quy trình bootstrapping marketing budget.',
    category: 'fire',
    element: 'fire',
    publishedAt: '2025-01-11T00:00:00Z',
    readTime: 8,
    tags: ['Marketing', 'ROI', 'Scale'],
    content: [
      {
        _type: 'heading',
        level: 1,
        text: 'Đòn bẩy marketing'
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Chiến thuật tạo hiệu ứng nổ đom đóm: bắt đầu nhỏ, tìm traction, scale nhanh. Quy trình bootstrapping marketing budget.'
          }
        ]
      },
      {
        _type: 'heading',
        level: 2,
        text: 'Quy trình tối ưu ROI'
      },
      {
        _type: 'list',
        style: 'numbered',
        children: [
          { _type: 'listItem', text: 'Bắt đầu nhỏ: Test MVP' },
          { _type: 'listItem', text: 'Tìm traction: Phân tích dữ liệu' },
          { _type: 'listItem', text: 'Scale nhanh: Tăng budget khi có kết quả' }
        ]
      }
    ]
  },
  'hieu-phong-cach-truong-phai': {
    _id: 'air-1',
    title: 'Hiểu Phong Cách Các Trường Phái Khác Để Khắc Chế',
    slug: { current: 'hieu-phong-cach-truong-phai' },
    excerpt: 'Biết phong cách của đối thủ để khắc chế. Đối thủ cồng kềnh chậm chạp thì dùng tốc độ; đối thủ nhanh hung hăng thì dùng chiều sâu.',
    category: 'air',
    element: 'air',
    publishedAt: '2025-01-22T00:00:00Z',
    readTime: 9,
    tags: ['Cạnh tranh', 'M&A', 'Venture Studio'],
    content: [
      {
        _type: 'heading',
        _key: 'heading1',
        level: 1,
        text: 'Tư duy cạnh tranh'
      },
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Trong võ thuật, mỗi trường phái đều có phong cách riêng. Trong kinh doanh cũng vậy. '
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Hiểu phong cách đối thủ để biết cách khắc chế.'
          }
        ]
      },
      {
        _type: 'heading',
        _key: 'heading2',
        level: 2,
        text: 'Phân tích đối thủ'
      },
      {
        _type: 'quote',
        _key: 'quote1',
        style: 'highlighted',
        text: 'Hiểu rõ điểm yếu của các đối thủ truyền thống (cồng kềnh, chậm chạp) để sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) mà thâu tóm hoặc vượt mặt.',
        attribution: 'Chiến lược cạnh tranh'
      }
    ]
  },
  'ma-chien-thuat': {
    _id: 'air-2',
    title: 'M&A Chiến Thuật: Thâu Tóm Hoặc Vượt Mặt Đối Thủ',
    slug: { current: 'ma-chien-thuat' },
    excerpt: 'Sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) để thâu tóm hoặc vượt mặt các đối thủ truyền thống.',
    category: 'air',
    element: 'air',
    publishedAt: '2025-01-19T00:00:00Z',
    readTime: 7,
    tags: ['M&A', 'Thâu tóm', 'Venture Studio'],
    content: [
      {
        _type: 'heading',
        level: 1,
        text: 'M&A chiến thuật'
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) để thâu tóm hoặc vượt mặt các đối thủ truyền thống.'
          }
        ]
      },
      {
        _type: 'heading',
        level: 2,
        text: 'Chiến thuật thâu tóm'
      },
      {
        _type: 'callout',
        tone: 'info',
        emoji: '🎯',
        title: 'Các chiến thuật',
        content: [
          {
            _type: 'list',
            style: 'bullet',
            children: [
              { _type: 'listItem', text: 'Thâu tóm khi đối thủ suy yếu' },
              { _type: 'listItem', text: 'Vượt mặt bằng speed execution' },
              { _type: 'listItem', text: 'Tạo thị trường mới (blue ocean)' }
            ]
          }
        ]
      }
    ]
  },
  'chien-luoc-kac-che': {
    _id: 'air-3',
    title: 'Chiến Lược Khắc Chế: Tìm Điểm Yếu Của Đối Thủ',
    slug: { current: 'chien-luoc-kac-che' },
    excerpt: 'Mỗi đối thủ đều có điểm yếu. Phân tích thị trường, hiểu mô hình kinh doanh, và tấn công vào chỗ yếu nhất.',
    category: 'air',
    element: 'air',
    publishedAt: '2025-01-14T00:00:00Z',
    readTime: 6,
    tags: ['Cạnh tranh', 'Phân tích đối thủ'],
    content: [
      {
        _type: 'heading',
        level: 1,
        text: 'Tìm điểm yếu đối thủ'
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Mỗi đối thủ đều có điểm yếu. Phân tích thị trường, hiểu mô hình kinh doanh, và tấn công vào chỗ yếu nhất.'
          }
        ]
      },
      {
        _type: 'heading',
        level: 2,
        text: 'Cách phân tích'
      },
      {
        _type: 'list',
        style: 'bullet',
        children: [
          { _type: 'listItem', text: 'Phân tích sản phẩm: Điểm mạnh/yếu' },
          { _type: 'listItem', text: 'Phân tích dịch vụ: Gap trong thị trường' },
          { _type: 'listItem', text: 'Phân tích tài chính: Điểm yếu trong cấu trúc' }
        ]
      }
    ]
  },
  'biet-cai-co-de-thay-cai-khong': {
    _id: 'void-1',
    title: 'Biết Cái Có Để Thấy Cái Không: Triết Lý Giá Trị',
    slug: { current: 'biet-cai-co-de-thay-cai-khong' },
    excerpt: 'Đỉnh cao là sự giác ngộ về bản chất vô tướng. Giá trị doanh nghiệp không nằm ở nhà xưởng hữu hình mà ở thương hiệu, dữ liệu, kỳ vọng.',
    category: 'void',
    element: 'void',
    publishedAt: '2025-01-25T00:00:00Z',
    readTime: 10,
    tags: ['Giá trị', 'Tài sản vô hình', 'Triết lý'],
    content: [
      {
        _type: 'heading',
        _key: 'heading1',
        level: 1,
        text: 'Triết lý vô hình'
      },
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Trong Phật giáo có câu: '
          },
          {
            _type: 'span',
            marks: ['em'],
            text: '"Biết cái có để thấy cái không."'
          },
          {
            _type: 'span',
            marks: [],
            text: ' Đỉnh cao của triết lý Chân Kinh là sự giác ngộ về bản chất vô tướng.'
          }
        ]
      },
      {
        _type: 'heading',
        _key: 'heading2',
        level: 2,
        text: 'Tài sản vô hình'
      },
      {
        _type: 'quote',
        _key: 'quote1',
        style: 'highlighted',
        text: 'Giá trị lớn nhất của doanh nghiệp không nằm ở nhà xưởng (Hữu hình) mà nằm ở Thương hiệu, Dữ liệu, và Kỳ vọng tương lai (Vô hình).',
        attribution: 'Triết lý giá trị'
      }
    ]
  },
  'tai-san-vo-hinh': {
    _id: 'void-2',
    title: 'Tài Sản Vô Hình: Khoảng Không Kiếm Tiền Của Nhà Tư Bản',
    slug: { current: 'tai-san-vo-hinh' },
    excerpt: 'Nhà tư bản kiếm tiền từ "Khoảng Không" thông qua P/E ratio, Goodwill. Tại sao Amazon đáng giá hơn nhiều tổng tài sản hữu hình?',
    category: 'void',
    element: 'void',
    publishedAt: '2025-01-21T00:00:00Z',
    readTime: 8,
    tags: ['Tài sản vô hình', 'P/E Ratio'],
    content: [
      {
        _type: 'heading',
        level: 1,
        text: 'Khoảng không kiếm tiền'
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Nhà tư bản kiếm tiền từ "Khoảng Không" thông qua P/E ratio, Goodwill. Tại sao Amazon đáng giá hơn nhiều tổng tài sản hữu hình?'
          }
        ]
      },
      {
        _type: 'heading',
        level: 2,
        text: 'Ví dụ thực tế'
      },
      {
        _type: 'callout',
        tone: 'info',
        emoji: '💰',
        title: 'Amazon vs Công ty sản xuất',
        content: [
          {
            _type: 'list',
            style: 'bullet',
            children: [
              { _type: 'listItem', text: 'Amazon: P/E cao, giá trị chủ yếu từ brand & data' },
              { _type: 'listItem', text: 'Công ty sản xuất: P/E thấp, giá trị chủ yếu từ nhà xưởng & máy móc' }
            ]
          }
        ]
      }
    ]
  },
  'pe-ratio-nghe-thuat-gia-tri': {
    _id: 'void-3',
    title: 'P/E Ratio: Nghệ Thuật Tạo Giá Trị Từ Không',
    slug: { current: 'pe-ratio-nghe-thuat-gia-tri' },
    excerpt: 'Hiểu cách thị trường định giá doanh nghiệp. Chiến thuật tăng kỳ vọng tương lai để nâng P/E mà không cần tăng lợi nhuận thực tế ngay.',
    category: 'void',
    element: 'void',
    publishedAt: '2025-01-17T00:00:00Z',
    readTime: 7,
    tags: ['P/E Ratio', 'Định giá'],
    content: [
      {
        _type: 'heading',
        level: 1,
        text: 'P/E Ratio: Định giá tương lai'
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Hiểu cách thị trường định giá doanh nghiệp. Chiến thuật tăng kỳ vọng tương lai để nâng P/E mà không cần tăng lợi nhuận thực tế ngay.'
          }
        ]
      },
      {
        _type: 'heading',
        level: 2,
        text: 'Cách tăng P/E'
      },
      {
        _type: 'list',
        style: 'bullet',
        children: [
          { _type: 'listItem', text: 'Xây dựng brand equity' },
          { _type: 'listItem', text: 'Tạo story hấp dẫn cho investors' },
          { _type: 'listItem', text: 'Hiển thị traction & growth potential' },
          { _type: 'listItem', text: 'TAM, SAM, SOM market analysis' }
        ]
      }
    ]
  }
}

const elementConfig = {
  earth: { name: 'Đất', icon: Box, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20', hover: 'hover:bg-amber-500/15' },
  water: { name: 'Nước', icon: Droplets, color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', hover: 'hover:bg-cyan-500/15' },
  fire: { name: 'Lửa', icon: Flame, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', hover: 'hover:bg-red-500/15' },
  air: { name: 'Khí', icon: Wind, color: 'text-slate-400', bg: 'bg-slate-500/10', border: 'border-slate-500/20', hover: 'hover:bg-slate-500/15' },
  void: { name: 'Không', icon: Sparkles, color: 'text-violet-500', bg: 'bg-violet-500/10', border: 'border-violet-500/20', hover: 'hover:bg-violet-500/15' },
}

interface TableOfContentsItem {
  id: string
  text: string
  level: number
}

export default function PostPageContent({ slug }: { slug: string }) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeHeading, setActiveHeading] = useState<string>('')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/posts?slug=${slug}`)
        const data = await response.json()

        if (data.posts && data.posts.length > 0) {
          setPost(data.posts[0])
        } else {
          const mockPost = mockPosts[slug]
          if (mockPost) {
            setPost(mockPost)
          } else {
            setError('Không tìm thấy bài viết.')
          }
        }
      } catch (err) {
        console.error('Error fetching post:', err)
        const mockPost = mockPosts[slug]
        if (mockPost) {
          setPost(mockPost)
        } else {
          setError('Không thể tải bài viết.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setReadingProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active heading
  useEffect(() => {
    const headings = contentRef.current?.querySelectorAll('h2, h3') || []
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0% -80% 0%',
        threshold: 0
      }
    )

    headings.forEach((heading) => {
      observer.observe(heading)
    })

    return () => observer.disconnect()
  }, [post])

  // Build table of contents
  const tableOfContents: TableOfContentsItem[] = post?.content
    ?.filter(block => block._type === 'heading')
    .map((block, index) => ({
      id: `heading-${index}`,
      text: block.text,
      level: block.level || 1
    })) || []

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 animate-spin border-t-gray-900" />
          <p className="text-gray-500 font-light">Đang tải...</p>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Book className="w-20 h-20 mx-auto mb-6 text-gray-300" />
          <h1 className="text-3xl font-semibold mb-4 text-gray-900">
            Không tìm thấy bài viết
          </h1>
          <p className="text-gray-500 font-light mb-8">
            {error || 'Bài viết này không tồn tại hoặc đã bị xóa.'}
          </p>
          <Link href="/kinh-cac">
            <button className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors font-light text-gray-700">
              Quay lại thư viện
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const config = elementConfig[post.category as keyof typeof elementConfig]

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <motion.div
          className="h-full bg-gray-900"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/kinh-cac">
                <motion.button
                  whileHover={{ x: -3 }}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-light text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Quay lại</span>
                </motion.button>
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-400 text-sm font-light">{config.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Share2 className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-12">
          {/* Table of Contents - Sidebar */}
          {tableOfContents.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Nội dung
                </h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToHeading(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-light transition-colors ${
                        activeHeading === item.id
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      } ${item.level === 3 ? 'pl-6' : ''}`}
                    >
                      <span className="flex items-center gap-2">
                        {activeHeading === item.id && (
                          <Hash className="w-3 h-3" />
                        )}
                        <span className="truncate">{item.text}</span>
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div ref={contentRef} className="max-w-3xl">
              {/* Article Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 font-light">
                  <Link href="/kinh-cac" className="hover:text-gray-600 transition-colors">
                    Kinh Các
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className={config.color}>{config.name}</span>
                </div>

                {/* Element Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${config.bg} ${config.border}`}>
                    <config.icon className={`w-4 h-4 ${config.color}`} />
                    <span className={`text-sm font-semibold ${config.color}`}>{config.name}</span>
                  </div>
                  {post.tags && post.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-gray-100 text-sm text-gray-600 font-light">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                  {post.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm font-light">
                  {post.publishedAt && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString('vi-VN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  )}
                  {post.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} phút đọc</span>
                    </div>
                  )}
                </div>

                {/* Excerpt */}
                {post.excerpt && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-8 p-6 bg-gray-50 rounded-xl border-l-4 border-gray-300"
                  >
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Article Body - Notion Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="prose prose-lg max-w-none"
              >
                {post.content && post.content.length > 0 ? (
                  <div className="space-y-4">
                    {post.content.map((block, index) => {
                      // Heading
                      if (block._type === 'heading') {
                        const headingId = `heading-${index}`
                        const level = block.level || 2
                        const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3'
                        const baseClasses = level === 2 
                          ? 'text-2xl font-bold text-gray-900 mt-12 mb-4'
                          : 'text-xl font-semibold text-gray-900 mt-8 mb-3'

                        return (
                          <Tag 
                            key={index} 
                            id={headingId}
                            className={baseClasses}
                          >
                            {block.text}
                          </Tag>
                        )
                      }

                      // Block
                      if (block._type === 'block') {
                        return (
                          <p key={index} className="text-gray-700 font-light leading-relaxed text-base">
                            {block.children?.map((child: any, i: number) => (
                              <span
                                key={i}
                                className={
                                  child.marks?.includes('strong') ? 'font-semibold text-gray-900' :
                                  child.marks?.includes('em') ? 'italic text-gray-500' :
                                  ''
                                }
                              >
                                {child.text}
                              </span>
                            ))}
                          </p>
                        )
                      }

                      // Quote
                      if (block._type === 'quote') {
                        return (
                          <blockquote
                            key={index}
                            className="my-8 p-6 bg-gray-50 rounded-xl border-l-4 border-gray-300"
                          >
                            <p className="text-lg text-gray-900 font-light leading-relaxed">
                              "{block.text}"
                            </p>
                            {block.attribution && (
                              <cite className="block text-right text-gray-500 text-sm font-light mt-3">
                                — {block.attribution}
                              </cite>
                            )}
                          </blockquote>
                        )
                      }

                      // Callout
                      if (block._type === 'callout') {
                        const toneColors = {
                          info: 'bg-blue-50 border-blue-200',
                          warning: 'bg-amber-50 border-amber-200',
                          important: 'bg-red-50 border-red-200',
                          success: 'bg-emerald-50 border-emerald-200',
                        }

                        return (
                          <div
                            key={index}
                            className={`p-5 rounded-xl border ${toneColors[block.tone as keyof typeof toneColors] || toneColors.info}`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="text-2xl flex-shrink-0">{block.emoji}</span>
                              <div className="flex-1">
                                {block.title && (
                                  <h4 className="font-semibold text-gray-900 mb-2">
                                    {block.title}
                                  </h4>
                                )}
                                <div className="space-y-2">
                                  {block.content?.map((item: any, i: number) => (
                                    <div key={i}>
                                      {item._type === 'list' && (
                                        <ul className={item.style === 'numbered' ? 'list-decimal' : 'list-disc'}>
                                          {item.children?.map((listItem: any, j: number) => (
                                            <li key={j} className="mb-1 text-gray-700 font-light">
                                              {listItem.text}
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                      {item._type === 'block' && (
                                        <p className="text-gray-700 font-light">
                                          {item.children?.map((child: any, j: number) => (
                                            <span
                                              key={j}
                                              className={child.marks?.includes('strong') ? 'font-semibold text-gray-900' : ''}
                                            >
                                              {child.text}
                                            </span>
                                          ))}
                                        </p>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }

                      // List
                      if (block._type === 'list') {
                        return (
                          <ul
                            key={index}
                            className={block.style === 'numbered' ? 'list-decimal space-y-2' : 'list-disc space-y-2'}
                          >
                            {block.children?.map((item: any, i: number) => (
                              <li key={i} className="text-gray-700 font-light">
                                {item.text}
                              </li>
                            ))}
                          </ul>
                        )
                      }

                      return null
                    })}
                  </div>
                ) : (
                  <p className="text-gray-500 font-light leading-relaxed">
                    Nội dung đang được cập nhật...
                  </p>
                )}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-3 pt-8 mt-12 border-t border-gray-200"
              >
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-light text-sm text-gray-700">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Thích</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-light text-sm text-gray-700">
                  <Bookmark className="w-4 h-4" />
                  <span>Lưu lại</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-light text-sm text-gray-700">
                  <Share2 className="w-4 h-4" />
                  <span>Chia sẻ</span>
                </button>
              </motion.div>
            </div>
          </main>
        </div>

        {/* Link to Đạo Tràng Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 border-t border-gray-200 pt-12"
        >
          <div className="max-w-3xl">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Thảo luận trên Đạo Tràng
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Tham gia thảo luận về bài viết này cùng cộng đồng hành giả trên Đạo Tràng.
              </p>
              <Link href="/dao-trang">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors font-light">
                  <MessageCircle className="w-5 h-5" />
                  <span>Tham gia thảo luận</span>
                </button>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
