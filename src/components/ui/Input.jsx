import React, { forwardRef } from 'react'

const Input = forwardRef(({ label, error, helperText, icon, className = '', ...props }, ref) => (
  <div className="w-full">
    {label && (
      <label className="block text-xs uppercase tracking-widest text-text-tertiary mb-2 font-medium">
        {label}
      </label>
    )}
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">{icon}</div>}
      <input
        ref={ref}
        className={`input ${icon ? 'pl-10' : ''} ${error ? 'input-error' : ''} ${className}`}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
    </div>
    {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    {helperText && !error && <p className="mt-2 text-sm text-text-muted">{helperText}</p>}
  </div>
))

Input.displayName = 'Input'
export default Input
