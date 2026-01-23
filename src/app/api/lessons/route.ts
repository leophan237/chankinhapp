import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'
import { groq } from 'next-sanity'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const courseId = searchParams.courseId as string

  try {
    // Build GROQ query
    let query = groq`*[_type == "lesson"] | order(order asc)`

    // Filter by course if provided
    if (courseId) {
      query = groq`*[_type == "lesson" && course._ref == $courseId] | order(order asc)`
    }

    const lessons = await client.fetch(query, { courseId })

    return NextResponse.json({ lessons })
  } catch (error) {
    console.error('Error fetching lessons:', error)
    return NextResponse.json(
      { error: 'Failed to fetch lessons' },
      { status: 500 }
    )
  }
}
