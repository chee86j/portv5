'use client'

import { motion, useReducedMotion } from 'motion/react'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
}

export function FadeInSection({ children, className }: FadeInSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
