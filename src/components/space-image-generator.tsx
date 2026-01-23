'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wand2, CheckCircle, XCircle, RefreshCw } from 'lucide-react'

interface GenerationResult {
  id: number
  name: string
  filename: string
  path: string
  success: boolean
  error?: string
}

export default function SpaceImageGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [results, setResults] = useState<GenerationResult[]>([])
  const [currentSpace, setCurrentSpace] = useState<string | null>(null)

  const generateAllImages = async () => {
    if (isGenerating) return

    setIsGenerating(true)
    setResults([])
    setCurrentSpace(null)

    try {
      const response = await fetch('/api/generate-all-spaces', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (response.ok) {
        setResults(data.results || [])

        if (data.results && data.results.length > 0) {
          // Reload the page after a short delay to show new images
          setTimeout(() => {
            window.location.reload()
          }, 2000)
        }
      } else {
        console.error('Failed to generate images:', data)
      }
    } catch (error) {
      console.error('Error generating images:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 max-w-sm">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="p-4 rounded-xl border border-silver/30 bg-card/95 backdrop-blur-md shadow-2xl"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-sans text-silver font-semibold">
              Generate Space Images
            </h3>
            {!isGenerating && results.length === 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateAllImages}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-colors font-light"
              >
                <Wand2 className="w-4 h-4" />
                Generate
              </motion.button>
            )}
          </div>

          {isGenerating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-silver/5"
            >
              <RefreshCw className="w-5 h-5 text-silver animate-spin" />
              <span className="text-sm text-foreground font-light">
                Generating images... ({results.length}/6)
              </span>
            </motion.div>
          )}

          {!isGenerating && results.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-2 max-h-60 overflow-y-auto"
            >
              <p className="text-sm text-muted-foreground font-light mb-3">
                Generated {results.filter(r => r.success).length} of {results.length} images
              </p>
              {results.map((result) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex items-center gap-2 p-2 rounded-lg ${
                    result.success
                      ? 'bg-silver/10 border border-silver/20'
                      : 'bg-muted/10 border border-muted/20'
                  }`}
                >
                  {result.success ? (
                    <CheckCircle className="w-4 h-4 text-silver flex-shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {result.name}
                    </p>
                    <p className="text-xs text-muted-foreground/70 truncate">
                      {result.filename}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {!isGenerating && results.length > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="w-full px-4 py-2 rounded-lg bg-silver/10 border border-silver/30 text-silver hover:bg-silver/20 transition-colors font-light flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Reload Page
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  )
}
