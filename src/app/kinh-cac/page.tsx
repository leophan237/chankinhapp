import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import LibraryClientView from '@/components/feed/LibraryClientView'

export const revalidate = 60

async function getPosts() {
  const query = groq`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    element,
    description,
    publishedAt,
    mainImage
  }`

  try {
    const sanityData = await client.fetch(query)
    return sanityData || []
  } catch (error) {
    console.error("Failed to fetch posts from Sanity:", error)
    return []
  }
}

export default async function KinhCacPage() {
  const posts = await getPosts()

  return <LibraryClientView initialPosts={posts} />
}
