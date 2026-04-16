'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

type HeaderVariant = 'consumer' | 'provider'

interface HeaderProps {
  variant: HeaderVariant
}

export function Header({ variant }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const isConsumer = variant === 'consumer'

  const crossLink = isConsumer
    ? { href: '/profesionales', label: '¿Sos profesional?' }
    : { href: '/', label: '¿Necesitás un servicio?' }

  const ctaLabel = isConsumer ? 'Empezar' : 'Sumarme'
  const ctaHref = isConsumer ? '#registro' : '#registro'

  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-[0px_12px_32px_rgba(27,28,26,0.06)]">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black font-display tracking-tighter text-[#1b1c1a] hover:text-[#b22c00] transition-colors"
        >
          Laburito
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={crossLink.href}
            className="font-medium text-[#1b1c1a] hover:text-[#b22c00] transition-colors duration-300"
          >
            {crossLink.label}
          </Link>
          <a
            href={ctaHref}
            className="premium-gradient text-white px-6 py-2.5 rounded-xl font-bold tracking-tight shadow-[0px_8px_24px_rgba(178,44,0,0.2)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1b1c1a]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          mobileOpen ? 'max-h-40' : 'max-h-0',
        )}
      >
        <div className="flex flex-col gap-4 px-6 pb-6">
          <Link
            href={crossLink.href}
            className="font-medium text-[#1b1c1a] hover:text-[#b22c00] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {crossLink.label}
          </Link>
          <a
            href={ctaHref}
            className="premium-gradient text-white px-6 py-3 rounded-xl font-bold text-center"
            onClick={() => setMobileOpen(false)}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  )
}
