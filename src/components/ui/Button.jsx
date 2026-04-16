import React, { forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

const Button = forwardRef(({ variant = 'gold', size = 'md', isLoading, disabled, children, className = '', ...props }, ref) => {
  const v = { gold:'btn-gold', outline:'btn-outline', white:'btn-white', ghost:'inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-tx-muted hover:text-primary transition-colors' }
  const s = { sm:'btn-sm', md:'', lg:'btn-lg' }
  return (
    <button ref={ref} disabled={disabled||isLoading} className={`${v[variant]||v.gold} ${s[size]||''} ${className}`} {...props}>
      {isLoading && <Loader2 className="animate-spin" size={18} />}
      {children}
    </button>
  )
})
Button.displayName = 'Button'
export default Button
