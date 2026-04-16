import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'

export function HeroConsumer() {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text side */}
        <FadeInOnScroll className="flex-1 space-y-8 z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#ffdbd1] text-[#b22c00] text-sm font-bold tracking-wide uppercase">
            Para consumidores
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter leading-[0.95] text-[#1b1c1a]">
            Encontrá profesionales del hogar{' '}
            <span className="text-[#b22c00]">verificados</span>, sin vueltas.
          </h1>
          <p className="text-xl text-[#5b413a] max-w-xl leading-relaxed">
            Plomero, electricista, gasista, pintor y más. Conocé el precio
            antes de contratar y tené respaldo si algo sale mal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#registro"
              className="premium-gradient text-white px-10 py-5 rounded-xl text-lg font-black text-center shadow-[0px_12px_32px_rgba(178,44,0,0.25)] hover:shadow-[0px_16px_40px_rgba(178,44,0,0.35)] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Quiero probar Laburito
            </a>
            <div className="flex items-center gap-3 px-6 py-4 bg-[#e9e8e4] rounded-xl">
              <ShieldCheck size={20} className="text-[#b22c00]" />
              <span className="font-bold text-[#1b1c1a] text-sm">
                100% verificados y con garantía
              </span>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Visual side — photo */}
        <FadeInOnScroll delay={0.2} className="flex-1 relative">
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-[#ffb5a1]/30 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/5] max-h-[520px]">
            <Image
              src="/consumer-hero.jpg"
              alt="Técnico electricista profesional verificado"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Floating verified card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#b9c3ff] flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-[#505b91]" />
              </div>
              <div>
                <p className="font-bold text-[#1b1c1a] text-sm">Mariano R.</p>
                <p className="text-xs text-[#5b413a]">Electricista Matriculado · ★ 4.9</p>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
