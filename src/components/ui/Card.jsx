import React, { forwardRef } from 'react'
const Card = forwardRef(({ hover, children, className = '', ...props }, ref) => (
  <div ref={ref} className={`card-k ${hover ? 'card-k-hover' : ''} ${className}`} {...props}>{children}</div>
))
Card.displayName = 'Card'
export default Card
