import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn('max-w-7xl mx-auto px-6', className)}
      {...props}
    >
      {children}
    </div>
  )
}
