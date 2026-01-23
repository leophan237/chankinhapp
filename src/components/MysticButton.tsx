'use client';

import { motion } from 'framer-motion';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface MysticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function MysticButton({ children, onClick, className = '', ...props }: MysticButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative h-12 px-8 rounded-lg font-sans text-base
        flex items-center justify-center cursor-pointer
        text-silver/70
        transition-all duration-500
        bg-gradient-to-br from-card to-background
        border border-silver/20
        ${className}
      `}
      style={{
        boxShadow: '-1px -5px 15px rgba(148, 163, 184, 0.1), 5px 5px 15px rgba(148, 163, 184, 0.1), inset 5px 5px 10px rgba(0, 0, 0, 0.3), inset -5px -5px 10px rgba(0, 0, 0, 0.3)',
      }}
      whileHover={{
        boxShadow: '1px 1px 13px rgba(0, 0, 0, 0.4), -1px -1px 13px rgba(148, 163, 184, 0.15)',
        color: 'rgba(214, 214, 214, 1)',
        transition: { duration: 0.5 },
      }}
      whileTap={{
        boxShadow: '1px 1px 13px rgba(0, 0, 0, 0.4), -1px -1px 33px rgba(148, 163, 184, 0.2)',
        color: 'rgba(214, 214, 214, 1)',
        transition: { duration: 0.1 },
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
