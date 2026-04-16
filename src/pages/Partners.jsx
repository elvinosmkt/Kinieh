import { useState } from 'react'
import { Search, MapPin } from 'lucide-react'
import Input from '../components/ui/Input'
import Container from '../components/ui/Container'

const allPartners = [
  { id: 1, name: 'Manu Restaurante', address: 'Alameda Dom Pedro II, 317', neighborhood: 'Batel', category: 'Alta Gastronomia', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Nomade Restaurante', address: 'Rua Gutemberg, 168', neighborhood: 'Cabral', category: 'Hotel Boutique', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Vino! Wine Bar', address: 'Rua Desembargador Motta, 1877', neighborhood: 'Bigorrilho', category: 'Wine Bar', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'Terrazza 40', address: 'Rua Padre Anchieta, 1287', neighborhood: 'Bigorrilho', category: 'Panorâmico', image: 'https://images.unsplash.com/photo-1550966871-3ed3c6227b3f?q=80&w=400&auto=format&fit=crop' },
]

const Partners = () => {
  const [search, setSearch] = useState('')
  const [hood, setHood] = useState('all')

  const filtered = allPartners.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.address.toLowerCase().includes(search.toLowerCase())
    const matchHood = hood === 'all' || p.neighborhood === hood
    return matchSearch && matchHood
  })

  const hoods = ['all', ...new Set(allPartners.map((p) => p.neighborhood))]

  return (
    <div className="min-h-screen pt-24 bg-background">
      <Container className="py-12">
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-tertiary mb-4 font-medium">
            <span>Início</span>
            <span className="text-primary">/</span>
            <span className="text-primary">Parceiros</span>
          </nav>
          <h1 className="heading-2 text-text-primary mb-2">Onde Encontrar</h1>
          <p className="body-large text-text-secondary">
            Parceiros exclusivos que servem nossos rótulos em Curitiba.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="w-full sm:w-64">
            <Input
              placeholder="Buscar parceiro..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              icon={<Search size={16} />}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {hoods.map((h) => (
              <button
                key={h}
                onClick={() => setHood(h)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${
                  hood === h
                    ? 'bg-primary border-primary text-white'
                    : 'bg-transparent border-white/10 text-text-tertiary hover:border-primary/50'
                }`}
              >
                {h === 'all' ? 'Todos' : h}
              </button>
            ))}
          </div>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{p.category}</span>
                <h3 className="heading-4 text-text-primary mt-1 mb-2">{p.name}</h3>
                <div className="flex items-start gap-2 text-text-tertiary">
                  <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{p.address} — {p.neighborhood}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted">Nenhum parceiro encontrado.</p>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Partners
