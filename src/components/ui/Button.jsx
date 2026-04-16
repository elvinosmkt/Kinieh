import React, { forwardRef } from 'react'
import { Loader2 } from 'lucide-react'

const Button = forwardRef(({ variant = 'primary', size = 'md', isLoading = false, disabled, children, className = '', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  }
  const sizes = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  }

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {isLoading && <Loader2 className="animate-spin" size={18} />}
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
