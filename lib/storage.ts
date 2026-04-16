import type { ConsumerLeadInput, ProviderLeadInput } from './schemas'

const CONSUMER_KEY = 'laburito_consumer_leads'
const PROVIDER_KEY = 'laburito_provider_leads'

export function saveConsumerLead(data: ConsumerLeadInput) {
  const existing = JSON.parse(localStorage.getItem(CONSUMER_KEY) || '[]')
  const entry = {
    ...data,
    timestamp: new Date().toISOString(),
    id: crypto.randomUUID(),
  }
  existing.push(entry)
  localStorage.setItem(CONSUMER_KEY, JSON.stringify(existing))
  console.log('[Laburito] Consumer lead saved:', entry)
  return entry
}

export function saveProviderLead(data: ProviderLeadInput) {
  const existing = JSON.parse(localStorage.getItem(PROVIDER_KEY) || '[]')
  const entry = {
    ...data,
    timestamp: new Date().toISOString(),
    id: crypto.randomUUID(),
  }
  existing.push(entry)
  localStorage.setItem(PROVIDER_KEY, JSON.stringify(existing))
  console.log('[Laburito] Provider lead saved:', entry)
  return entry
}

export function getConsumerLeads() {
  return JSON.parse(localStorage.getItem(CONSUMER_KEY) || '[]')
}

export function getProviderLeads() {
  return JSON.parse(localStorage.getItem(PROVIDER_KEY) || '[]')
}
