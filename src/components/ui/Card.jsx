import React, { forwardRef } from 'react'

const Card = forwardRef(({ variant = 'default', children, className = '', ...props }, ref) => {
  const variants = {
    default: '',
    hover: 'card-hover',
    interactive: 'card-interactive',
  }

  return (
    <div ref={ref} className={`card ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
})

Card.displayName = 'Card'
export default Card
