'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, RefreshCw } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface UsersToolbarProps {
  onSearchChange?: (query: string) => void
  searchValue?: string
}

export function UsersToolbar({ onSearchChange, searchValue = '' }: UsersToolbarProps) {
  const router = useRouter()
  const [search, setSearch] = useState(searchValue)

  // Sync search state with prop changes
  React.useEffect(() => {
    setSearch(searchValue)
  }, [searchValue])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    onSearchChange?.(value)
  }

  const handleRefresh = () => {
    router.refresh()
  }

  return (
    <div className="flex items-center gap-4">
      {/* Search Input - Glass Style */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <Input
          type="text"
          placeholder="Tìm kiếm đệ tử..."
          value={search}
          onChange={handleSearchChange}
          className={cn(
            "pl-10 rounded-2xl backdrop-blur-md transition-all duration-300",
            "bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10",
            "focus-visible:bg-white/20 dark:focus-visible:bg-black/30",
            "placeholder:text-gray-400 dark:placeholder:text-gray-500"
          )}
        />
      </div>

      {/* Refresh Button */}
      <Button
        onClick={handleRefresh}
        variant="outline"
        size="default"
        className={cn(
          "rounded-2xl backdrop-blur-md transition-all duration-300",
          "bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10",
          "hover:bg-white/20 dark:hover:bg-black/30",
          "text-gray-700 dark:text-gray-300"
        )}
      >
        <RefreshCw className="w-4 h-4" />
        <span className="hidden sm:inline">Làm mới</span>
      </Button>
    </div>
  )
}
