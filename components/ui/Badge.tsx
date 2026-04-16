import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type BadgeVariant = 'trust' | 'accent' | 'primary' | 'success'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  trust: 'bg-[#505b91] text-white',
  accent: 'bg-[#ffdbd1] text-[#b22c00]',
  primary: 'bg-[#ff5c2e] text-white',
  success: 'bg-green-100 text-green-800',
}

export function Badge({ variant = 'accent', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase',
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
