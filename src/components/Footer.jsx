import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import Container from './ui/Container'
import KiniehLogo from './ui/KiniehLogo'
import { getWhatsAppGeneral } from '../data/wines'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const year = new Date().getFullYear()

  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setEmail(''); setLoading(false)
    alert('Obrigado por se inscrever!')
  }

  return (
    <footer className="bg-purple-600 relative overflow-hidden">
      {/* Grain */}
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Newsletter */}
      <div className="relative z-10 py-16 md:py-20 border-b border-white/10">
        <Container narrow>
          <div className="text-center">
            <span className="badge-k bg-primary/15 text-gold-bright border-primary/25 mb-4 inline-flex">Newsletter</span>
            <h2 className="h3 text-white mb-4">Fique por dentro</h2>
            <p className="body-lg text-white/50 mb-8 max-w-xl mx-auto">
              Novos rótulos, histórias dos vinhedos e sugestões para a sua próxima taça — sem spam, prometemos.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Seu e-mail" required disabled={loading}
                className="flex-1 bg-white/5 border border-white/15 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all" />
              <button type="submit" disabled={loading} className="btn-gold btn-sm whitespace-nowrap">
                {loading ? 'Enviando...' : 'Inscrever-se'} {!loading && <ArrowRight size={14} />}
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* Grid */}
      <div className="relative z-10 py-16">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-block mb-6"><KiniehLogo size="md" /></Link>
              <p className="body-sm text-white/40 mb-6 leading-relaxed">
                Vinhos selecionados da África do Sul e Argentina para quem quer descobrir sem complicação.
              </p>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Wines */}
            <div>
              <h4 className="label text-gold-bright mb-6">Vinhos</h4>
              <ul className="space-y-3">
                {[
                  { to: '/vinhos?marca=Meander', l: 'Meander Wines' },
                  { to: '/vinhos?marca=Daschbosch', l: 'Daschbosch' },
                  { to: '/vinhos', l: 'Todos os Vinhos' },
                ].map(({to, l}) => (
                  <li key={to}><Link to={to} className="body-sm text-white/40 hover:text-primary transition-colors">{l}</Link></li>
                ))}
              </ul>
            </div>

            {/* Institutional */}
            <div>
              <h4 className="label text-gold-bright mb-6">Institucional</h4>
              <ul className="space-y-3">
                {[
                  { to: '/sobre', l: 'Quem Somos' },
                  { to: '/contato', l: 'Fale Conosco' },
                ].map(({to, l}) => (
                  <li key={to}><Link to={to} className="body-sm text-white/40 hover:text-primary transition-colors">{l}</Link></li>
                ))}
                <li><a href={getWhatsAppGeneral()} target="_blank" rel="noopener noreferrer" className="body-sm text-white/40 hover:text-primary transition-colors">WhatsApp</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="label text-gold-bright mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={14} className="text-primary mt-1 shrink-0" />
                  <span className="body-sm text-white/40">Batel, Curitiba - PR<br/>Entregamos em todo Brasil</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={14} className="text-primary shrink-0" />
                  <a href="tel:+5541999999999" className="body-sm text-white/40 hover:text-primary transition-colors">+55 (41) 99999-9999</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={14} className="text-primary shrink-0" />
                  <a href="mailto:contato@kinieh.com.br" className="body-sm text-white/40 hover:text-primary transition-colors">contato@kinieh.com.br</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-white/10 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-[11px] text-white/25">&copy; {year} Kinieh Wines. Todos os direitos reservados.</p>
            <p className="text-[11px] text-white/25 uppercase tracking-widest">Vinhos que falam a sua língua</p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
