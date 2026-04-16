import {
  Droplets,
  Zap,
  Flame,
  Paintbrush,
  KeyRound,
  Hammer,
  SprayCan,
  TreePine,
  Truck,
  Tv,
} from 'lucide-react'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'
import { Section } from '@/components/layout/Section'

const categories = [
  { label: 'Plomería', icon: Droplets },
  { label: 'Electricidad', icon: Zap },
  { label: 'Gas', icon: Flame },
  { label: 'Pintura', icon: Paintbrush },
  { label: 'Cerrajería', icon: KeyRound },
  { label: 'Albañilería', icon: Hammer },
  { label: 'Limpieza', icon: SprayCan },
  { label: 'Jardinería', icon: TreePine },
  { label: 'Mudanzas', icon: Truck },
  { label: 'Electrodomésticos', icon: Tv },
]

export function CategoriesPreview() {
  return (
    <Section background="accent">
      <FadeInOnScroll>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#1b1c1a]">
            Todos los rubros del hogar, en un solo lugar
          </h2>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.1}>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1b1c1a] font-semibold hover:bg-[#b22c00] hover:text-white transition-all duration-200 cursor-pointer shadow-card"
            >
              <Icon size={18} />
              {label}
            </span>
          ))}
        </div>
      </FadeInOnScroll>
    </Section>
  )
}
