import { createClient } from 'next-sanity'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
}

export const client = createClient(config)

// Helper function to generate image URL with Sanity
export function urlFor(source: any) {
  return source
}

export async function getClient() {
  const { createClient } = await import('next-sanity')
  return createClient(config)
}

