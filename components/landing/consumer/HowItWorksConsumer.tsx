import { Search, GitCompare, ShieldCheck } from 'lucide-react'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'
import { Section } from '@/components/layout/Section'

const steps = [
  {
    icon: Search,
    number: '1',
    title: 'Buscá',
    description: 'Elegí el servicio que necesitás y tu zona',
  },
  {
    icon: GitCompare,
    number: '2',
    title: 'Compará',
    description: 'Mirá perfiles verificados, reseñas reales y precios claros',
  },
  {
    icon: ShieldCheck,
    number: '3',
    title: 'Contratá tranquilo',
    description: 'Reservá tu turno con garantía de respaldo',
  },
]

export function HowItWorksConsumer() {
  return (
    <Section background="surface">
      <FadeInOnScroll>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#1b1c1a]">
            Con Laburito, en 3 pasos resolvés
          </h2>
        </div>
      </FadeInOnScroll>
      <div className="grid md:grid-cols-3 gap-12 text-center relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-[#e3beb5]" />
        {steps.map(({ icon: Icon, number, title, description }, i) => (
          <FadeInOnScroll key={title} delay={i * 0.15}>
            <div className="relative flex flex-col items-center gap-6">
              <div className="relative">
                <div className="text-[8rem] font-black text-[#e3e2df]/60 absolute -top-16 left-1/2 -translate-x-1/2 select-none">
                  {number}
                </div>
                <div className="relative z-10 w-20 h-20 rounded-full premium-gradient flex items-center justify-center shadow-[0px_8px_24px_rgba(178,44,0,0.25)]">
                  <Icon size={32} className="text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display text-[#1b1c1a]">{title}</h3>
                <p className="text-[#5b413a] leading-relaxed">{description}</p>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </Section>
  )
}
