'use client'

import { useState, useRef, useEffect, ChangeEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  MessageCircle,
  Share2,
  Reply,
  Image as ImageIcon,
  Video,
  X,
  Send,
  MoreHorizontal,
  BookOpen,
  Home,
  Users,
  Bell,
  Search,
  ThumbsUp,
  Globe,
  Lock,
  Smile,
  FileText,
  Calendar,
  MapPin,
  Menu,
} from 'lucide-react'
import Link from 'next/link'
import { AnimatedList } from '@/components/ui/animated-list'
import GlowyTextArea from '@/components/ui/GlowyTextArea'
import GlowySearch from '@/components/ui/GlowySearch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

interface Attachment {
  id: string
  type: 'image' | 'video'
  file: File
  url: string
}

interface Comment {
  id: number
  author: string
  authorInitials: string
  authorAvatar?: string
  content: string
  timeAgo: string
  likes: number
  replies?: Comment[]
}

interface Post {
  id: number
  author: string
  authorInitials: string
  authorAvatar?: string
  content: string
  topic?: string
  timeAgo: string
  likes: number
  comments: Comment[]
  shares: number
  attachments?: Attachment[]
  privacy?: 'public' | 'friends'
  mentionsKinhCac?: { slug: string; title: string }
}

const mockPosts: Post[] = [
  {
    id: 1,
    author: 'Minh Tâm',
    authorInitials: 'MT',
    authorAvatar: '/avatars/avatar_minh-tam.png',
    content: 'Hôm nay, tôi nhận ra rằng sự bình an không phải là đích đến, mà là cách đi. Mỗi khoảnh khắc của chánh niệm đều là một bước đi nhẹ nhàng trên con đường hạnh phúc.\n\nĐôi khi chúng ta vội vã đến đích, quên mất rằng chính hành trình mới là điều quý giá nhất. Chậm lại, thở sâu, và tận hưởng từng khoảnh khắc hiện tại.',
    topic: 'Chánh niệm',
    timeAgo: '2 giờ trước',
    likes: 24,
    shares: 5,
    comments: [
      {
        id: 1,
        author: 'Thiền Điền',
        authorInitials: 'TD',
        authorAvatar: '/avatars/avatar_thien-dien.png',
        content: 'Cảm ơn chia sẻ. Câu "cách đi" thực sự chạm đến tôi.',
        timeAgo: '1 giờ trước',
        likes: 8,
      },
      {
        id: 2,
        author: 'Nguyên An',
        authorInitials: 'NA',
        authorAvatar: '/avatars/avatar_nguyen-an.png',
        content: 'Đúng, tôi cũng đang học cách tận hưởng hành trình thay vì vội vã đến đích.',
        timeAgo: '30 phút trước',
        likes: 5,
      },
    ],
  },
  {
    id: 2,
    author: 'Thiền Điền',
    authorInitials: 'TD',
    authorAvatar: '/avatars/avatar_thien-dien.png',
    content: 'Sáng nay tôi thử một bài tập mới: trước mỗi cuộc họp, dành 1 phút để hít thở sâu và thiết định ý định. Ngạc nhiên, cuộc họp kéo dài ít căng thẳng hơn và mọi người đều tập trung hơn.\n\nNhỏ thôi, nhưng sự thay đổi từ bên trong luôn có sức mạnh lớn.',
    topic: 'Thực hành',
    timeAgo: '5 giờ trước',
    likes: 42,
    shares: 12,
    comments: [
      {
        id: 3,
        author: 'Minh Tâm',
        authorInitials: 'MT',
        authorAvatar: '/avatars/avatar_minh-tam.png',
        content: 'Tuyệt vời! Đây cũng là một phương pháp từ kinh pháp.',
        timeAgo: '4 giờ trước',
        likes: 12,
      },
    ],
  },
  {
    id: 3,
    author: 'Nguyên An',
    authorInitials: 'NA',
    authorAvatar: '/avatars/avatar_nguyen-an.png',
    content: 'Cuối cùng tôi hiểu rằng sự khiêm tốn không phải là tự tiêm, mà là biết chỗ đứng của mình. Trong doanh nghiệp, đôi khi ta cần can đảm nói "tôi chưa biết, hãy chỉ giúp tôi".\n\nKhiêm tốn thực sự giúp chúng ta học hỏi nhanh hơn và xây dựng niềm tin mạnh mẽ hơn với đồng nghiệp.',
    topic: 'Lãnh đạo',
    timeAgo: '8 giờ trước',
    likes: 67,
    shares: 23,
    comments: [],
  },
  {
    id: 4,
    author: 'Phương Hương',
    authorInitials: 'PH',
    authorAvatar: '/logo-chankinh-white-03.png',
    content: 'Hôm nay mình dành thời gian để lắng nghe một đồng nghiệp chia sẻ về khó khăn. Không đưa lời khuyên, chỉ lắng nghe.\n\nĐó có thể là hỗ trợ mạnh nhất. Đôi khi người ta chỉ cần được nghe và cảm thấy mình được thấu hiểu.',
    topic: 'Lắng nghe',
    timeAgo: '12 giờ trước',
    likes: 38,
    shares: 9,
    comments: [
      {
        id: 4,
        author: 'Minh Tâm',
        authorInitials: 'MT',
        authorAvatar: '/avatars/avatar_minh-tam.png',
        content: 'Bài học rất giá trị. Lắng nghe thực sự là một nghệ thuật.',
        timeAgo: '11 giờ trước',
        likes: 15,
      },
      {
        id: 5,
        author: 'Thiền Điền',
        authorInitials: 'TD',
        authorAvatar: '/avatars/avatar_thien-dien.png',
        content: 'Nhớ là lắng nghe với cả tim, không chỉ với đầu.',
        timeAgo: '10 giờ trước',
        likes: 19,
      },
    ],
  },
  {
    id: 5,
    author: 'Zeon Phan',
    authorInitials: 'ZP',
    authorAvatar: '/logo-chankinh-white-03.png',
    content: 'Sau khi đọc bài viết "Xây Dựng Cấu Trúc Pháp Lý Ngay Từ Ngày Đầu", tôi nhận ra tầm quan trọng của việc thiết lập nền tảng đúng ngay từ đầu.\n\nTư duy về "Địa vững" thực sự là nền tảng của mọi thành công. Khi pháp lý không lỏng lẻo, doanh nghiệp có thể tự tin mở rộng. #KinhCác #Day1XCAP\n\nĐọc thêm tại: /kinh-cac/xay-dung-cau-truc-phap-ly',
    topic: 'Áp dụng',
    timeAgo: '1 giờ trước',
    likes: 45,
    shares: 12,
    mentionsKinhCac: { slug: 'xay-dung-cau-truc-phap-ly', title: 'Xây Dựng Cấu Trúc Pháp Lý Ngay Từ Ngày Đầu' },
    comments: [
      {
        id: 6,
        author: 'Minh Tâm',
        authorInitials: 'MT',
        authorAvatar: '/avatars/avatar_minh-tam.png',
        content: 'Đúng vậy! Bài viết trong Kinh Các rất hay. Tôi cũng áp dụng holdco cho các dự án mới.',
        timeAgo: '50 phút trước',
        likes: 22,
      },
      {
        id: 7,
        author: 'Thiền Điền',
        authorInitials: 'TD',
        authorAvatar: '/avatars/avatar_thien-dien.png',
        content: 'Cấu trúc pháp lý đúng là "Địa vững" thực sự. Nó giúp chúng ta tập trung vào kinh doanh thay vì lo pháp lý.',
        timeAgo: '30 phút trước',
        likes: 18,
      },
    ],
  },
]

const notifications = [
  {
    name: "Masan CEO",
    description: "đã thích bài viết của bạn",
    time: "15m trước",
    icon: "🔔",
    color: "#F59E0B",
  },
  {
    name: "Tập đoàn Vingroup",
    description: "vừa gửi lời mời đấu thầu dự án",
    time: "10m trước",
    icon: "📋",
    color: "#3B82F6",
  },
  {
    name: "Phương Hương",
    description: "đã nhắc đến bạn trong một bình luận",
    time: "5m trước",
    icon: "💬",
    color: "#EC4899",
  },
  {
    name: "Hệ thống",
    description: "Kinh Các vừa cập nhật bài viết mới",
    time: "2m trước",
    icon: "✨",
    color: "#10B981",
  },
];

const NotificationCard = ({ name, description, icon, color, time }: any) => {
  return (
    <div className="flex w-full items-center gap-3 rounded-xl border border-white/5 bg-[#252525]/50 p-3 backdrop-blur-sm transition-all hover:bg-[#252525]">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full text-lg"
        style={{ backgroundColor: `${color}20`, color: color }}
      >
        {icon}
      </div>
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-white">{name}</span>
          <span className="text-[10px] text-gray-500">{time}</span>
        </div>
        <p className="truncate text-xs text-gray-400 font-light">{description}</p>
      </div>
    </div>
  );
};

export default function DaoTrangPage() {
  const [newPost, setNewPost] = useState('')
  const [attachments, setAttachments] = useState<Attachment[]>([])
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [replyTo, setReplyTo] = useState<{ postId: number; commentId?: number; author: string } | null>(null)
  const [showReplyBox, setShowReplyBox] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())
  const [likedComments, setLikedComments] = useState<Set<number>>(new Set())
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoInputRef = useRef<HTMLInputElement>(null)
  const commentsRefs = useRef<{ [key: number]: HTMLInputElement | null }>({})

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newAttachments: Attachment[] = []
    Array.from(files).forEach(file => {
      const url = URL.createObjectURL(file)
      newAttachments.push({
        id: Date.now() + Math.random().toString(),
        type: 'image',
        file,
        url,
      })
    })

    setAttachments(prev => [...prev, ...newAttachments])
  }

  const handleVideoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const newAttachments: Attachment[] = []
    Array.from(files).forEach(file => {
      const url = URL.createObjectURL(file)
      newAttachments.push({
        id: Date.now() + Math.random().toString(),
        type: 'video',
        file,
        url,
      })
    })

    setAttachments(prev => [...prev, ...newAttachments])
  }

  const removeAttachment = (id: string) => {
    setAttachments(prev => prev.filter(att => att.id !== id))
  }

  const handleSubmit = () => {
    if (newPost.trim() || attachments.length > 0) {
      const newPostData: Post = {
        id: Date.now(),
        author: 'Bạn',
        authorInitials: 'BN',
        content: newPost,
        timeAgo: 'Vừa xong',
        likes: 0,
        shares: 0,
        comments: [],
        attachments: attachments.length > 0 ? attachments : undefined,
      }
      setPosts(prev => [newPostData, ...prev])
      setNewPost('')
      setAttachments([])
      setIsInputFocused(false)
    }
  }

  const handleLikePost = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: likedPosts.has(postId) ? post.likes - 1 : post.likes + 1
        }
      }
      return post
    }))
  }

  const handleLikeComment = (commentId: number) => {
    setLikedComments(prev => {
      const newSet = new Set(prev)
      if (newSet.has(commentId)) {
        newSet.delete(commentId)
      } else {
        newSet.add(commentId)
      }
      return newSet
    })
    setPosts(prev => prev.map(post => ({
      ...post,
      comments: post.comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: likedComments.has(commentId) ? comment.likes - 1 : comment.likes + 1
          }
        }
        return comment
      })
    })))
  }

  const handleReply = (postId: number, author: string, commentId?: number) => {
    setReplyTo({ postId, commentId, author })
    setShowReplyBox(true)
    setIsInputFocused(true)
    setTimeout(() => {
      if (commentId && commentsRefs.current[commentId]) {
        commentsRefs.current[commentId]?.focus()
      }
    }, 100)
  }

  const handleSubmitComment = (postId: number) => {
    const commentInput = commentsRefs.current[postId]
    const replyText = commentInput?.value.trim()

    if (replyText) {
      const newComment: Comment = {
        id: Date.now(),
        author: 'Bạn',
        authorInitials: 'BN',
        content: replyText,
        timeAgo: 'Vừa xong',
        likes: 0,
      }

      setPosts(prev => prev.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment]
          }
        }
        return post
      }))

      if (commentInput) {
        commentInput.value = ''
      }
    }

    setReplyTo(null)
    setShowReplyBox(false)
  }

  return (
    <div className="min-h-screen bg-[#191919] text-gray-100">
      {/* Top Navigation Bar - Facebook style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#202020]/95 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="/pasted_image_1769190443244.png"
                alt="Đạo Tràng Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-semibold text-lg hidden sm:block">Đạo Tràng</span>
            </Link>

            {/* Search Bar - Hidden on Mobile to save space */}
            <div className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Tìm kiếm trong Đạo Tràng..."
                  className="w-full bg-[#2a2a2a] border border-gray-800/20 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-white hover:bg-white/5"
              >
                <Link href="/">
                  <Home className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5">
                <Users className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5">
                <Bell className="w-5 h-5" />
              </Button>

              {/* Main App Navigation Dropdown */}
              <div className="relative ml-2 border-l border-gray-800 pl-4">
                <Button
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className="bg-amber-500 hover:bg-amber-600 text-white gap-2 px-4 h-9 rounded-full"
                >
                  <Menu className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Menu</span>
                </Button>

                <AnimatePresence>
                  {isNavOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-4 w-56 bg-[#202020] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden py-2"
                    >
                      <Link href="/" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-sm transition-colors text-gray-300">
                        <Home className="w-4 h-4 text-amber-500" />
                        <span>Khai Kinh (Trang Chủ)</span>
                      </Link>
                      <Link href="/kinh-cac" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-sm transition-colors text-gray-300">
                        <BookOpen className="w-4 h-4 text-amber-500" />
                        <span>Kinh Các (Thư Viện)</span>
                      </Link>
                      <Link href="/kinh-bo" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-sm transition-colors text-gray-300">
                        <Heart className="w-4 h-4 text-amber-500" />
                        <span>Kinh Bộ (Giải Pháp)</span>
                      </Link>
                      <Link href="/tinh-trang" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-sm transition-colors text-gray-300">
                        <Search className="w-4 h-4 text-amber-500" />
                        <span>Tịnh Trang (Tư Vấn)</span>
                      </Link>
                      <Link href="/tong-chi" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-sm transition-colors text-gray-300">
                        <FileText className="w-4 h-4 text-amber-500" />
                        <span>Tông Chỉ (Triết Lý)</span>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Removed old Notification Ticker */}

      {/* Main Layout - Independent Scrolling Columns (Desktop) / Linear (Mobile) */}
      <div className="lg:h-[calc(100vh-104px)] overflow-y-auto lg:overflow-hidden scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full pb-10 lg:pb-0">
            {/* Left Sidebar - Scrollable */}
            <aside className="hidden lg:block lg:col-span-3 h-full overflow-y-auto pr-2 no-scrollbar">
              <div className="py-2 space-y-4">
                {/* User Card */}
                <Card className="bg-[#202020] border-gray-800/50 overflow-hidden">
                  <div className="h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/10" />
                  <div className="px-4 pb-4 -mt-10">
                    <Avatar className="w-20 h-20 border-4 border-[#202020] bg-[#2a2a2a]">
                      <AvatarImage src="/logo-chankinh-white-03.png" />
                      <AvatarFallback className="text-lg font-semibold text-amber-400">ZP</AvatarFallback>
                    </Avatar>
                    <div className="mt-3">
                      <h3 className="font-semibold">Zeon Phan</h3>
                      <p className="text-sm text-gray-500">Hành giả trên con đường tỉnh thức</p>
                    </div>
                  </div>
                </Card>

                {/* Navigation Links */}
                <Card className="bg-[#202020] border-gray-800/50 p-2">
                  <nav className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start bg-white/5 text-white hover:bg-white/10">
                      <Users className="w-5 h-5 mr-3" />
                      <div className="flex-1 text-left">
                        <span>Bạn bè</span>
                      </div>
                      <span className="text-xs text-gray-500">156</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5">
                      <BookOpen className="w-5 h-5 mr-3" />
                      <span>Kinh Pháp</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span>Kỹ luyển</span>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white hover:bg-white/5">
                      <FileText className="w-5 h-5 mr-3" />
                      <span>Trang cá nhân</span>
                    </Button>
                  </nav>
                </Card>

                {/* Active Practitioners - Moved from Right Sidebar */}
                <Card className="bg-[#202020] border-gray-800/50 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Hành giả hoạt động</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-amber-400 hover:text-amber-300">
                      Xem tất cả
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {['Minh Tâm', 'Thiền Điền', 'Nguyên An', 'Phương Hương'].map((name, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="w-9 h-9 bg-[#2a2a2a]">
                            <AvatarFallback className="text-xs font-semibold text-amber-400">
                              {name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#202020]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{name}</p>
                          <p className="text-xs text-gray-500">Đang thực hành chánh niệm</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </aside>

            {/* Main Feed Container - Scrollable */}
            <main className="lg:col-span-6 h-full overflow-y-auto no-scrollbar scroll-smooth">
              <div className="py-2 space-y-6 pb-20">
                {/* Create Post Box */}
                <Card className="bg-[#202020] border-gray-800/50 p-4">
                  <div className="flex gap-3">
                    <Avatar className="w-10 h-10 bg-[#2a2a2a] flex-shrink-0">
                      <AvatarImage src="/logo-chankinh-white-03.png" />
                      <AvatarFallback className="text-sm font-semibold text-amber-400">ZP</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3">
                      {/* Glowy Post Input */}
                      <GlowyTextArea
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                        onFocus={() => setIsInputFocused(true)}
                        onBlur={() => setIsInputFocused(false)}
                        placeholder="Bạn đang nghĩ gì?"
                        isFocused={isInputFocused}
                      />

                      {attachments.length > 0 && (
                        <div className="flex gap-2 px-2.5 pb-2 flex-wrap">
                          {attachments.map((att) => (
                            <div key={att.id} className="relative group">
                              {att.type === 'image' ? (
                                <img src={att.url} alt="Attachment" className="w-16 h-16 object-cover rounded-lg" />
                              ) : (
                                <div className="relative w-16 h-16 rounded-lg bg-[#3a3a3a] flex items-center justify-center">
                                  <Video className="w-8 h-8 text-gray-500" />
                                </div>
                              )}
                              <button
                                onClick={() => removeAttachment(att.id)}
                                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500/80 hover:bg-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="w-3 h-3 text-white" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => fileInputRef.current?.click()}
                            className="text-gray-500 hover:text-gray-300 hover:bg-white/5"
                          >
                            <ImageIcon className="w-5 h-5 mr-1" />
                            <span className="text-sm font-light">Hình ảnh</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => videoInputRef.current?.click()}
                            className="text-gray-500 hover:text-gray-300 hover:bg-white/5"
                          >
                            <Video className="w-5 h-5 mr-1" />
                            <span className="text-sm font-light">Video</span>
                          </Button>
                        </div>

                        {(isInputFocused || attachments.length > 0 || newPost.trim()) && (
                          <div className="flex justify-end gap-2">
                            <Button
                              onClick={() => {
                                setNewPost('')
                                setAttachments([])
                                setIsInputFocused(false)
                              }}
                              variant="ghost"
                              size="sm"
                              className="text-gray-500 hover:text-gray-300"
                            >
                              Hủy
                            </Button>
                            <Button
                              onClick={handleSubmit}
                              disabled={!newPost.trim() && attachments.length === 0}
                              className={`bg-amber-500 hover:bg-amber-600 text-white transition-colors ${!newPost.trim() && attachments.length === 0
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                                }`}
                            >
                              Đăng
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleVideoUpload}
                  />
                </Card>

                {/* Posts Feed */}
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {posts.map((post) => (
                      <motion.div
                        key={post.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                          duration: 0.3,
                          layout: { duration: 0.3 },
                        }}
                      >
                        <Card className="bg-[#202020] border-gray-800/50 overflow-hidden">
                          {/* Post Header */}
                          <div className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10 bg-[#2a2a2a]">
                                  <AvatarImage src={post.authorAvatar} />
                                  <AvatarFallback className="text-sm font-semibold text-amber-400">
                                    {post.authorInitials}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">{post.author}</span>
                                    {post.privacy === 'public' ? (
                                      <Globe className="w-3.5 h-3.5 text-gray-500" />
                                    ) : (
                                      <Lock className="w-3.5 h-3.5 text-gray-500" />
                                    )}
                                  </div>
                                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                    <span>{post.timeAgo}</span>
                                    {post.topic && (
                                      <>
                                        <span>•</span>
                                        <span className="text-amber-400/80">{post.topic}</span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-white hover:bg-white/5">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>

                            {/* Post Content */}
                            <div className="mt-4">
                              <p className="text-gray-100 leading-relaxed whitespace-pre-wrap">
                                {post.content}
                              </p>
                              {post.mentionsKinhCac && (
                                <Link href={`/kinh-cac/${post.mentionsKinhCac.slug}`}>
                                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-400/5 border border-amber-500/30 hover:border-amber-500/50 transition-all cursor-pointer">
                                    <div className="flex items-start gap-3">
                                      <BookOpen className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm text-amber-200/80 mb-1">Bài viết liên quan trong Kinh Các:</p>
                                        <p className="text-sm font-semibold text-amber-400 leading-tight">
                                          {post.mentionsKinhCac.title}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              )}
                            </div>
                          </div>

                          {/* Attachments */}
                          {post.attachments && post.attachments.length > 0 && (
                            <div className={`grid gap-0.5 bg-[#2a2a2a] ${post.attachments.length === 1 ? 'grid-cols-1' :
                              post.attachments.length === 2 ? 'grid-cols-2' :
                                'grid-cols-2 md:grid-cols-3'
                              }`}>
                              {post.attachments.map((att) => (
                                <div key={att.id} className="aspect-square">
                                  {att.type === 'image' ? (
                                    <img
                                      src={att.url}
                                      alt="Attachment"
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <div className="relative w-full h-full">
                                      <video
                                        src={att.url}
                                        className="w-full h-full object-cover"
                                        controls
                                      />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Post Stats */}
                          <div className="px-4 py-3 border-t border-b border-gray-800/50 flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <div className="flex -space-x-1">
                                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                  <ThumbsUp className="w-3 h-3 text-white" />
                                </div>
                              </div>
                              <span>{post.likes} người thích</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span>{post.comments.length} bình luận</span>
                              <span>{post.shares} chia sẻ</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="px-2 py-1 border-b border-gray-800/50 flex items-center justify-around">
                            <Button
                              variant="ghost"
                              onClick={() => handleLikePost(post.id)}
                              className={`flex-1 rounded-lg h-10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors ${likedPosts.has(post.id) ? 'text-blue-400 hover:text-blue-400 hover:bg-blue-400/10' : ''
                                }`}
                            >
                              <ThumbsUp className={`w-5 h-5 mr-2 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                              <span>Thích</span>
                            </Button>
                            <Button
                              variant="ghost"
                              className="flex-1 rounded-lg h-10 text-gray-400 hover:text-white hover:bg-white/5"
                            >
                              <MessageCircle className="w-5 h-5 mr-2" />
                              <span>Bình luận</span>
                            </Button>
                            <Button
                              variant="ghost"
                              className="flex-1 rounded-lg h-10 text-gray-400 hover:text-white hover:bg-white/5"
                            >
                              <Share2 className="w-5 h-5 mr-2" />
                              <span>Chia sẻ</span>
                            </Button>
                          </div>

                          {/* Comments Section */}
                          {post.comments.length > 0 && (
                            <div className="p-4 space-y-3">
                              {post.comments.map((comment) => (
                                <div key={comment.id} className="flex gap-3">
                                  <Avatar className="w-8 h-8 bg-[#2a2a2a] flex-shrink-0">
                                    <AvatarFallback className="text-xs font-semibold text-amber-400">
                                      {comment.authorInitials}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1 space-y-1">
                                    <div className="bg-[#2a2a2a] rounded-2xl px-3 py-2">
                                      <div className="flex items-center gap-2">
                                        <span className="font-semibold text-sm">{comment.author}</span>
                                        <span className="text-xs text-gray-500">{comment.timeAgo}</span>
                                      </div>
                                      <p className="text-sm text-gray-100 mt-1">{comment.content}</p>
                                    </div>
                                    <div className="flex items-center gap-2 pl-2">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleLikeComment(comment.id)}
                                        className={`text-gray-500 hover:text-white hover:bg-white/5 h-8 px-2 ${likedComments.has(comment.id) ? 'text-blue-400 hover:text-blue-400 hover:bg-blue-400/10' : ''
                                          }`}
                                      >
                                        <ThumbsUp className={`w-3.5 h-3.5 mr-1 ${likedComments.has(comment.id) ? 'fill-current' : ''}`} />
                                        {comment.likes}
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleReply(post.id, comment.author, comment.id)}
                                        className="text-gray-500 hover:text-white hover:bg-white/5 h-8 px-2"
                                      >
                                        <Reply className="w-3.5 h-3.5 mr-1" />
                                        Trả lời
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Comment Input */}
                          <div className="p-3 border-t border-gray-800/50">
                            <div className="flex gap-2">
                              <Avatar className="w-8 h-8 bg-[#2a2a2a] flex-shrink-0">
                                <AvatarImage src="/logo-chankinh-white-03.png" />
                                <AvatarFallback className="text-xs font-semibold text-amber-400">ZP</AvatarFallback>
                              </Avatar>
                              <div className="flex-1 flex gap-2">
                                <input
                                  ref={(el) => {
                                    commentsRefs.current[post.id] = el as HTMLInputElement
                                  }}
                                  type="text"
                                  placeholder={replyTo?.postId === post.id ? `Trả lời ${replyTo.author}...` : "Viết bình luận..."}
                                  className="flex-1 bg-[#2a2a2a] border border-gray-700/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-500"
                                  onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                      handleSubmitComment(post.id)
                                    }
                                  }}
                                />
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-9 w-9 text-gray-500 hover:text-white hover:bg-white/5"
                                >
                                  <Smile className="w-5 h-5" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </main>

            {/* Right Sidebar - Scrollable */}
            <aside className="hidden lg:block lg:col-span-3 h-full overflow-y-auto pl-2 no-scrollbar">
              <div className="py-2 space-y-4">
                {/* Animated Notification Center */}
                <div className="space-y-4 mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 px-2">Thông báo trực tiếp</h3>
                  <div className="relative flex h-[350px] w-full flex-col overflow-hidden">
                    <AnimatedList delay={2500}>
                      {notifications.map((item, idx) => (
                        <NotificationCard {...item} key={idx} />
                      ))}
                    </AnimatedList>
                    {/* Subtle fade effect at bottom for vertical list */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#191919] to-transparent" />
                  </div>
                </div>

                {/* Upcoming Events */}
                <Card className="bg-[#202020] border-gray-800/50 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Sự kiện sắp tới</h3>
                    <Button variant="ghost" size="sm" className="h-8 text-amber-400 hover:text-amber-300">
                      Xem tất cả
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { title: 'Buổi chánh niệm sáng', date: '07:00', location: 'Online' },
                      { title: 'Thiền định kỳ', date: '18:00', location: 'Nhập thất' },
                      { title: 'Chia sẻ thực hành', date: '20:00', location: 'Online' },
                    ].map((event, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber-500/10">
                          <Calendar className="w-5 h-5 text-amber-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{event.title}</p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Footer Links */}
                <div className="text-xs text-gray-600 px-2 space-y-1">
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    <Link href="#" className="hover:text-gray-400">Về chúng tôi</Link>
                    <span>•</span>
                    <Link href="#" className="hover:text-gray-400">Quy định</Link>
                    <span>•</span>
                    <Link href="#" className="hover:text-gray-400">Quyền riêng tư</Link>
                  </div>
                  <p>© 2025 Đạo Tràng. Digital Monastery.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div >
    </div >
  )
}
