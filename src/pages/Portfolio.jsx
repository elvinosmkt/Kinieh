import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, ShoppingBag, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'

const wines = [
  { id:1, name:'Meander Chenin Blanc', region:'Western Cape', country:'África do Sul', type:'Branco', grape:'Chenin Blanc', year:'2025', price:54.90, isNew:true, image:'https://meanderwines.co.za/wp-content/uploads/2022/05/Meander-Chenin-Blanc-2021.png', description:'Vinho branco jovem, vibrante e frutado. Perfil aromático de frutas tropicais com acidez equilibrada.', pairing:'Saladas, frutos do mar leves, culinária asiática.' },
  { id:2, name:'Meander Sauvignon Blanc', region:'Western Cape', country:'África do Sul', type:'Branco', grape:'Sauvignon Blanc', year:'2025', price:54.90, isNew:true, image:'https://meanderwines.co.za/wp-content/uploads/2022/05/Meander-Sauvignon-Blanc-2021.png', description:'Extremamente refrescante. Notas herbáceas brilhantes e toques de maracujá e lima.', pairing:'Frutos do mar, queijos de cabra, peixes grelhados.' },
  { id:3, name:'Meander Pinotage', region:'Western Cape', country:'África do Sul', type:'Tinto', grape:'Pinotage', year:'2023', price:59.90, isNew:true, image:'https://meanderwines.co.za/wp-content/uploads/2022/05/Meander-Pinotage-2021.png', description:'A uva ícone sul-africana. Frutas vermelhas suculentas, taninos macios e toque defumado.', pairing:'Hambúrgueres artesanais, churrasco.' },
  { id:4, name:'Meander Shiraz', region:'Western Cape', country:'África do Sul', type:'Tinto', grape:'Shiraz', year:'2024', price:59.90, isNew:true, image:'https://meanderwines.co.za/wp-content/uploads/2022/05/Meander-Shiraz-2021.png', description:'Encorpado com frutas escuras e pimenta preta. Final redondo.', pairing:'Carnes assadas, massas com ragu.' },
  { id:5, name:'Daschbosch Sauvignon Blanc', region:'Breedekloof', country:'África do Sul', type:'Branco', grape:'Sauvignon Blanc', year:'2025', price:79.90, image:'https://daschbosch.co.za/wp-content/uploads/2022/03/db-sauvignon-blanc.png', description:'Maior complexidade e mineralidade do terroir de Breedekloof.', pairing:'Ostras frescas, sushis premium.' },
  { id:6, name:'Daschbosch Chenin Blanc', region:'Breedekloof', country:'África do Sul', type:'Branco', grape:'Chenin Blanc', year:'2025', price:79.90, image:'https://daschbosch.co.za/wp-content/uploads/2022/03/db-chenin-blanc.png', description:'Interpretação clássica e rica. Notas de melão cantalupo e pêssego branco.', pairing:'Porco assado, risotos de queijo.' },
  { id:7, name:'Daschbosch Cabernet Sauvignon', region:'Breedekloof', country:'África do Sul', type:'Tinto', grape:'Cabernet Sauvignon', year:'2024', price:89.90, image:'https://daschbosch.co.za/wp-content/uploads/2024/08/Dbos_WineBottles_Gevonden_CabSav.png', description:'Estruturado e potente. Notas de cassis, cedro e especiarias do carvalho.', pairing:'Cortes nobres de carne, risoto de cogumelos.' },
  { id:8, name:'Daschbosch The Gift', region:'Breedekloof', country:'África do Sul', type:'Tinto', grape:'Blend Tinto', year:'2022', price:149.90, isNew:true, image:'https://daschbosch.co.za/wp-content/uploads/2024/08/Dbos_WineBottles_TheGift.png', description:'Topo de linha. Blend celebrando a viticultura sul-africana. Taninos maduros, frutas negras e chocolate.', pairing:'Cordeiro ao forno, queijos duros maturados.' },
  { id:9, name:'Daschbosch Methode Ancestrale', region:'Breedekloof', country:'África do Sul', type:'Espumante', grape:'Chenin Blanc / Brut', year:'2025', price:119.90, image:'https://daschbosch.co.za/wp-content/uploads/2024/07/Dbos_WineBottles_MethodeAncestrale-703x1536.png', description:'Espumante Pét-Nat. Perlage delicada e perfil autêntico.', pairing:'Tapas, comida de rua asiática, queijos.' },
  { id:10, name:'Daschbosch Amphora Grenache', region:'Breedekloof', country:'África do Sul', type:'Tinto', grape:'Grenache', year:'2025', price:139.90, image:'https://daschbosch.co.za/wp-content/uploads/2020/09/2.png', description:'Fermentado em ânforas. Purista e elegante, sem influência de madeira.', pairing:'Tartar de carne, pato assado.' },
]

export default function Portfolio() {
  const [params] = useSearchParams()
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState(params.get('country') || 'all')
  const [type, setType] = useState('all')
  const [selected, setSelected] = useState(null)

  useEffect(() => { const c = params.get('country'); if (c) setCountry(c) }, [params])

  const filtered = wines.filter(w => {
    const ms = w.name.toLowerCase().includes(search.toLowerCase()) || w.grape.toLowerCase().includes(search.toLowerCase())
    const mc = country === 'all' || w.country === country
    const mt = type === 'all' || w.type === type
    return ms && mc && mt
  })

  const countries = ['all', ...new Set(wines.map(w => w.country))]
  const types = ['all', ...new Set(wines.map(w => w.type))]

  return (
    <div className="min-h-screen bg-bg-cream">
      {/* Header */}
      <section className="pt-28 pb-12 bg-bg-DEFAULT border-b border-tx-light/40">
        <Container>
          <div className="max-w-2xl">
            <nav className="flex items-center gap-2 label text-tx-muted mb-4">
              <span>Início</span><span className="text-primary">/</span><span className="text-primary">Portfólio</span>
            </nav>
            <h1 className="h1 text-purple mb-4">Nossos <span className="text-primary italic">Vinhos</span></h1>
            <p className="body-lg text-tx-muted">Curadoria de rótulos excepcionais da África do Sul e Argentina.</p>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-8 bg-bg-DEFAULT border-b border-tx-light/40 sticky top-20 z-30 backdrop-blur-md bg-bg-DEFAULT/95">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative w-full md:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-tx-faint" />
              <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar rótulo..." className="input-k pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {countries.map(c => (
                <button key={c} onClick={() => setCountry(c)} className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-wide transition-all border ${
                  country === c ? 'bg-primary border-primary text-white' : 'bg-transparent border-tx-light text-tx-muted hover:border-primary/50'
                }`}>{c === 'all' ? 'Todos Países' : c}</button>
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
                        <span className="label text-tx-faint">{wine.grape}</span>
                        <h3 className="h4 text-purple mt-1 mb-1 line-clamp-2 group-hover:text-primary transition-colors">{wine.name}</h3>
                        <div className="flex items-center justify-between pt-3 border-t border-tx-light/40 mt-3">
                          <span className="text-xl font-medium text-purple tracking-tight">R$ {wine.price.toFixed(2).replace('.',',')}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="h4 text-tx-muted mb-4">Nenhum rótulo encontrado.</p>
              <Button variant="ghost" onClick={() => { setSearch(''); setCountry('all'); setType('all') }}>Limpar Busca</Button>
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
                <div className="flex gap-4 items-center mb-8 flex-wrap">
                  <p className="text-xl text-primary font-semibold">R$ {selected.price.toFixed(2).replace('.',',')}</p>
                  <span className="label text-tx-muted border-l border-tx-light pl-4">Desconto Atacado para Lojistas</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="label text-tx-muted mb-3">O Perfil Deste Vinho</h4>
                    <p className="body-lg text-tx-secondary leading-relaxed">{selected.description}</p>
                  </div>
                  <div className="bg-bg-card p-5 rounded-xl border border-tx-light/40">
                    <h4 className="text-sm font-semibold text-purple mb-2">Harmonização</h4>
                    <p className="text-tx-secondary text-sm">{selected.pairing}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-tx-light/40">
                    <div><span className="label text-tx-faint block mb-1">Casta</span><span className="text-purple text-sm font-medium">{selected.grape}</span></div>
                    <div><span className="label text-tx-faint block mb-1">Terroir</span><span className="text-purple text-sm font-medium">{selected.country} &bull; {selected.region}</span></div>
                  </div>
                  <div className="pt-6">
                    <Button variant="gold" size="lg" className="w-full">Tenho Interesse <ShoppingBag size={18} className="ml-2" /></Button>
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
