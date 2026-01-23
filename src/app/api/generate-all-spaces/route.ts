import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'spaces')

const spaces = [
  {
    id: 1,
    name: 'Zen Garden Room',
    filename: 'zen-garden-room.jpg',
    prompt: 'A serene meditation room with large windows overlooking a zen garden, natural light streaming in, minimalist furniture with cushions, potted plants, bamboo accents, warm atmosphere, modern interior design, professional photography style'
  },
  {
    id: 2,
    name: 'Lotus Hall',
    filename: 'lotus-hall.jpg',
    prompt: 'A modern co-working meeting hall, spacious open layout with round tables, collaborative atmosphere, modern lighting fixtures, clean minimalist design, natural light, professional office space, wide angle view'
  },
  {
    id: 3,
    name: 'Mindful Corner',
    filename: 'mindful-corner.jpg',
    prompt: 'A private quiet workspace corner, ergonomic desk setup, personal touch with small plants and decorative items, warm ambient lighting, cozy atmosphere, focused work environment, intimate workspace'
  },
  {
    id: 4,
    name: 'Tea Lounge',
    filename: 'tea-lounge.jpg',
    prompt: 'A relaxing tea lounge area with comfortable seating, low tables, soft lighting, plants and natural elements, social gathering space, warm and welcoming atmosphere, zen interior design, people networking'
  },
  {
    id: 5,
    name: 'Focus Pod',
    filename: 'focus-pod.jpg',
    prompt: 'A modern focus pod workspace, soundproof glass pod, ergonomic desk setup inside, calm dark interior, minimalist design, deep work environment, productivity-focused space'
  },
  {
    id: 6,
    name: 'Collaborative Space',
    filename: 'collaborative-space.jpg',
    prompt: 'A vibrant collaborative co-working space, multiple workstations, hot desks, shared area, creative atmosphere, modern industrial design, people working together, dynamic environment'
  }
]

export async function POST(request: NextRequest) {
  try {
    const zai = await ZAI.create()

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true })
    }

    const results = []

    for (const space of spaces) {
      try {
        console.log(`Generating image for: ${space.name}`)

        const response = await zai.images.generations.create({
          prompt: space.prompt,
          size: '1024x1024'
        })

        if (response.data && response.data[0] && response.data[0].base64) {
          const imageBase64 = response.data[0].base64
          const buffer = Buffer.from(imageBase64, 'base64')

          const outputPath = path.join(OUTPUT_DIR, space.filename)
          fs.writeFileSync(outputPath, buffer)

          results.push({
            id: space.id,
            name: space.name,
            filename: space.filename,
            path: `/spaces/${space.filename}`,
            success: true
          })

          console.log(`✓ Generated: ${space.filename}`)

          // Wait a bit between generations to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 1000))
        } else {
          results.push({
            id: space.id,
            name: space.name,
            filename: space.filename,
            success: false,
            error: 'No valid image data received'
          })
        }
      } catch (error) {
        console.error(`✗ Failed to generate: ${space.name}`, error)
        results.push({
          id: space.id,
          name: space.name,
          filename: space.filename,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    return NextResponse.json({
      success: true,
      total: results.length,
      successful: results.filter(r => r.success).length,
      results
    })
  } catch (error) {
    console.error('Batch image generation error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'Use POST to generate all space images',
    spaces: spaces.map(s => ({ id: s.id, name: s.name }))
  })
}
