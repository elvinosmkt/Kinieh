import React from 'react'

const Badge = ({ variant = 'primary', size = 'md', children, className = '' }) => {
  const variants = {
    primary: 'badge-primary',
    gold: 'badge-gold',
    secondary: 'bg-stone-100 text-stone-600 border-stone-200',
    outline: 'bg-transparent border border-white/20 text-text-secondary',
    default: 'bg-stone-100 dark:bg-white/10 text-stone-600 dark:text-text-secondary',
  }
  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
  }

  return (
    <span className={`badge ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
