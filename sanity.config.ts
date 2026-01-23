import { defineConfig } from 'next-sanity'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemas'

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  basePath: '/studio',
  schema,
  plugins: [
    visionTool(),
  ],
})
