import { Search, DollarSign, ShieldX } from 'lucide-react'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'
import { Section } from '@/components/layout/Section'

const painPoints = [
  {
    icon: Search,
    title: 'Buscás en Google y no sabés si es confiable',
    description:
      'No sabés quién es, si es de confianza o si tiene malas referencias. El miedo a lo desconocido es real.',
  },
  {
    icon: DollarSign,
    title: 'El precio cambia cuando el técnico ya está en tu casa',
    description:
      'Te dicen un número por teléfono y cuando llegan es otro. Sin presupuestos claros ni transparencia.',
  },
  {
    icon: ShieldX,
    title: 'Si el trabajo queda mal, no tenés a quién reclamar',
    description:
      'Si algo queda mal, desaparecen. No tenés a quién reclamar y el problema sigue ahí.',
  },
]

export function PainPointsConsumer() {
  return (
    <Section background="light">
      <FadeInOnScroll>
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#1b1c1a]">
            Contratar un técnico hoy es{' '}
            <span className="text-[#ba1a1a]">un dolor de cabeza</span>
          </h2>
          <p className="text-[#5b413a] text-lg max-w-2xl mx-auto">
            Las opciones de hoy no te dan seguridad ni transparencia.
          </p>
        </div>
      </FadeInOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {painPoints.map(({ icon: Icon, title, description }, i) => (
          <FadeInOnScroll key={title} delay={i * 0.1}>
            <div className="bg-white p-10 rounded-[2rem] space-y-6 group hover:-translate-y-2 transition-all duration-300 shadow-card">
              <div className="w-14 h-14 bg-[#ffdad6] rounded-2xl flex items-center justify-center group-hover:bg-[#ffdbd1] transition-colors">
                <Icon size={28} className="text-[#ba1a1a]" />
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
