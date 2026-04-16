import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroProvider } from '@/components/landing/provider/HeroProvider'
import { PainPointsProvider } from '@/components/landing/provider/PainPointsProvider'
import { HowItWorksProvider } from '@/components/landing/provider/HowItWorksProvider'
import { BenefitsProvider } from '@/components/landing/provider/BenefitsProvider'
import { StatsSection } from '@/components/landing/provider/StatsSection'
import { ProviderLeadForm } from '@/components/landing/provider/ProviderLeadForm'

export const metadata: Metadata = {
  title: 'Para Profesionales — Conseguí clientes nuevos todos los días',
  description:
    'Registrate en Laburito y empezá a recibir clientes que buscan tu servicio en tu zona. Vos ponés el precio.',
}

export default function ProviderPage() {
  return (
    <>
      <Header variant="provider" />
      <main>
        <HeroProvider />
        <PainPointsProvider />
        <HowItWorksProvider />
        <BenefitsProvider />
        <StatsSection />
        <ProviderLeadForm />
      </main>
      <Footer variant="provider" />
    </>
  )
}
