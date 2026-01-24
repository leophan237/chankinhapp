'use client'

import React from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { MoreVertical } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import type { ClerkUser } from '@/types/clerk-user'

interface UsersTableProps {
  users: ClerkUser[]
}

export function UsersTable({ users }: UsersTableProps) {
  const getUserInitials = (user: ClerkUser) => {
    const firstName = user.firstName || ''
    const lastName = user.lastName || ''
    if (firstName && lastName) {
      return `${firstName[0]}${lastName[0]}`.toUpperCase()
    }
    if (user.emailAddresses?.[0]?.emailAddress) {
      return user.emailAddresses[0].emailAddress[0].toUpperCase()
    }
    return 'U'
  }

  const getUserFullName = (user: ClerkUser) => {
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`
    }
    if (user.firstName) {
      return user.firstName
    }
    if (user.username) {
      return user.username
    }
    return user.emailAddresses?.[0]?.emailAddress || 'Unknown User'
  }

  const getUserEmail = (user: ClerkUser) => {
    return user.emailAddresses?.[0]?.emailAddress || 'No email'
  }

  const getUserRole = (user: ClerkUser) => {
    return (user.publicMetadata?.role as string) || 'member'
  }

  const formatJoinedDate = (date: Date | number) => {
    return format(new Date(date), 'dd/MM/yyyy')
  }

  const formatLastActive = (date: Date | number | null | undefined) => {
    if (!date) return 'Never'
    try {
      return formatDistanceToNow(new Date(date), { addSuffix: true })
    } catch {
      return 'Unknown'
    }
  }

  return (
    <div className="rounded-3xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/10 dark:bg-black/20">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
              <th className="p-6 text-xs uppercase tracking-wider text-gray-500 font-bold">
                User
              </th>
              <th className="p-6 text-xs uppercase tracking-wider text-gray-500 font-bold">
                Role
              </th>
              <th className="p-6 text-xs uppercase tracking-wider text-gray-500 font-bold">
                Joined Date
              </th>
              <th className="p-6 text-xs uppercase tracking-wider text-gray-500 font-bold">
                Last Active
              </th>
              <th className="p-6 text-xs uppercase tracking-wider text-gray-500 font-bold text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium">
            {users.map((user) => {
              const role = getUserRole(user)
              const isAdmin = role === 'admin'

              return (
                <tr
                  key={user.id}
                  className="border-b border-white/5 dark:border-white/5 last:border-0 hover:bg-white/5 dark:hover:bg-black/5 transition-colors group"
                >
                  {/* User Info Column */}
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-10 h-10 border-2 border-white/10">
                        {user.imageUrl ? (
                          <AvatarImage
                            src={user.imageUrl}
                            alt={getUserFullName(user)}
                          />
                        ) : null}
                        <AvatarFallback className="bg-accent/20 text-accent font-bold text-sm">
                          {getUserInitials(user)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-gray-900 dark:text-white font-bold">
                          {getUserFullName(user)}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {getUserEmail(user)}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Role Badge Column */}
                  <td className="p-6">
                    <span
                      className={cn(
                        'text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl border',
                        isAdmin
                          ? 'text-amber-400 bg-amber-400/10 border-amber-400/20 shadow-[0_0_12px_rgba(251,191,36,0.2)]'
                          : 'text-blue-400 dark:text-blue-300 bg-blue-400/10 dark:bg-blue-300/10 border-blue-400/20 dark:border-blue-300/20'
                      )}
                    >
                      {isAdmin ? 'Admin' : 'Member'}
                    </span>
                  </td>

                  {/* Joined Date Column */}
                  <td className="p-6 text-gray-700 dark:text-gray-300">
                    {user.createdAt
                      ? formatJoinedDate(user.createdAt)
                      : 'N/A'}
                  </td>

                  {/* Last Active Column */}
                  <td className="p-6 text-gray-500 dark:text-gray-400">
                    {formatLastActive(user.lastActiveAt)}
                  </td>

                  {/* Actions Column */}
                  <td className="p-6 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                          aria-label="User actions"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-white/95 dark:bg-black/95 backdrop-blur-md border border-white/20 dark:border-white/10"
                      >
                        <DropdownMenuItem className="cursor-pointer">
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-500 focus:text-red-500">
                          Suspend User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {users.length === 0 && (
        <div className="p-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No users found
          </p>
        </div>
      )}
    </div>
  )
}
