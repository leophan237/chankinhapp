'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Scroll,
  Book,
  Package,
  Sun,
  GraduationCap,
  Users,
  Building2,
  Menu,
  X,
  Map,
} from 'lucide-react'

interface NavItem {
  name: string
  path: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { name: 'Khai Kinh', path: '/', icon: Home },
  { name: 'Tông Chỉ', path: '/tong-chi', icon: Scroll },
  { name: 'Kinh Các', path: '/kinh-cac', icon: Book },
  { name: 'Kinh Bộ', path: '/kinh-bo', icon: Package },
  { name: 'Hành', path: '/hanh', icon: Sun },
  { name: 'Học Luyện', path: '/hoc-luyen', icon: GraduationCap },
  { name: 'Đạo Tràng', path: '/dao-trang', icon: Users },
  { name: 'Tịnh Trang', path: '/tinh-trang', icon: Building2 },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()

  // Dropdown with delayed close for better UX
  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:border-silver/50 transition-colors lg:hidden"
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </motion.button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 h-full w-72 bg-background/95 backdrop-blur-md border-r border-border/30 z-40 overflow-y-auto lg:hidden"
      >
        <div className="p-6 space-y-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-silver/30 flex items-center justify-center bg-card">
                <img
                  src="/logo-chankinh-white-03.png"
                  alt="Chân Kinh Online Logo"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div>
                <h2 className="font-sans text-gradient-silver text-lg font-semibold">
                  Chân Kinh Online
                </h2>
                <p className="text-xs text-muted-foreground font-light">
                  Digital Monastery
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Map className="w-4 h-4" />
              <span className="font-light">Bản Đồ Thiền Đường</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path
              const Icon = item.icon

              return (
                <motion.div key={item.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="group relative inline-flex items-center gap-3 px-4 py-3 rounded-lg font-sans text-sm text-silver/70"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-silver/5 rounded-lg"
                        initial={false}
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-transparent via-silver to-transparent rounded-full"
                        initial={false}
                        transition={{
                          type: 'spring',
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    <motion.div
                      className="relative z-10 flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border/50"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', duration: 0.2 }}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors ${
                          isActive ? 'text-silver' : 'text-muted-foreground group-hover:text-foreground'
                        }`}
                      />
                    </motion.div>

                    <span className="relative z-10 font-sans font-light tracking-wide">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Footer Info */}
          <div className="pt-6 border-t border-border/30">
            <p className="text-xs text-muted-foreground text-center font-light leading-relaxed">
              Mọi con đường đều dẫn vào bên trong
            </p>
            <p className="text-xs text-muted-foreground/50 text-center mt-2 font-light">
              © 2024 Chân Kinh Online
            </p>
          </div>
        </div>
      </motion.aside>

      {/* Desktop - Sticky Mini Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="hidden lg:flex fixed top-0 left-0 right-0 z-30 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/30"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-silver/30 flex items-center justify-center bg-card">
              <img
                src="/logo-chankinh-white-03.png"
                alt="Chân Kinh Online Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="font-sans text-gradient-silver font-semibold">
              Chân Kinh Online
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-2">
            {navItems.slice(0, 5).map((item) => {
              const isActive = pathname === item.path
              const Icon = item.icon

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-lg font-sans text-sm text-silver/70"
                >
                  {isActive && (
                    <motion.div
                      layoutId="desktopNavActive"
                      className="absolute inset-0 bg-silver/5 rounded-lg"
                      initial={false}
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  <div className="relative z-10 flex items-center gap-2">
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? 'text-silver' : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    />
                    <span className="text-sm font-light">{item.name}</span>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="desktopNavLine"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-silver to-transparent"
                      initial={false}
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              )
            })}

            {/* More Items Dropdown Trigger */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-card/50 flex items-center gap-2"
              >
                <Map className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-light">Thêm</span>
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 z-50"
                  >
                    {/* Invisible padding div to expand hit area */}
                    <div
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                      className="py-12 -mx-4 -my-4"
                    >
                      {/* Dropdown content */}
                      <div className="relative mt-2 w-48 bg-card/95 backdrop-blur-md border border-border/50 rounded-lg shadow-xl overflow-hidden">
                        {navItems.slice(5).map((item) => {
                          const isActive = pathname === item.path
                          const Icon = item.icon

                          return (
                            <Link
                              key={item.path}
                              href={item.path}
                              onClick={() => setIsDropdownOpen(false)}
                              className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                                isActive ? 'bg-silver/10 text-silver' : 'hover:bg-card/50 text-muted-foreground'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                              <span className="text-sm font-light">{item.name}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
