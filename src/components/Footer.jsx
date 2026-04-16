import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import Container from './ui/Container'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const year = new Date().getFullYear()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    console.log('Newsletter:', email)
    setEmail('')
    setLoading(false)
    alert('Obrigado por se inscrever!')
  }

  return (
    <footer className="bg-background-dark border-t border-white/5" role="contentinfo">
      {/* Newsletter */}
      <div className="section-padding-sm bg-gradient-to-b from-primary/5 to-transparent">
        <Container size="narrow">
          <div className="text-center">
            <div className="mb-4">
              <span className="badge badge-gold">Newsletter Exclusiva</span>
            </div>
            <h2 className="heading-3 mb-4 text-text-primary">Clube do Vinho Sem Frescura</h2>
            <p className="body-large text-text-tertiary mb-10 max-w-xl mx-auto">
              Receba nossas dicas de vinhos, promoções para o fim de semana 
              e combinações fáceis direto no seu e-mail.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail profissional"
                required
                disabled={loading}
                className="input flex-1"
                aria-label="Email para newsletter"
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary btn-sm flex items-center justify-center gap-2 text-xs uppercase tracking-widest whitespace-nowrap"
              >
                {loading ? 'Enviando...' : 'Inscrever-se'}
                {!loading && <ArrowRight size={16} />}
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* Footer Grid */}
      <div className="section-padding">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group" aria-label="Kinieh Home">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-light tracking-[0.15em] uppercase text-text-primary">
              Kinieh
            </span>
          </Link>
          <p className="text-text-tertiary body-small mb-8 leading-relaxed">
            Sua distribuidora de vinhos para o dia a dia. Descomplicamos a escolha 
            para você focar apenas em aproveitar o momento.
          </p>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-tertiary hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-tertiary hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Countries */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-text-primary mb-6">Categorias</h4>
          <ul className="space-y-3" role="list">
            <li><Link to="/portfolio" className="link body-small">Tintos</Link></li>
            <li><Link to="/portfolio" className="link body-small">Brancos & Rosés</Link></li>
            <li><Link to="/portfolio" className="link body-small">Espumantes</Link></li>
          </ul>
        </div>

        {/* Institutional */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-text-primary mb-6">Institucional</h4>
          <ul className="space-y-3" role="list">
            <li><Link to="/sobre" className="link body-small">Quem Somos</Link></li>
            <li><Link to="/contato" className="link body-small">Fale com a Gente</Link></li>
            <li><a href="#" className="link body-small">Dúvidas Frequentes</a></li>
            <li><a href="#" className="link body-small">Entregas</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-text-primary mb-6">Contato</h4>
          <ul className="space-y-4" role="list">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
              <span className="body-small text-text-tertiary">
                Curitiba - PR<br />Entregamos em todo Brasil
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary flex-shrink-0" />
              <a href="tel:+5541999999999" className="body-small text-text-tertiary hover:text-primary transition-colors">
                +55 (41) 99999-9999
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary flex-shrink-0" />
              <a href="mailto:contato@kinieh.com.br" className="body-small text-text-tertiary hover:text-primary transition-colors">
                contato@kinieh.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider mb-8" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-xs text-text-muted">© {year} Kinieh Vinhos. Todos os direitos reservados.</p>
        <p className="text-xs text-text-muted uppercase tracking-wider">
          Vinhos Bons. Preço Justo. Sem Frescura.
        </p>          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
