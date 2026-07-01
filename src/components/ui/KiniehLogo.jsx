import React from 'react'

const KiniehLogo = ({ size = 'md', className = '' }) => {
  const sizes = { 
    sm: { h: '36px' }, 
    md: { h: '50px' }, 
    lg: { h: '80px' }, 
    xl: { h: '120px' } 
  }
  const style = sizes[size] || sizes.md

  return (
    <img 
      src="/logo-kinieh.png" 
      alt="Kinieh Wines" 
      style={{ height: style.h, width: 'auto' }} 
      className={className} 
    />
  )
}

export const KiniehSymbol = ({ size = 28, className = '' }) => (
  <img 
    src="/logo-symbol.png" 
    alt="Kinieh Symbol" 
    style={{ width: `${size}px`, height: 'auto', display: 'block' }} 
    className={className} 
  />
)

export default KiniehLogo

