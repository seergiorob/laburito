import { Users, Star, CalendarCheck, Banknote } from 'lucide-react'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'
import { Section } from '@/components/layout/Section'

const benefits = [
  {
    icon: Users,
    title: 'Los clientes te buscan a vos',
    description:
      'Dejá de perseguir presupuestos. Recibí notificaciones directas de personas que ya están buscando tu oficio.',
    bg: 'bg-[#e9e8e4]',
    dark: false,
    large: true,
  },
  {
    icon: Star,
    title: 'Reputación digital',
    description:
      'Construí un perfil con fotos de tus trabajos y reseñas reales que nadie puede borrar.',
    bg: 'bg-[#505b91]',
    dark: true,
    large: false,
  },
  {
    icon: CalendarCheck,
    title: 'Agenda organizada',
    description: 'Gestioná tus turnos desde un solo lugar. Menos desorden, más laburo.',
    bg: 'bg-white',
    dark: false,
    large: false,
  },
  {
    icon: Banknote,
    title: 'Vos ponés el precio',
    description:
      'No somos intermediarios de cobro. Vos negociás directamente y te quedás con el 100% de tu ganancia.',
    bg: 'bg-[#1b1c1a]',
    dark: true,
    large: true,
  },
]

export function BenefitsProvider() {
  return (
    <Section background="default">
      <FadeInOnScroll>
        <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#1b1c1a] mb-16">
          ¿Qué te da Laburito?
        </h2>
      </FadeInOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large card 1 */}
        <FadeInOnScroll className="md:col-span-2">
          <div className="bg-[#e9e8e4] p-10 rounded-[2.5rem] relative overflow-hidden group min-h-[200px] h-full">
            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-4 text-[#1b1c1a]">
                Los clientes te buscan a vos
              </h3>
              <p className="text-[#5b413a] text-lg max-w-md">
                Dejá de perseguir presupuestos. Recibí notificaciones directas de personas que
                ya están buscando tu oficio específico.
              </p>
            </div>
            <Users
              size={180}
              className="absolute -bottom-8 -right-8 text-white/30 rotate-12 group-hover:rotate-0 transition-transform duration-700"
            />
          </div>
        </FadeInOnScroll>

        {/* Card 2 */}
        <FadeInOnScroll delay={0.1}>
          <div className="bg-[#505b91] p-10 rounded-[2.5rem] text-white flex flex-col justify-between min-h-[200px] h-full">
            <Star size={48} className="text-white/80" />
            <div>
              <h3 className="text-2xl font-black mb-2">Reputación digital</h3>
              <p className="text-[#b9c3ff]">
                Construí un perfil con fotos de tus trabajos y reseñas reales que nadie puede
                borrar ni manipular.
              </p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Card 3 */}
        <FadeInOnScroll delay={0.1}>
          <div className="bg-white border border-[#e9e8e4] p-10 rounded-[2.5rem] flex flex-col justify-between hover:shadow-xl transition-shadow min-h-[200px] h-full">
            <div>
              <h3 className="text-2xl font-black mb-2 text-[#b22c00]">Agenda organizada</h3>
              <p className="text-[#5b413a]">
                Gestioná tus turnos desde un solo lugar. Menos desorden, más laburo.
              </p>
            </div>
            <CalendarCheck size={40} className="text-[#b22c00]/30" />
          </div>
        </FadeInOnScroll>

        {/* Large card 4 */}
        <FadeInOnScroll delay={0.15} className="md:col-span-2">
          <div className="bg-[#1b1c1a] p-10 rounded-[2.5rem] text-white relative overflow-hidden min-h-[200px] h-full">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-4">Vos ponés el precio</h3>
                <p className="text-[#e3e2df] text-lg">
                  No somos intermediarios de cobro. Vos negociás directamente con tu cliente y
                  te quedás con el 100% de tu ganancia.
                </p>
              </div>
              <div className="w-32 h-32 bg-[#ff5c2e] rounded-full flex items-center justify-center shrink-0">
                <Banknote size={48} className="text-white" />
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </Section>
  )
}
