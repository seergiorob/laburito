import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'

const stats = [
  {
    value: 73,
    suffix: '%',
    label: 'de los argentinos tuvo una mala experiencia contratando un técnico',
  },
  {
    prefix: '+',
    value: 4,
    suffix: ' hs',
    label: 'pierde cada persona buscando un profesional cada semana',
  },
  {
    prefix: '<',
    value: 12,
    suffix: '%',
    label: 'de los argentinos usa una plataforma online para esto',
  },
]

export function StatsSection() {
  return (
    <section className="py-20 px-6 bg-[#1b1c1a]">
      <div className="max-w-7xl mx-auto">
        <FadeInOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black font-display tracking-tight text-white uppercase">
              Los números hablan
            </h2>
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map(({ value, prefix, suffix, label }, i) => (
            <FadeInOnScroll key={label} delay={i * 0.1}>
              <div className="space-y-3">
                <p className="text-6xl font-black font-display text-[#ff5c2e] tracking-tighter">
                  {prefix && <span>{prefix}</span>}
                  <AnimatedCounter target={value} />
                  {suffix && <span>{suffix}</span>}
                </p>
                <p className="text-white font-bold text-lg leading-relaxed max-w-xs mx-auto">
                  {label}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
