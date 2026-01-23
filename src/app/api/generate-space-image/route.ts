import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'spaces')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { prompt, filename } = body

    if (!prompt || !filename) {
      return NextResponse.json(
        { error: 'Prompt and filename are required' },
        { status: 400 }
      )
    }

    const zai = await ZAI.create()

    const response = await zai.images.generations.create({
      prompt: prompt,
      size: '1024x1024'
    })

    if (!response.data || !response.data[0] || !response.data[0].base64) {
      return NextResponse.json(
        { error: 'Failed to generate image' },
        { status: 500 }
      )
    }

    const imageBase64 = response.data[0].base64
    const buffer = Buffer.from(imageBase64, 'base64')

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true })
    }

    const outputPath = path.join(OUTPUT_DIR, filename)
    fs.writeFileSync(outputPath, buffer)

    return NextResponse.json({
      success: true,
      path: `/spaces/${filename}`,
      prompt: prompt
    })
  } catch (error) {
    console.error('Image generation error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
