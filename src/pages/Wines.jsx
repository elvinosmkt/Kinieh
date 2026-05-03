import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, X, Filter } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'
import wines, { getWhatsAppLink } from '../data/wines'

const WhatsAppIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function Wines() {
  const [params] = useSearchParams()
  const [search, setSearch] = useState('')
  const [brand, setBrand] = useState(params.get('marca') || 'all')
  const [type, setType] = useState('all')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const m = params.get('marca')
    if (m) setBrand(m)
    const d = params.get('destaque')
    if (d) {
      const wine = wines.find(w => w.id === parseInt(d))
      if (wine) setSelected(wine)
    }
  }, [params])

  const filtered = wines.filter(w => {
    const ms = w.name.toLowerCase().includes(search.toLowerCase()) || w.grape.toLowerCase().includes(search.toLowerCase())
    const mb = brand === 'all' || w.brand === brand
    const mt = type === 'all' || w.type === type
    return ms && mb && mt
  })

  const brands = ['all', ...new Set(wines.map(w => w.brand))]
  const types = ['all', ...new Set(wines.map(w => w.type))]

  return (
    <div className="min-h-screen bg-bg-cream">
      {/* Header */}
      <section className="pt-28 pb-12 bg-bg-DEFAULT border-b border-tx-light/40">
        <Container>
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 label text-tx-muted mb-4">
              <span>Início</span><span className="text-primary">/</span><span className="text-primary">Vinhos</span>
            </nav>
            <h1 className="h1 text-purple mb-4">Nossos <span className="text-primary italic">Vinhos</span></h1>
            <p className="body-lg text-tx-muted">Rótulos da África do Sul e Argentina para descobrir, apreciar e compartilhar. Escolha o seu — a gente cuida do resto.</p>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-8 bg-bg-DEFAULT border-b border-tx-light/40 sticky top-20 z-30 backdrop-blur-md bg-bg-DEFAULT/95">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative w-full md:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-tx-faint" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar vinho..." className="input-k pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {brands.map(b => (
                <button key={b} onClick={() => setBrand(b)} className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-wide transition-all border ${
                  brand === b ? 'bg-primary border-primary text-white' : 'bg-transparent border-tx-light text-tx-muted hover:border-primary/50'
                }`}>{b === 'all' ? 'Todas Marcas' : b}</button>
              ))}
              <div className="w-px h-8 bg-tx-light mx-1 hidden md:block" />
              {types.map(t => (
                <button key={t} onClick={() => setType(t)} className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-wide transition-all border ${
                  type === t ? 'bg-purple border-purple text-white' : 'bg-transparent border-tx-light text-tx-muted hover:border-purple/50'
                }`}>{t === 'all' ? 'Todos Tipos' : t}</button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="section-pad bg-bg-cream">
        <Container>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map(wine => (
                  <motion.div key={wine.id} layout initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.95}} transition={{duration:0.3}}
                    onClick={() => setSelected(wine)} className="cursor-pointer">
                    <div className="group bg-white rounded-xl overflow-hidden border border-tx-light/40 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400">
                      {/* Bottle */}
                      <div className="relative h-72 bg-gradient-to-b from-bg-card to-white flex items-center justify-center overflow-hidden p-6">
                        {wine.isNew && <span className="absolute top-4 left-4 z-10 badge-k badge-gold">Novo</span>}
                        <div className="absolute top-4 right-4 text-tx-light/30 font-bold text-sm tracking-wider">{wine.year}</div>
                        {wine.image ? (
                          <motion.img src={wine.image} alt={wine.name} className="h-[90%] w-auto object-contain drop-shadow-[0_15px_25px_rgba(45,10,62,0.15)] relative z-10" whileHover={{scale:1.08}} transition={{duration:0.5}} />
                        ) : (
                          <div className="w-14 h-44 bg-gradient-to-b from-purple-300 to-purple rounded-full shadow-lg" />
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 flex justify-center">
                          <span className="btn-gold btn-sm w-full text-center shadow-xl pointer-events-none">Ver Detalhes <ArrowRight size={14} className="ml-1" /></span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="label text-tx-faint">{wine.grape}</span>
                          <span className="text-tx-light">·</span>
                          <span className="label text-primary/60">{wine.brand}</span>
                        </div>
                        <h3 className="h4 text-purple mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">{wine.name}</h3>
                        <p className="text-xs text-tx-muted italic leading-relaxed">{wine.tagline}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="h4 text-tx-muted mb-4">Nenhum vinho encontrado.</p>
              <Button variant="ghost" onClick={() => { setSearch(''); setBrand('all'); setType('all') }}>Limpar Busca</Button>
            </div>
          )}
        </Container>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="absolute inset-0 bg-purple-600/80 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div initial={{opacity:0,scale:0.95,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.95,y:20}}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-purple/10 text-purple hover:bg-purple hover:text-white transition-all"><X size={20} /></button>

              {/* Bottle */}
              <div className="md:w-5/12 bg-gradient-to-b from-bg-card to-white p-12 flex items-center justify-center relative overflow-hidden">
                {selected.image ? (
                  <motion.img src={selected.image} alt={selected.name} initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:0.2}}
                    className="h-full max-h-[60vh] w-auto object-contain drop-shadow-[0_20px_30px_rgba(45,10,62,0.2)]" />
                ) : <div className="w-20 h-60 bg-gradient-to-b from-purple-200 to-purple rounded-full shadow-lg" />}
                <div className="absolute font-serif text-purple/[0.04] right-[-10%] bottom-[-5%] text-[100px] leading-none rotate-[-90deg] origin-bottom-right pointer-events-none">{selected.type}</div>
              </div>

              {/* Info */}
              <div className="md:w-7/12 p-8 sm:p-10 overflow-y-auto">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                  <Badge>{selected.type}</Badge>
                  <span className="text-purple/60 font-bold border border-purple/10 px-3 py-1 rounded-md text-sm">Safra {selected.year}</span>
                </div>
                <h2 className="h2 text-purple mb-2">{selected.name}</h2>
                <p className="text-primary italic body-lg mb-6">{selected.tagline}</p>

                <div className="space-y-6">
                  {/* Personality */}
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <p className="text-sm text-purple font-medium italic">"{selected.personality}"</p>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="label text-tx-muted mb-3">Sobre este Vinho</h4>
                    <p className="body-lg text-tx-secondary leading-relaxed">{selected.description}</p>
                  </div>

                  {/* Tasting Notes */}
                  {selected.notes && (
                    <div>
                      <h4 className="label text-tx-muted mb-3">O que você vai sentir</h4>
                      <div className="flex flex-wrap gap-2">
                        {selected.notes.map(n => (
                          <span key={n} className="px-3 py-1.5 bg-bg-card rounded-full text-sm text-purple font-medium border border-tx-light/40">{n}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pairing */}
                  <div className="bg-bg-card p-5 rounded-xl border border-tx-light/40">
                    <h4 className="text-sm font-semibold text-purple mb-2">Combina com</h4>
                    <p className="text-tx-secondary text-sm">{selected.pairing}</p>
                  </div>

                  {/* Tech Details */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-tx-light/40">
                    <div><span className="label text-tx-faint block mb-1">Uva</span><span className="text-purple text-sm font-medium">{selected.grape}</span></div>
                    <div><span className="label text-tx-faint block mb-1">Região</span><span className="text-purple text-sm font-medium">{selected.region}</span></div>
                    <div><span className="label text-tx-faint block mb-1">Álcool</span><span className="text-purple text-sm font-medium">{selected.alcohol}</span></div>
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="pt-4">
                    <a href={getWhatsAppLink(selected.name)} target="_blank" rel="noopener noreferrer"
                      className="btn-gold btn-lg w-full text-center inline-flex items-center justify-center gap-3">
                      <WhatsAppIcon size={20} />
                      Quero Este Vinho
                    </a>
                    <p className="text-center text-xs text-tx-faint mt-3">Você será direcionado ao nosso WhatsApp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
