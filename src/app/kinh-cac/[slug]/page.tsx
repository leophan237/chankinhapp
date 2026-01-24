import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import PostFeedContainer from '@/components/feed/PostFeedContainer'
import { MOCK_POSTS, Post } from '@/lib/mockData'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  // Check mock data first
  const mockPost = MOCK_POSTS.find(p => p.slug.current === slug)
  if (mockPost) {
    return {
      title: `${mockPost.title} | Chân Kinh Online`,
      description: mockPost.description || mockPost.excerpt,
    }
  }

  const query = `*[_type == "post" && slug.current == $slug][0] { title, description, excerpt }`
  let post: any = null
  try {
    post = await client.fetch(query, { slug })
  } catch (error) {
    console.error("Metadata fetch failed", error)
  }

  if (!post) {
    return {
      title: `Chân Kinh | Sacred Knowledge`,
      description: 'Sacred Knowledge Archive',
    }
  }

  return {
    title: `${post.title} | Chân Kinh Online`,
    description: post.description || post.excerpt,
  }
}

// Revalidate every 60 seconds
export const revalidate = 60

export default async function PostPage({ params }: Props) {
  const { slug } = await params

  const query = `
    *[_type == "post"] | order(publishedAt desc) [0...50] {
      _id,
      title,
      slug,
      description,
      excerpt,
      mainImage,
      publishedAt,
      readTime,
      "elementName": element,
      "element": element,
      content
    }
  `

  let sanityPosts: any[] = []
  try {
    sanityPosts = await client.fetch(query)
  } catch (error) {
    console.error("Failed to fetch sanity posts", error)
  }

  // Merge Sanity posts with Mock posts
  const allPosts = [...(sanityPosts || [])]
  MOCK_POSTS.forEach(mock => {
    if (!allPosts.some(p => p._id === mock._id)) {
      allPosts.push(mock)
    }
  })

  // Verify the current slug exists in the returned list
  const currentPost = allPosts.find((p: any) => p.slug.current === slug)

  if (!currentPost) {
    return notFound()
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      <PostFeedContainer initialPosts={allPosts} initialSlug={slug} />
    </div>
  )
}
