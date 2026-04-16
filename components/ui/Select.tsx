import { type SelectHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, className, id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={selectId}
          className="text-sm font-bold uppercase tracking-widest text-[#5b413a] ml-1"
        >
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={cn(
            'w-full bg-[#e9e8e4] border-none rounded-2xl px-5 py-4 text-[#1b1c1a] transition-all outline-none focus:ring-2 focus:ring-[#b22c00]/20 focus:bg-white appearance-none cursor-pointer',
            error && 'ring-2 ring-red-500',
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-sm text-red-600 ml-1" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  },
)

Select.displayName = 'Select'
