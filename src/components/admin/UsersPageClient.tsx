'use client'

import React, { useState, useMemo } from 'react'
import { UsersTable } from './UsersTable'
import { UsersToolbar } from './UsersToolbar'
import type { ClerkUser } from '@/types/clerk-user'

interface UsersPageClientProps {
  initialUsers: ClerkUser[]
}

export function UsersPageClient({ initialUsers }: UsersPageClientProps) {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter users based on search query
  const filteredUsers = useMemo(() => {
    if (!searchQuery.trim()) {
      return initialUsers
    }

    const query = searchQuery.toLowerCase()
    return initialUsers.filter((user) => {
      const fullName = `${user.firstName || ''} ${user.lastName || ''}`.toLowerCase()
      const email = user.emailAddresses?.[0]?.emailAddress?.toLowerCase() || ''
      const username = user.username?.toLowerCase() || ''

      return (
        fullName.includes(query) ||
        email.includes(query) ||
        username.includes(query)
      )
    })
  }, [initialUsers, searchQuery])

  return (
    <div className="space-y-6">
      <UsersToolbar
        onSearchChange={setSearchQuery}
        searchValue={searchQuery}
      />
      <UsersTable users={filteredUsers} />
    </div>
  )
}
