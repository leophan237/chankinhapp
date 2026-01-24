'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface MysticRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function MysticReveal({
  children,
  delay = 0,
  className = '',
  threshold = 0.1,
}: MysticRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: 'blur(4px)',
      }}
      animate={
        isInView
          ? {
            opacity: 1,
            filter: 'blur(0px)',
          }
          : {
            opacity: 0,
            filter: 'blur(4px)',
          }
      }
      transition={{
        duration: 1.5,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
