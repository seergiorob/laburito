import Image from 'next/image'
import { ShieldCheck, Star } from 'lucide-react'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'

function HeroImage() {
  return (
    <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl md:rotate-2 md:hover:rotate-0 transition-transform duration-700">
      <div className="relative h-[280px] sm:h-[360px] md:h-[520px]">
        <Image
          src="/provider-hero.jpg"
          alt="Profesional de servicios para el hogar verificado y sonriente"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {/* Floating verified badge */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl flex items-center gap-3 md:gap-4 shadow-lg">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#b22c00] flex items-center justify-center shrink-0">
          <ShieldCheck size={18} className="text-white" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-[#1b1c1a] text-sm">Roberto G.</p>
          <p className="text-xs text-[#5b413a] uppercase tracking-widest font-bold">
            Plomero Verificado
          </p>
        </div>
        <div className="flex items-center gap-1 font-black text-[#b22c00]">
          <Star size={13} fill="currentColor" />
          <span className="text-sm">4.9</span>
        </div>
      </div>
    </div>
  )
}

export function HeroProvider() {
  return (
    <section className="pt-28 md:pt-32 pb-20 px-6 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text side */}
          <FadeInOnScroll className="flex-1 space-y-8 z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#505b91] text-white text-sm font-bold tracking-wide uppercase">
              Para expertos
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tighter leading-[0.95] text-[#1b1c1a]">
              Conseguí clientes nuevos{' '}
              <span className="text-[#b22c00]">sin esfuerzo.</span> Todos los días.
            </h1>
            <p className="text-xl text-[#5b413a] max-w-xl leading-relaxed">
              Laburito te conecta con personas que necesitan tu servicio en tu
              zona. Vos ponés el precio, nosotros te traemos el cliente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#registro"
                className="premium-gradient text-white px-10 py-5 rounded-xl text-lg font-black text-center shadow-[0px_12px_32px_rgba(178,44,0,0.25)] hover:shadow-[0px_16px_40px_rgba(178,44,0,0.35)] hover:scale-[1.02] active:scale-95 transition-all"
              >
                Quiero sumarme
              </a>
              <div className="flex items-center gap-3 px-6 py-4 bg-[#e9e8e4] rounded-xl">
                <ShieldCheck size={20} className="text-[#b22c00]" />
                <span className="font-bold text-[#1b1c1a] text-sm">
                  Validación de identidad 100% gratuita
                </span>
              </div>
            </div>
          </FadeInOnScroll>

          {/* Desktop: image on the right */}
          <FadeInOnScroll delay={0.2} className="hidden md:block md:flex-1 relative">
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-[#ffb5a1]/30 blur-[100px] rounded-full pointer-events-none" />
            <HeroImage />
          </FadeInOnScroll>
        </div>

        {/* Mobile: image below text */}
        <div className="md:hidden mt-8">
          <HeroImage />
        </div>
      </div>
    </section>
  )
}
