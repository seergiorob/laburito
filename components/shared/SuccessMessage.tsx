'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

interface SuccessMessageProps {
  title: string
  description: string
}

export function SuccessMessage({ title, description }: SuccessMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-6 py-16 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center"
      >
        <CheckCircle2 size={40} className="text-green-600" />
      </motion.div>
      <div className="space-y-2">
        <h3 className="text-2xl font-black font-display text-[#1b1c1a]">{title}</h3>
        <p className="text-[#5b413a] max-w-sm mx-auto leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
