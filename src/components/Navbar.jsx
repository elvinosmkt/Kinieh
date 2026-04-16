import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { KiniehSymbol } from './ui/KiniehLogo'

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/parceiros', label: 'Onde Encontrar' },
  { to: '/contato', label: 'Contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); document.body.style.overflow = 'unset' }, [loc])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : 'unset' }, [open])

  const isHero = !scrolled
  // On light pages (not home hero), use dark text
  const isHome = loc.pathname === '/' || loc.pathname === '/sobre'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-purple-600/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
        : isHome ? 'bg-transparent' : 'bg-purple-600/90 backdrop-blur-md'
    }`}>
      <div className="container-k h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-gold-dark rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 overflow-hidden">
            <KiniehSymbol size={16} />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-serif text-lg tracking-[0.12em] font-medium leading-none">KINIEH</span>
            <span className="text-white/40 text-[8px] tracking-[0.3em] font-light mt-0.5">WINES</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`relative text-[11px] uppercase tracking-[0.2em] font-medium transition-all py-2 ${
              loc.pathname === l.to ? 'text-gold-bright' : 'text-white/60 hover:text-white'
            }`}>
              {l.label}
              {loc.pathname === l.to && (
                <motion.div layoutId="nav" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" transition={{ type:'spring', stiffness:380, damping:30 }} />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/contato" className="btn-gold btn-sm">Seja Parceiro</Link>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2.5 hover:bg-white/10 rounded-lg transition-all active:scale-95">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-purple-600/80 backdrop-blur-sm lg:hidden" style={{top:80}} onClick={() => setOpen(false)} />
            <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className="lg:hidden absolute top-full left-0 right-0 glass border-t border-white/10">
              <div className="container-k py-8 space-y-2">
                {links.map((l, i) => (
                  <motion.div key={l.to} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:i*0.05}}>
                    <Link to={l.to} className={`block text-sm uppercase tracking-[0.15em] font-medium py-3 px-4 rounded-lg transition-all ${
                      loc.pathname === l.to ? 'text-gold-bright bg-primary/10 border-l-2 border-primary' : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}>{l.label}</Link>
                  </motion.div>
                ))}
                <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:links.length*0.05}} className="pt-4">
                  <Link to="/contato" className="block btn-gold text-center">Seja Parceiro</Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
