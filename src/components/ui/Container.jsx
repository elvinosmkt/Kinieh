import React from 'react'
const Container = ({ narrow, children, className = '', ...props }) => (
  <div className={`${narrow ? 'container-narrow' : 'container-k'} ${className}`} {...props}>{children}</div>
)
export default Container
