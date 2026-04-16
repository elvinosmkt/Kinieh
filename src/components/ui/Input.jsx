import React, { forwardRef } from 'react'
const Input = forwardRef(({ label, error, icon, className = '', ...props }, ref) => (
  <div className="w-full">
    {label && <label className="label text-tx-muted mb-2 block">{label}</label>}
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-tx-faint">{icon}</div>}
      <input ref={ref} className={`input-k ${icon?'pl-10':''} ${error?'border-red-400 focus:border-red-500':''} ${className}`} {...props} />
    </div>
    {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
  </div>
))
Input.displayName = 'Input'
export default Input
