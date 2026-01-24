import { getUsers } from '@/actions/admin/get-users'
import { UsersPageClient } from '@/components/admin/UsersPageClient'
import type { ClerkUser } from '@/types/clerk-user'

// Force dynamic rendering since we use auth()
export const dynamic = 'force-dynamic'

/**
 * Helper function to safely convert a date to timestamp
 */
function toTimestamp(date: Date | number | string | null | undefined): number | null {
  if (!date) return null
  if (typeof date === 'number') return date
  try {
    return new Date(date).getTime()
  } catch {
    return null
  }
}

export default async function AdminUsers() {
    // Fetch users from Clerk
    let clerkUsers: ClerkUser[] = []
    try {
        const fetchedUsers = await getUsers(100) // Fetch up to 100 users
        
        // Map Clerk User objects to ClerkUser type expected by components
        clerkUsers = fetchedUsers.map((user): ClerkUser => {
          // Handle emailAddresses - Clerk returns array of EmailAddress objects
          const emailAddresses = Array.isArray(user.emailAddresses)
            ? user.emailAddresses.map((email: any) => ({
                emailAddress: typeof email === 'string' ? email : email?.emailAddress || email?.email_address || ''
              })).filter((e: any) => e.emailAddress)
            : []

          // Handle dates - Clerk may return Date objects or timestamps
          const createdAt = toTimestamp((user as any).createdAt || (user as any).created_at || Date.now())
          const lastActiveAt = toTimestamp((user as any).lastActiveAt || (user as any).last_active_at || null)

          return {
            id: user.id,
            firstName: user.firstName || null,
            lastName: user.lastName || null,
            username: user.username || null,
            imageUrl: user.imageUrl || '',
            emailAddresses,
            publicMetadata: user.publicMetadata || {},
            createdAt: createdAt || Date.now(),
            lastActiveAt,
          }
        })
    } catch (error) {
        console.error('Failed to fetch users:', error)
        // Continue with empty array if fetch fails
    }

    return (
        <div className="space-y-6 animate-fadeIn">
            {/* Header */}
            <header>
                <p className="text-[10px] text-accent uppercase font-bold tracking-[0.3em] mb-1">
                    Entity Management
                </p>
                <h1 className="text-4xl font-extrabold tracking-tight mb-2">
                    Quản Lý Đệ Tử
                </h1>
                <p className="text-sm text-muted-foreground">
                    Total Users: <span className="font-semibold text-foreground">{clerkUsers.length}</span>
                </p>
            </header>

            {/* Toolbar and Users Table with Client-side Search */}
            <div className="gap-6">
                <UsersPageClient initialUsers={clerkUsers} />
            </div>
        </div>
    )
}
