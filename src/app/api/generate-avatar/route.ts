import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

// Avatar prompts for different users
const avatarPrompts = {
  'minh-tam': 'A serene Vietnamese woman meditating, wearing simple white clothing, calm and peaceful expression, warm soft lighting, minimalist portrait, high quality, 1024x1024',
  'thien-dien': 'A wise Vietnamese Buddhist monk with peaceful expression, wearing traditional robes, serene meditation pose, soft lighting, minimalist portrait, 1024x1024',
  'nguyen-an': 'A thoughtful Vietnamese man in meditation, simple calm clothing, peaceful expression, soft natural lighting, minimalist portrait, 1024x1024',
  'phuong-huong': 'A gentle Vietnamese woman with kind compassionate expression, in meditation pose, soft warm lighting, minimalist portrait, 1024x1024',
  'user-1': 'A serene person in meditation, peaceful expression, minimalist avatar style, soft colors, 1024x1024',
  'user-2': 'A calm individual in meditation pose, peaceful and centered, minimalist design, soft lighting, 1024x1024',
}

// Ensure output directory exists
const outputDir = join(process.cwd(), 'public', 'avatars')
try {
  mkdirSync(outputDir, { recursive: true })
} catch (error) {
  // Directory already exists
}

export async function POST(request: NextRequest) {
  try {
    const { avatarId } = await request.json()

    if (!avatarId || !avatarPrompts[avatarId as keyof typeof avatarPrompts]) {
      return NextResponse.json(
        { error: 'Invalid avatar ID. Available: ' + Object.keys(avatarPrompts).join(', ') },
        { status: 400 }
      )
    }

    const prompt = avatarPrompts[avatarId as keyof typeof avatarPrompts]
    
    // Initialize ZAI
    const zai = await ZAI.create()

    // Generate image
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

    // Save image to public/avatars directory
    const filename = `avatar_${avatarId}.png`
    const filepath = join(outputDir, filename)
    writeFileSync(filepath, buffer)

    return NextResponse.json({
      success: true,
      avatarId: avatarId,
      filename: filename,
      url: `/avatars/${filename}`
    })

  } catch (error: any) {
    console.error('Avatar generation error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to generate avatar' },
      { status: 500 }
    )
  }
}

// GET endpoint to list available avatars
export async function GET() {
  return NextResponse.json({
    available: Object.keys(avatarPrompts),
    avatars: avatarPrompts
  })
}
