import { useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import Container from '../components/ui/Container'

const allPartners = [
  { id:1, name:'Manu Restaurante', address:'Alameda Dom Pedro II, 317', neighborhood:'Batel', category:'Alta Gastronomia', image:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400' },
  { id:2, name:'Nomade Restaurante', address:'Rua Gutemberg, 168', neighborhood:'Cabral', category:'Hotel Boutique', image:'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400' },
  { id:3, name:'Vino! Wine Bar', address:'Rua Desembargador Motta, 1877', neighborhood:'Bigorrilho', category:'Wine Bar', image:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=400' },
  { id:4, name:'Terrazza 40', address:'Rua Padre Anchieta, 1287', neighborhood:'Bigorrilho', category:'Panorâmico', image:'https://images.unsplash.com/photo-1550966871-3ed3c6227b3f?q=80&w=400' },
]

export default function Partners() {
  const [search, setSearch] = useState('')
  const [hood, setHood] = useState('all')

  const filtered = allPartners.filter(p => {
    const ms = p.name.toLowerCase().includes(search.toLowerCase()) || p.address.toLowerCase().includes(search.toLowerCase())
    const mh = hood === 'all' || p.neighborhood === hood
    return ms && mh
  })
  const hoods = ['all', ...new Set(allPartners.map(p => p.neighborhood))]

  return (
    <div className="min-h-screen pt-24 bg-bg-DEFAULT">
      <Container className="py-12">
        <div className="mb-8">
          <nav className="label text-tx-muted mb-4 flex gap-2"><span>Início</span><span className="text-primary">/</span><span className="text-primary">Parceiros</span></nav>
          <h1 className="h2 text-purple mb-2">Onde <span className="text-primary italic">Encontrar</span></h1>
          <p className="body-lg text-tx-muted">Parceiros exclusivos que servem nossos rótulos em Curitiba.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative w-full sm:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-tx-faint" />
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar parceiro..." className="input-k pl-10" />
          </div>
          <div className="flex flex-wrap gap-2">
            {hoods.map(h => (
              <button key={h} onClick={() => setHood(h)} className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-wide transition-all border ${
                hood === h ? 'bg-primary border-primary text-white' : 'bg-transparent border-tx-light text-tx-muted hover:border-primary/50'
              }`}>{h === 'all' ? 'Todos' : h}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div key={p.id} className="group bg-white rounded-xl overflow-hidden border border-tx-light/40 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400">
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent" />
              </div>
              <div className="p-6">
                <span className="label text-primary">{p.category}</span>
                <h3 className="h4 text-purple mt-1 mb-2">{p.name}</h3>
                <div className="flex items-start gap-2 text-tx-muted">
                  <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{p.address} — {p.neighborhood}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && <div className="text-center py-20"><p className="text-tx-muted">Nenhum parceiro encontrado.</p></div>}
      </Container>
    </div>
  )
}
