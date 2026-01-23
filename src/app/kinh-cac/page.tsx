'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Book, Search, Box, Droplets, Flame, Wind, Clock, Tag, Loader2, Sparkles } from 'lucide-react'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: {
    asset: {
      _ref: string
      url: string
    }
  }
  content?: any[]
  excerpt?: string
  category: 'earth' | 'water' | 'fire' | 'air' | 'void'
  publishedAt?: string
}

// Mock data for demo purposes
const mockPosts: Post[] = [
  // Đất (Earth) - Posts
  {
    _id: 'earth-1',
    title: 'Xây Dựng Cấu Trúc Pháp Lý Ngay Từ Ngày Đầu (Day 1 XCAP)',
    slug: { current: 'xay-dung-cau-truc-phap-ly' },
    excerpt: 'Không có kỹ thuật nào hiệu quả nếu thế đứng không vững. Cấu trúc pháp lý Holdings, SPV và mô hình kinh doanh chuẩn chỉnh là nền tảng bắt buộc.',
    category: 'earth',
    publishedAt: '2025-01-15T00:00:00Z',
  },
  {
    _id: 'earth-2',
    title: 'Nguyên Tắc Vững Chắc: Khi Pháp Lý Lỏng Lẻo, Doanh Nghiệp Sập Đổ',
    slug: { current: 'nguyen-tac-vung-chac' },
    excerpt: 'Lịch sử đã chứng minh: doanh nghiệp có cấu trúc pháp lý yếu kém sẽ sụp đổ khi quy mô tăng. Bài học từ những thất bại đắt giá.',
    category: 'earth',
    publishedAt: '2025-01-10T00:00:00Z',
  },
  {
    _id: 'earth-3',
    title: 'Mô Hình Holdco-SPC: Chiến Lược Tối Ưu Cho Venture Studio',
    slug: { current: 'holdco-spc-chieu-luoc' },
    excerpt: 'Cách thiết kế cấu trúc công ty để bảo vệ nhà đầu tư, tối ưu thuế, và tạo điều kiện mở rộng linh hoạt cho từng vertical.',
    category: 'earth',
    publishedAt: '2025-01-05T00:00:00Z',
  },

  // Nước (Water) - Posts
  {
    _id: 'water-1',
    title: 'Tâm Chiến Binh Như Nước: Linh Hoạt, Phản Chiếu, Không Dính Mắc',
    slug: { current: 'tam-chien-binh-nhu-nuoc' },
    excerpt: 'Nước tùy vật mà định hình. Trong kinh doanh, khả năng thích nghi và xoay trục nhanh hơn đối thủ là chiến lược sống còn.',
    category: 'water',
    publishedAt: '2025-01-18T00:00:00Z',
  },
  {
    _id: 'water-2',
    title: 'Quản Trị Dòng Tiền Linh Hoạt Khi Thị Trường Đóng Băng',
    slug: { current: 'quan-tri-dong-tien-linh-hoat' },
    excerpt: 'Khi BĐS đóng băng, dòng vốn phải chảy. Chiến lược pivot từ bất động sản sang dịch vụ và sản xuất để duy trì cash flow.',
    category: 'water',
    publishedAt: '2025-01-12T00:00:00Z',
  },
  {
    _id: 'water-3',
    title: 'Không Cố Chấp Với Một Phương Thức Kiếm Tiền',
    slug: { current: 'khong-co-chap-kiem-tien' },
    excerpt: 'Doanh nghiệp bền vững hiểu rằng kiếm tiền có nhiều cách. Đa dạng hóa nguồn thu và linh hoạt trong chiến lược doanh thu.',
    category: 'water',
    publishedAt: '2025-01-08T00:00:00Z',
  },

  // Lửa (Fire) - Posts
  {
    _id: 'fire-1',
    title: 'Chiến Lược Chiếm Lĩnh Thị Trường: Go-to-Market Aggressive',
    slug: { current: 'go-to-market-aggressive' },
    excerpt: 'Tấn công vào điểm yếu của đối thủ. Sử dụng đòn bẩy marketing để bùng nổ doanh số và định vị thương hiệu ngay từ đầu (Day 2 XCAP).',
    category: 'fire',
    publishedAt: '2025-01-20T00:00:00Z',
  },
  {
    _id: 'fire-2',
    title: 'Tầm Nhìn Quyết Liệt: Khi Chiến Đấu Là Phải Thắng',
    slug: { current: 'tam-nhin-quyet-liet' },
    excerpt: 'Trong kinh doanh, quyết liệt không phải là hung hăng. Đó là sự dám ra quyết định khó, chấp nhận rủi ro tính toán để đạt mục tiêu.',
    category: 'fire',
    publishedAt: '2025-01-16T00:00:00Z',
  },
  {
    _id: 'fire-3',
    title: 'Đòn Bẩy Marketing: Tối Ưu ROI Để Bùng Nổ Doanh Số',
    slug: { current: 'don-bay-marketing' },
    excerpt: 'Chiến thuật tạo hiệu ứng nổ đom đóm: bắt đầu nhỏ, tìm traction, scale nhanh. Quy trình bootstrapping marketing budget.',
    category: 'fire',
    publishedAt: '2025-01-11T00:00:00Z',
  },

  // Khí (Air) - Posts
  {
    _id: 'air-1',
    title: 'Hiểu Phong Cách Các Trường Phái Khác Để Khắc Chế',
    slug: { current: 'hieu-phong-cach-truong-phai' },
    excerpt: 'Biết phong cách của đối thủ để khắc chế. Đối thủ cồng kềnh chậm chạp thì dùng tốc độ; đối thủ nhanh hung hăng thì dùng chiều sâu.',
    category: 'air',
    publishedAt: '2025-01-22T00:00:00Z',
  },
  {
    _id: 'air-2',
    title: 'M&A Chiến Thuật: Thâu Tóm Hoặc Vượt Mặt Đối Thủ',
    slug: { current: 'ma-chien-thuat' },
    excerpt: 'Sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) để thâu tóm hoặc vượt mặt các đối thủ truyền thống.',
    category: 'air',
    publishedAt: '2025-01-19T00:00:00Z',
  },
  {
    _id: 'air-3',
    title: 'Chiến Lược Khắc Chế: Tìm Điểm Yếu Của Đối Thủ',
    slug: { current: 'chien-luoc-kac-che' },
    excerpt: 'Mỗi đối thủ đều có điểm yếu. Phân tích thị trường, hiểu mô hình kinh doanh, và tấn công vào chỗ yếu nhất.',
    category: 'air',
    publishedAt: '2025-01-14T00:00:00Z',
  },

  // Không (Void) - Posts
  {
    _id: 'void-1',
    title: 'Biết Cái Có Để Thấy Cái Không: Triết Lý Giá Trị',
    slug: { current: 'biet-cai-co-de-thay-cai-khong' },
    excerpt: 'Đỉnh cao là sự giác ngộ về bản chất vô tướng. Giá trị doanh nghiệp không nằm ở nhà xưởng hữu hình mà ở thương hiệu, dữ liệu, kỳ vọng.',
    category: 'void',
    publishedAt: '2025-01-25T00:00:00Z',
  },
  {
    _id: 'void-2',
    title: 'Tài Sản Vô Hình: Khoảng Không Kiếm Tiền Của Nhà Tư Bản',
    slug: { current: 'tai-san-vo-hinh' },
    excerpt: 'Nhà tư bản kiếm tiền từ "Khoảng Không" thông qua P/E ratio, Goodwill. Tại sao Amazon đáng giá hơn nhiều tổng tài sản hữu hình?',
    category: 'void',
    publishedAt: '2025-01-21T00:00:00Z',
  },
  {
    _id: 'void-3',
    title: 'P/E Ratio: Nghệ Thuật Tạo Giá Trị Từ Không',
    slug: { current: 'pe-ratio-nghe-thuat-gia-tri' },
    excerpt: 'Hiểu cách thị trường định giá doanh nghiệp. Chiến thuật tăng kỳ vọng tương lai để nâng P/E mà không cần tăng lợi nhuận thực tế ngay.',
    category: 'void',
    publishedAt: '2025-01-17T00:00:00Z',
  },
]

const elements = [
  {
    id: 'earth',
    name: 'Đất',
    icon: Box,
    color: 'from-amber-900/20 to-amber-800/10',
    borderColor: 'border-amber-900/30',
    textColor: 'text-amber-200',
  },
  {
    id: 'water',
    name: 'Nước',
    icon: Droplets,
    color: 'from-cyan-900/20 to-cyan-800/10',
    borderColor: 'border-cyan-900/30',
    textColor: 'text-cyan-200',
  },
  {
    id: 'fire',
    name: 'Lửa',
    icon: Flame,
    color: 'from-red-950/25 to-red-900/15',
    borderColor: 'border-red-900/40',
    textColor: 'text-red-200',
  },
  {
    id: 'air',
    name: 'Khí',
    icon: Wind,
    color: 'from-slate-400/20 to-slate-300/10',
    borderColor: 'border-slate-400/30',
    textColor: 'text-slate-200',
  },
  {
    id: 'void',
    name: 'Không',
    icon: Sparkles,
    color: 'from-violet-950/25 to-purple-900/15',
    borderColor: 'border-violet-900/40',
    textColor: 'text-violet-200',
  },
]

export default function KinhCacPage() {
  const [selectedElement, setSelectedElement] = useState<string>('earth')
  const [searchQuery, setSearchQuery] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch posts from Sanity or use mock data
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      setError(null)

      try {
        const elementParam = selectedElement === 'earth' ? 'earth' :
                           selectedElement === 'water' ? 'water' :
                           selectedElement === 'fire' ? 'fire' :
                           selectedElement === 'air' ? 'air' :
                           selectedElement === 'void' ? 'void' : null

        const url = `/api/posts${elementParam ? `?element=${elementParam}` : ''}`
        const response = await fetch(url)
        const data = await response.json()

        if (data.error) {
          // Use mock data as fallback
          const filteredPosts = mockPosts.filter(p => p.category === selectedElement)
          setPosts(filteredPosts)
          console.log('Using mock data as fallback')
        } else if (data.posts && data.posts.length > 0) {
          setPosts(data.posts)
        } else {
          // Use mock data if API returns empty
          const filteredPosts = mockPosts.filter(p => p.category === selectedElement)
          setPosts(filteredPosts)
          console.log('Using mock data - API returned empty')
        }
      } catch (err) {
        console.error('Error fetching posts:', err)
        // Use mock data as fallback on error
        const filteredPosts = mockPosts.filter(p => p.category === selectedElement)
        setPosts(filteredPosts)
        console.log('Using mock data due to error')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [selectedElement])

  const filteredArticles = posts.filter(post => {
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesSearch
  })

  return (
    <div className="min-h-screen texture-overlay">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-silver/30 flex items-center justify-center bg-card">
            <Book className="w-10 h-10 text-silver" />
          </div>
          <h1 className="text-5xl md:text-6xl font-sans text-gradient-silver font-semibold mb-4">
            Kinh Các
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Sacred Knowledge Archive
          </p>
        </motion.div>

        {/* 5 Elements Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 p-2 rounded-2xl bg-card/30 border border-border/30 backdrop-blur-sm">
            {elements.map((element) => {
              const Icon = element.icon
              const isActive = selectedElement === element.id

              return (
                <motion.button
                  key={element.id}
                  onClick={() => setSelectedElement(element.id)}
                  className={`relative px-6 py-3 rounded-xl font-light transition-all duration-300 flex items-center gap-3 ${
                    isActive
                      ? `bg-gradient-to-br ${element.color} ${element.borderColor} ${element.textColor}`
                      : 'bg-transparent border-border/30 text-muted-foreground hover:bg-card/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-lg font-sans">{element.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-xl bg-silver/10"
                      initial={false}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <Loader2 className="w-12 h-12 text-silver/50 animate-spin mb-4" />
            <p className="text-muted-foreground font-light">Đang tải bài viết...</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-red-400 font-light">{error}</p>
          </motion.div>
        )}

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Tìm kiếm trong thư viện..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card/50 border border-border/50 focus:border-silver/50 focus:outline-none transition-colors font-light"
            />
          </div>
        </motion.div>

        {/* Element Description */}
        {!loading && !error && (
          <motion.div
            key={selectedElement}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <div className={`p-8 rounded-2xl bg-gradient-to-br ${elements.find(e => e.id === selectedElement)?.color} border ${elements.find(e => e.id === selectedElement)?.borderColor} backdrop-blur-sm`}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-2">
                  {elements.find(e => e.id === selectedElement)?.id === 'earth' && 'Đất (Earth/Ground)'}
                  {elements.find(e => e.id === selectedElement)?.id === 'water' && 'Thủy (Water)'}
                  {elements.find(e => e.id === selectedElement)?.id === 'fire' && 'Hỏa (Fire)'}
                  {elements.find(e => e.id === selectedElement)?.id === 'air' && 'Phong (Wind)'}
                  {elements.find(e => e.id === selectedElement)?.id === 'void' && 'Không (Void/Emptiness)'}
                </h3>
                <p className="text-lg font-light leading-relaxed">
                  {elements.find(e => e.id === selectedElement)?.id === 'earth' && (
                    <>
                      <span className="font-semibold">Nền Tảng Vững Chắc:</span> Không có kỹ thuật nào hiệu quả nếu thế đứng không vững.
                      <br /><br />
                      <span className="font-semibold">Pháp Lý & Mô Hình:</span> Xây dựng cấu trúc pháp lý (Holdings, SPV) và Mô hình kinh doanh chuẩn chỉnh ngay từ ngày đầu (Day 1 XCAP). Nếu "Địa" không vững (pháp lý lỏng lẻo), doanh nghiệp sẽ sụp đổ khi quy mô tăng.
                    </>
                  )}
                  {elements.find(e => e.id === selectedElement)?.id === 'water' && (
                    <>
                      <span className="font-semibold">Sự Linh Hoạt:</span> Nước tùy vật mà định hình. Tâm chiến binh phải như nước, phản chiếu tất cả nhưng không bị dính mắc.
                      <br /><br />
                      <span className="font-semibold">Dòng Tiền & Thích Nghi:</span> Khả năng xoay trục (Pivot) và quản trị dòng tiền linh hoạt. Khi thị trường BĐS đóng băng, dòng vốn phải chảy sang dịch vụ hoặc sản xuất. Không cố chấp với một phương thức kiếm tiền duy nhất.
                    </>
                  )}
                  {elements.find(e => e.id === selectedElement)?.id === 'fire' && (
                    <>
                      <span className="font-semibold">Sự Quyết Liệt:</span> Chiến đấu là phải thắng. Tấn công vào điểm yếu của đối thủ.
                      <br /><br />
                      <span className="font-semibold">Marketing & Tăng Trưởng:</span> Chiến lược chiếm lĩnh thị trường (Go-to-market). Sử dụng các đòn bẩy marketing để bùng nổ doanh số và định vị thương hiệu (Day 2 XCAP).
                    </>
                  )}
                  {elements.find(e => e.id === selectedElement)?.id === 'air' && (
                    <>
                      <span className="font-semibold">Hiểu Đối Thủ:</span> Biết phong cách của các trường phái khác để khắc chế họ.
                      <br /><br />
                      <span className="font-semibold">Cạnh Tranh & M&A:</span> Hiểu rõ điểm yếu của các đối thủ truyền thống (cồng kềnh, chậm chạp) để sử dụng tốc độ của Venture Studio (nhanh, tinh gọn) mà thâu tóm hoặc vượt mặt.
                    </>
                  )}
                  {elements.find(e => e.id === selectedElement)?.id === 'void' && (
                    <>
                      <span className="font-semibold">Hư Không:</span> "Biết cái có để thấy cái không". Đỉnh cao là sự giác ngộ về bản chất vô tướng.
                      <br /><br />
                      <span className="font-semibold">Định Giá & Tài Sản Vô Hình:</span> Giá trị lớn nhất của doanh nghiệp không nằm ở nhà xưởng (Hữu hình) mà nằm ở Thương hiệu, Dữ liệu, và Kỳ vọng tương lai (Vô hình). Nhà tư bản kiếm tiền từ "Khoảng Không" (P/E ratio, Goodwill).
                    </>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        {!loading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((post, index) => (
                <Link key={post._id} href={`/kinh-cac/${post.slug.current}`}>
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      layout: { duration: 0.3 },
                    }}
                    className="group relative p-6 rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:border-silver/30 transition-all duration-300 cursor-pointer"
                  >
                  {/* Hover Summary Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-xl bg-background/95 bg-gradient-to-br from-silver/5 to-silver/2 backdrop-blur-md flex items-center justify-center p-6 z-10"
                  >
                    <div className="text-center">
                      <p className="text-foreground font-medium leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="mt-4"
                      >
                        <button className="px-6 py-2 rounded-lg bg-silver/20 border border-silver/40 text-silver hover:bg-silver/30 transition-colors font-light text-sm">
                          Đọc thêm
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Card Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      {post.publishedAt && (
                        <span className="font-light">{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-sans text-gradient-silver font-semibold mb-1 group-hover:text-silver transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.article>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <Book className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <p className="text-muted-foreground font-light">
              Không tìm thấy bài viết trong thể loại này.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
