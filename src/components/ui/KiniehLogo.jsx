import React from 'react'

const KiniehLogo = ({ size = 'md', light = false, className = '' }) => {
  const sizes = { sm: { w: 32, h: 44 }, md: { w: 48, h: 66 }, lg: { w: 80, h: 110 }, xl: { w: 120, h: 165 } }
  const { w, h } = sizes[size] || sizes.md
  const textColor = light ? '#2D0A3E' : '#FFFFFF'

  return (
    <svg viewBox="0 0 200 340" width={w} height={h} xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="kGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C45A"/>
          <stop offset="30%" stopColor="#D4AA3E"/>
          <stop offset="60%" stopColor="#C5972C"/>
          <stop offset="100%" stopColor="#8B6914"/>
        </linearGradient>
        <linearGradient id="kGold2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F2DFA0"/>
          <stop offset="40%" stopColor="#E8C45A"/>
          <stop offset="100%" stopColor="#C5972C"/>
        </linearGradient>
      </defs>
      <path d="M85 10 C85 10,60 60,65 100 C68 130,90 140,100 160 C110 180,80 200,75 220 C70 240,85 255,100 260 C100 260,98 262,100 265 L100 280 C100 280,70 282,65 284 L135 284 C130 282,100 280,100 280 L100 265 C102 262,100 260,100 260" fill="url(#kGold)" />
      <path d="M115 10 C115 10,140 50,138 85 C136 110,118 130,112 150 C108 165,115 175,108 195" fill="none" stroke="url(#kGold2)" strokeWidth="12" strokeLinecap="round"/>
      <text x="100" y="315" textAnchor="middle" fill={textColor} fontFamily="'Cormorant Garamond',Georgia,serif" fontSize="36" fontWeight="600" letterSpacing="8">KINIEH</text>
      <text x="100" y="338" textAnchor="middle" fill={textColor} fontFamily="'Montserrat',sans-serif" fontSize="13" letterSpacing="12" fontWeight="300" opacity="0.7">WINES</text>
    </svg>
  )
}

export const KiniehSymbol = ({ size = 28, className = '' }) => (
  <svg viewBox="0 0 200 290" width={size} height={size * 1.45} xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ksGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8C45A"/><stop offset="50%" stopColor="#C5972C"/><stop offset="100%" stopColor="#8B6914"/>
      </linearGradient>
      <linearGradient id="ksGold2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F2DFA0"/><stop offset="50%" stopColor="#E8C45A"/><stop offset="100%" stopColor="#C5972C"/>
      </linearGradient>
    </defs>
    <path d="M85 10 C85 10,60 60,65 100 C68 130,90 140,100 160 C110 180,80 200,75 220 C70 240,85 255,100 260 C100 260,98 262,100 265 L100 280 C100 280,70 282,65 284 L135 284 C130 282,100 280,100 280 L100 265 C102 262,100 260,100 260" fill="url(#ksGold)" />
    <path d="M115 10 C115 10,140 50,138 85 C136 110,118 130,112 150 C108 165,115 175,108 195" fill="none" stroke="url(#ksGold2)" strokeWidth="12" strokeLinecap="round"/>
  </svg>
)

export default KiniehLogo
