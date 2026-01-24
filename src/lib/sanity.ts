import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
}

export const client = createClient(config)

const builder = createImageUrlBuilder(config)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getClient() {
  const { createClient } = await import('next-sanity')
  return createClient(config)
}

