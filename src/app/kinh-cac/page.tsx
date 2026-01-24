import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import LibraryClientView from '@/components/feed/LibraryClientView'
import { MOCK_POSTS } from '@/lib/mockData'

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
  const sanityPosts = await getPosts()

  // Merge Sanity posts with Mock posts
  const allPosts = [...(sanityPosts || [])]
  MOCK_POSTS.forEach(mock => {
    if (!allPosts.some(p => p._id === mock._id)) {
      allPosts.push(mock)
    }
  })

  return <LibraryClientView initialPosts={allPosts} />
}
