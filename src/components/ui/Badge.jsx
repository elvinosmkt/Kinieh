import React from 'react'
const Badge = ({ variant = 'gold', children, className = '' }) => {
  const v = { gold:'badge-gold', purple:'badge-purple' }
  return <span className={`badge-k ${v[variant]||v.gold} ${className}`}>{children}</span>
}
export default Badge
