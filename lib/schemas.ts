import { z } from 'zod'

export const consumerLeadSchema = z.object({
  nombre: z.string().min(2, 'Ingresá tu nombre completo'),
  celular: z.string().min(8, 'Ingresá un número de celular válido'),
  email: z.string().email('Ingresá un email válido'),
})

export const providerLeadSchema = z.object({
  nombre: z.string().min(2, 'Ingresá tu nombre completo'),
  celular: z.string().min(8, 'Ingresá un número de celular válido'),
  profesion: z.string().min(1, 'Elegí tu profesión'),
})

export type ConsumerLeadInput = z.infer<typeof consumerLeadSchema>
export type ProviderLeadInput = z.infer<typeof providerLeadSchema>
