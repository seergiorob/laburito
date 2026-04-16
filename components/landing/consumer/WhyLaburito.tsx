import { BadgeCheck, Receipt, Star, Shield } from 'lucide-react'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'
import { Section } from '@/components/layout/Section'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Profesionales verificados',
    description: 'Validamos identidad con DNI antes de que publiquen su perfil',
    bg: 'bg-[#505b91]',
    iconBg: 'bg-[#b9c3ff]/30',
    dark: true,
  },
  {
    icon: Receipt,
    title: 'Precios transparentes',
    description: 'Sabés cuánto va a costar antes de decir que sí',
    bg: 'bg-[#e9e8e4]',
    iconBg: 'bg-[#ffdbd1]',
    dark: false,
  },
  {
    icon: Star,
    title: 'Reseñas verificadas',
    description: 'Solo opinan los que realmente contrataron',
    bg: 'bg-[#ff5c2e]',
    iconBg: 'bg-white/20',
    dark: true,
  },
  {
    icon: Shield,
    title: 'Garantía post-servicio',
    description: 'Si algo sale mal en 30 días, Laburito interviene',
    bg: 'bg-[#ffdbd1]',
    iconBg: 'bg-[#b22c00]/10',
    dark: false,
  },
]

export function WhyLaburito() {
  return (
    <Section background="default">
      <FadeInOnScroll>
        <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#1b1c1a] text-center mb-16">
          ¿Por qué Laburito?
        </h2>
      </FadeInOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large featured card */}
        <FadeInOnScroll className="md:col-span-2 md:row-span-1">
          <div className="bg-[#505b91] p-10 rounded-[2.5rem] text-white relative overflow-hidden group flex flex-col md:flex-row items-center gap-8 min-h-[200px]">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BadgeCheck size={160} />
            </div>
            <div className="w-20 h-20 rounded-[1.5rem] bg-white/20 flex items-center justify-center shrink-0">
              <BadgeCheck size={36} className="text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-3">Profesionales verificados</h3>
              <p className="text-white/80 text-lg max-w-xl">
                Validamos identidad, antecedentes y matrículas de cada profesional en la plataforma.
              </p>
              <div className="mt-6">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                  Sello de Confianza Laburito
                </span>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {reasons.slice(1).map(({ icon: Icon, title, description, bg, iconBg, dark }, i) => (
          <FadeInOnScroll key={title} delay={i * 0.1}>
            <div
              className={`${bg} p-10 rounded-[2rem] flex flex-col justify-between gap-8 min-h-[200px] hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center`}>
                <Icon size={28} className={dark ? 'text-white' : 'text-[#b22c00]'} />
              </div>
              <div>
                <h3 className={`text-2xl font-black mb-2 ${dark ? 'text-white' : 'text-[#1b1c1a]'}`}>
                  {title}
                </h3>
                <p className={dark ? 'text-white/80' : 'text-[#5b413a]'}>{description}</p>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </Section>
  )
}
