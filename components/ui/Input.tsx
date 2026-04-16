import { type InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className="text-sm font-bold uppercase tracking-widest text-[#5b413a] ml-1"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full bg-[#e9e8e4] border-none rounded-2xl px-5 py-4 text-[#1b1c1a] placeholder:text-[#8f7068] transition-all outline-none focus:ring-2 focus:ring-[#b22c00]/20 focus:bg-white',
            error && 'ring-2 ring-red-500',
            className,
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600 ml-1" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
