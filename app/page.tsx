import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroConsumer } from '@/components/landing/consumer/HeroConsumer'
import { PainPointsConsumer } from '@/components/landing/consumer/PainPointsConsumer'
import { HowItWorksConsumer } from '@/components/landing/consumer/HowItWorksConsumer'
import { WhyLaburito } from '@/components/landing/consumer/WhyLaburito'
import { CategoriesPreview } from '@/components/landing/consumer/CategoriesPreview'
import { ConsumerLeadForm } from '@/components/landing/consumer/ConsumerLeadForm'

export const metadata: Metadata = {
  title: 'Encontrá profesionales del hogar verificados en Argentina',
  description:
    'Plomero, electricista, gasista, pintor y más. Conocé el precio antes de contratar y tené respaldo si algo sale mal.',
}

export default function ConsumerPage() {
  return (
    <>
      <Header variant="consumer" />
      <main>
        <HeroConsumer />
        <PainPointsConsumer />
        <HowItWorksConsumer />
        <WhyLaburito />
        <CategoriesPreview />
        <ConsumerLeadForm />
      </main>
      <Footer variant="consumer" />
    </>
  )
}
