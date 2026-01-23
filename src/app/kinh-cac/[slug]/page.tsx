'use client'

import { use } from 'react'
import PostPageContent from './post-content'

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  return <PostPageContent slug={slug} />
}
