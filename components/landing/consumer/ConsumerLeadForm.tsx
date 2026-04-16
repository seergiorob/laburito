'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { consumerLeadSchema, type ConsumerLeadInput } from '@/lib/schemas'
import { saveConsumerLead } from '@/lib/storage'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { SuccessMessage } from '@/components/shared/SuccessMessage'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'
import { Badge } from '@/components/ui/Badge'

export function ConsumerLeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConsumerLeadInput>({
    resolver: zodResolver(consumerLeadSchema),
  })

  const onSubmit = (data: ConsumerLeadInput) => {
    setLoading(true)
    setTimeout(() => {
      saveConsumerLead(data)
      setSubmitted(true)
      setLoading(false)
    }, 600)
  }

  return (
    <section
      id="registro"
      className="py-20 md:py-24 px-6 bg-[#faf9f5]"
    >
      <div className="max-w-4xl mx-auto">
        <FadeInOnScroll>
          <div className="bg-[#efeeea] p-8 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[#b22c00]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              {submitted ? (
                <SuccessMessage
                  title="¡Listo! Ya estás en la lista."
                  description="Te vamos a contactar pronto. Los primeros usuarios van a tener beneficios exclusivos."
                />
              ) : (
                <>
                  <div className="text-center mb-12">
                    <Badge variant="accent" className="mb-4">
                      Early Access
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#1b1c1a] mb-4">
                      Sé de los primeros en usar Laburito
                    </h2>
                    <p className="text-[#5b413a] text-lg">
                      Dejá tus datos y te avisamos apenas lancemos en tu zona. Los primeros
                      usuarios van a tener beneficios exclusivos.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Nombre completo"
                        type="text"
                        placeholder="Ej: Juan Pérez"
                        error={errors.nombre?.message}
                        {...register('nombre')}
                      />
                      <Input
                        label="Celular"
                        type="tel"
                        placeholder="11 1234-5678"
                        error={errors.celular?.message}
                        {...register('celular')}
                      />
                    </div>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="vos@email.com"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      loading={loading}
                    >
                      Quiero ser de los primeros
                    </Button>
                    <p className="text-center text-xs text-[#5b413a] px-8 leading-relaxed">
                      No compartimos tus datos con nadie. Esto es solo para avisarte del
                      lanzamiento.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
