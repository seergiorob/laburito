import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'

type SectionBackground = 'default' | 'light' | 'dark' | 'accent' | 'surface'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: SectionBackground
  container?: boolean
}

const bgStyles: Record<SectionBackground, string> = {
  default: 'bg-[#faf9f5]',
  light: 'bg-[#f5f4f0]',
  dark: 'bg-[#1b1c1a]',
  accent: 'bg-[#ffdbd1]',
  surface: 'bg-[#efeeea]',
}

export function Section({
  background = 'default',
  container = true,
  id,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-24 px-6', bgStyles[background], className)}
      {...props}
    >
      {container ? <Container className="px-0">{children}</Container> : children}
    </section>
  )
}
