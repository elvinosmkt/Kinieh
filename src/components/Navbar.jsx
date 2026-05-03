import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { KiniehSymbol } from './ui/KiniehLogo'
import { getWhatsAppGeneral } from '../data/wines'

const links = [
  { to: '/', label: 'Início' },
  { to: '/vinhos', label: 'Vinhos' },
  { to: '/sobre', label: 'Sobre Nós' },
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
          <a href={getWhatsAppGeneral()} target="_blank" rel="noopener noreferrer" className="btn-gold btn-sm inline-flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Fale Conosco
          </a>
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
                  <a href={getWhatsAppGeneral()} target="_blank" rel="noopener noreferrer" className="block btn-gold text-center">
                    Fale pelo WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
