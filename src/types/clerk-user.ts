/**
 * Shared type definition for Clerk User objects
 * Used across admin components to ensure type consistency
 */
export type ClerkUser = {
  id: string
  firstName: string | null
  lastName: string | null
  username: string | null
  imageUrl: string
  emailAddresses: Array<{ emailAddress: string }>
  publicMetadata?: Record<string, unknown>
  createdAt: number
  lastActiveAt: number | null
}
