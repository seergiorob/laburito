export interface ConsumerLead {
  nombre: string
  celular: string
  email: string
}

export interface ProviderLead {
  nombre: string
  celular: string
  profesion: string
}

export type LeadEntry<T> = T & {
  id: string
  timestamp: string
}

export type ServiceCategory = {
  label: string
  icon: string
  slug: string
}
