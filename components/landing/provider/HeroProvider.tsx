import Image from 'next/image'
import { ShieldCheck, Star } from 'lucide-react'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'

export function HeroProvider() {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
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

        {/* Visual side — photo */}
        <FadeInOnScroll delay={0.2} className="flex-1 relative">
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-[#ffb5a1]/30 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 aspect-[4/5] max-h-[520px]">
            <Image
              src="/provider-hero.jpg"
              alt="Profesional de servicios para el hogar verificado y sonriente"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Floating verified badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#b22c00] flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[#1b1c1a] text-sm">Roberto G.</p>
                <p className="text-xs text-[#5b413a] uppercase tracking-widest font-bold">
                  Plomero Verificado
                </p>
              </div>
              <div className="flex items-center gap-1 font-black text-[#b22c00]">
                <Star size={14} fill="currentColor" />
                <span>4.9</span>
              </div>
            </div>
          </div>

          {/* Floating review card */}
          <div className="absolute -bottom-10 -left-6 bg-white p-5 rounded-2xl shadow-2xl max-w-[260px] rotate-[-3deg] hover:rotate-0 transition-transform duration-500 hidden lg:block">
            <p className="text-sm italic font-medium text-[#1b1c1a] leading-relaxed">
              &ldquo;Desde que estoy en Laburito, llené los baches de mi semana.&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#b9c3ff] flex items-center justify-center">
                <Star size={12} className="text-[#505b91]" />
              </div>
              <p className="text-xs font-bold text-[#5b413a]">— Marcelo P., Carpintero</p>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
