import Link from 'next/link'
import { BRAND } from '@/lib/constants'

type FooterVariant = 'consumer' | 'provider'

interface FooterProps {
  variant: FooterVariant
}

export function Footer({ variant }: FooterProps) {
  const isConsumer = variant === 'consumer'
  const crossLink = isConsumer
    ? { href: '/profesionales', label: '¿Sos profesional? Registrate' }
    : { href: '/', label: '¿Buscás un experto?' }

  return (
    <footer className="bg-[#1b1c1a] rounded-t-[2rem] mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <span className="font-black text-2xl font-display tracking-tighter text-white">
            {BRAND.name}
          </span>
          <p className="text-gray-400 text-sm">{BRAND.copyright}. Hecho en Argentina con confianza.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href={crossLink.href}
            className="text-[#b22c00] font-bold hover:text-[#ff5c2e] transition-all"
          >
            {crossLink.label}
          </Link>
          <span className="text-gray-500 font-medium cursor-not-allowed">Privacidad</span>
          <span className="text-gray-500 font-medium cursor-not-allowed">Términos</span>
          <span className="text-gray-500 font-medium cursor-not-allowed">Ayuda</span>
        </div>
      </div>
    </footer>
  )
}
