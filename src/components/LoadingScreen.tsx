'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-32 h-32 md:w-40 md:h-40"
        >
          <Image
            src="/logo-chankinh-white-03.png"
            alt="Chân Kinh Online"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.div
          className="space-y-2 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-sm font-light tracking-[0.3em] text-muted-foreground">
            ĐANG TẢI...
          </p>
          <div className="flex items-center justify-center gap-2">
            <motion.div
              className="h-0.5 w-8 bg-gradient-to-r from-transparent via-silver-accent to-transparent"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="h-0.5 w-8 bg-gradient-to-r from-transparent via-silver-accent to-transparent"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            />
            <motion.div
              className="h-0.5 w-8 bg-gradient-to-r from-transparent via-silver-accent to-transparent"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
