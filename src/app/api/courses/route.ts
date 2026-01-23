import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'
import { groq } from 'next-sanity'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.category as string

  try {
    // Build GROQ query
    let query = groq`*[_type == "course"] | order(title asc)`

    // Filter by category if provided
    if (category) {
      query = groq`*[_type == "course" && category == $category] | order(title asc)`
    }

    const courses = await client.fetch(query, { category })

    return NextResponse.json({ courses })
  } catch (error) {
    console.error('Error fetching courses:', error)
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    )
  }
}
