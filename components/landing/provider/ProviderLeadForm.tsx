'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { providerLeadSchema, type ProviderLeadInput } from '@/lib/schemas'
import { saveProviderLead } from '@/lib/storage'
import { PROFESSION_OPTIONS } from '@/lib/constants'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { SuccessMessage } from '@/components/shared/SuccessMessage'
import { FadeInOnScroll } from '@/components/shared/FadeInOnScroll'
import { Badge } from '@/components/ui/Badge'

const professionSelectOptions = PROFESSION_OPTIONS.map((p) => ({
  value: p.toLowerCase().replace(/\s+/g, '-'),
  label: p,
}))

export function ProviderLeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProviderLeadInput>({
    resolver: zodResolver(providerLeadSchema),
  })

  const onSubmit = (data: ProviderLeadInput) => {
    setLoading(true)
    setTimeout(() => {
      saveProviderLead(data)
      setSubmitted(true)
      setLoading(false)
    }, 600)
  }

  return (
    <section
      id="registro"
      className="py-20 md:py-24 px-6 bg-[#f5f4f0]"
    >
      <div className="max-w-4xl mx-auto">
        <FadeInOnScroll>
          <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 premium-gradient opacity-10 rounded-bl-full pointer-events-none" />
            <div className="relative z-10">
              {submitted ? (
                <SuccessMessage
                  title="¡Genial! Ya estás en la lista."
                  description="Te vamos a contactar pronto para darte acceso. Los primeros profesionales van a tener perfil destacado gratis."
                />
              ) : (
                <>
                  <div className="text-center mb-12">
                    <Badge variant="trust" className="mb-4">
                      Acceso prioritario
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#1b1c1a] mb-4">
                      Empezá a recibir clientes con Laburito
                    </h2>
                    <p className="text-[#5b413a] text-lg">
                      Dejá tus datos y te contactamos para darte acceso prioritario. Los
                      primeros profesionales van a tener perfil destacado gratis.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Nombre completo"
                        type="text"
                        placeholder="Ej: Roberto García"
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
                    <Select
                      label="Profesión / Rubro"
                      options={professionSelectOptions}
                      placeholder="Seleccioná tu oficio"
                      error={errors.profesion?.message}
                      {...register('profesion')}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      loading={loading}
                    >
                      Quiero sumarme como profesional
                    </Button>
                    <p className="text-center text-xs text-[#5b413a] px-8 leading-relaxed">
                      No compartimos tus datos. Esto es solo para darte acceso prioritario.
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
