import type { ServiceCategory } from '@/types'

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { label: 'Plomería', icon: 'Droplets', slug: 'plomeria' },
  { label: 'Electricidad', icon: 'Zap', slug: 'electricidad' },
  { label: 'Gas', icon: 'Flame', slug: 'gas' },
  { label: 'Pintura', icon: 'Paintbrush', slug: 'pintura' },
  { label: 'Cerrajería', icon: 'KeyRound', slug: 'cerrajeria' },
  { label: 'Albañilería', icon: 'Hammer', slug: 'albanileria' },
  { label: 'Limpieza', icon: 'SprayCan', slug: 'limpieza' },
  { label: 'Jardinería', icon: 'TreePine', slug: 'jardineria' },
  { label: 'Mudanzas', icon: 'Truck', slug: 'mudanzas' },
  { label: 'Electrodomésticos', icon: 'Tv', slug: 'electrodomesticos' },
] as const

export const PROFESSION_OPTIONS = [
  ...SERVICE_CATEGORIES.map((c) => c.label),
  'Otro',
]

export const BRAND = {
  name: 'Laburito',
  tagline: 'Encontrá al mejor profesional',
  copyright: '© 2026 Laburito',
} as const
