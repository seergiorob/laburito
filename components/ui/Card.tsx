import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  accent?: boolean
}

export function Card({ hover = false, accent = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-[2rem] p-10 shadow-[0_1px_3px_rgba(0,0,0,0.06),_0_4px_12px_rgba(0,0,0,0.04)]',
        hover &&
          'transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08),_0_8px_24px_rgba(0,0,0,0.06)]',
        accent && 'border-t-4 border-t-[#ff5c2e]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
