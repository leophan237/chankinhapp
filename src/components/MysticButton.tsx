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
        relative px-6 py-3 font-sans text-base
        flex items-center justify-center cursor-pointer
        text-silver/60 hover:text-white
        transition-all duration-300
        bg-transparent group
        ${className}
      `}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Animated underline effect */}
      <motion.div 
        className="absolute bottom-0 left-1/2 h-[1px] bg-gradient-to-r from-transparent via-silver/60 to-transparent"
        initial={{ width: 0, x: "-50%", opacity: 0 }}
        whileHover={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.button>
  );
}
