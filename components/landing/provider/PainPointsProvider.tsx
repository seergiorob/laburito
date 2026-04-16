import { Smartphone, CalendarX, Eye } from 'lucide-react'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'
import { Section } from '@/components/layout/Section'

const painPoints = [
  {
    icon: Smartphone,
    title: 'Dependés de que alguien te recomiende por WhatsApp',
    description:
      'Si no te pasan un número, el teléfono no suena. Vivís esperando que un cliente te recomiende.',
  },
  {
    icon: CalendarX,
    title: 'No sabés si la semana que viene vas a tener laburo',
    description:
      'Hay semanas con mil pedidos y otras donde no pasa nada. No podés proyectar tus ingresos con seguridad.',
  },
  {
    icon: Eye,
    title: 'Tu experiencia de 20 años no se ve en ningún lado',
    description:
      'Los clientes nuevos no saben lo bien que trabajás porque tus reseñas no están en ningún lado centralizado.',
  },
]

export function PainPointsProvider() {
  return (
    <Section background="light">
      <FadeInOnScroll>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#1b1c1a]">
            Hacés un laburo excelente,{' '}
            <span className="text-[#b22c00]">pero nadie nuevo te conoce</span>
          </h2>
          <p className="text-[#5b413a] text-lg max-w-2xl mx-auto">
            El boca a boca es bueno, pero no alcanza para llenar tu agenda.
          </p>
        </div>
      </FadeInOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {painPoints.map(({ icon: Icon, title, description }, i) => (
          <FadeInOnScroll key={title} delay={i * 0.1}>
            <div className="bg-white p-10 rounded-[2rem] space-y-6 group hover:-translate-y-2 transition-all duration-300 shadow-card">
              <div className="w-14 h-14 bg-[#e9e8e4] rounded-2xl flex items-center justify-center group-hover:bg-[#ffdbd1] transition-colors">
                <Icon size={28} className="text-[#b22c00]" />
              </div>
              <h3 className="text-xl font-bold text-[#1b1c1a] leading-tight">{title}</h3>
              <p className="text-[#5b413a] leading-relaxed">{description}</p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </Section>
  )
}
