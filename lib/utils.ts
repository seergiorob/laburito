import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPhone(value: string) {
  return value.replace(/\D/g, '').slice(0, 10)
}
