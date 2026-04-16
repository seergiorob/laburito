import { UserPlus, BadgeCheck, BellRing } from 'lucide-react'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'
import { Section } from '@/components/layout/Section'

const steps = [
  {
    icon: UserPlus,
    number: '1',
    title: 'Registrate',
    description: 'Creá tu perfil con tu experiencia, zona y rubros',
  },
  {
    icon: BadgeCheck,
    number: '2',
    title: 'Verificate',
    description: 'Validamos tu identidad para que los clientes confíen',
  },
  {
    icon: BellRing,
    number: '3',
    title: 'Recibí trabajos',
    description: 'Te llegan solicitudes de clientes cerca tuyo',
  },
]

export function HowItWorksProvider() {
  return (
    <Section background="default">
      <FadeInOnScroll>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#1b1c1a]">
            Tu perfil profesional,{' '}
            <span className="text-[#505b91]">visible para miles</span>
          </h2>
        </div>
      </FadeInOnScroll>
      <div className="space-y-8">
        {steps.map(({ icon: Icon, number, title, description }, i) => (
          <FadeInOnScroll key={title} delay={i * 0.1}>
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 shrink-0 rounded-full premium-gradient text-white flex items-center justify-center font-black text-xl shadow-[0px_8px_24px_rgba(178,44,0,0.25)]">
                {number}
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-xl font-bold mb-1 text-[#1b1c1a]">{title}</h4>
                <p className="text-[#5b413a] leading-relaxed">{description}</p>
              </div>
              <div className="hidden md:flex w-14 h-14 shrink-0 rounded-2xl bg-[#ffdbd1] items-center justify-center">
                <Icon size={24} className="text-[#b22c00]" />
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </Section>
  )
}
