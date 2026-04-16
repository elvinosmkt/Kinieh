import React from 'react'

const Container = ({ size = 'default', children, className = '', ...props }) => {
  const sizes = {
    default: 'container-custom',
    narrow: 'container-narrow',
    wide: 'container-wide',
  }

  return (
    <div className={`${sizes[size]} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
