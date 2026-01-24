'use server'

import { clerkClient, auth } from '@clerk/nextjs/server'
import type { User } from '@clerk/nextjs/server'

/**
 * Check if the current user has admin role
 */
async function checkRole(): Promise<boolean> {
  try {
    const { sessionClaims } = await auth()
    return sessionClaims?.metadata?.role === 'admin'
  } catch (error) {
    console.error('Error checking role:', error)
    return false
  }
}

/**
 * Server Action to fetch users from Clerk
 * @param limit - Maximum number of users to fetch (default: 20)
 * @param query - Search query to filter users (default: '')
 * @returns Array of user objects
 * @throws Error if user is not authorized or if Clerk API call fails
 */
export async function getUsers(limit: number = 20, query: string = ''): Promise<User[]> {
  // Security check: Verify user has admin role
  const isAdmin = await checkRole()
  if (!isAdmin) {
    throw new Error('Unauthorized: Admin access required')
  }

  try {
    const client = await clerkClient()
    
    // Fetch users from Clerk with pagination and ordering
    const userList = await client.users.getUserList({
      limit,
      query: query || undefined,
      orderBy: '-created_at', // Newest users first
    })

    // Return the user objects (they are already serializable)
    return userList.data || []
  } catch (error) {
    console.error('Error fetching users from Clerk:', error)
    throw new Error('Failed to fetch users from Clerk')
  }
}
