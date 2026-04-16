import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, ShoppingBag, X } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'

const wines = [
  // --- MEANDER LÍNEA VAREJO/ENTRADA ---
  { 
    id: 1, 
    name: 'Meander Chenin Blanc', 
    region: 'Western Cape', 
    country: 'África do Sul', 
    type: 'Branco', 
    grape: 'Chenin Blanc', 
    year: '2025',
    price: 54.90, 
    isNew: true,
    image: 'https://meanderwines.co.za/wp-content/uploads/2022/05/Meander-Chenin-Blanc-2021.png',
    description: 'Vinho branco jovem, vibrante e frutado. Excelente opção de entrada que entrega o perfil clássico da uva emblemática sul-africana. Perfil aromático de frutas tropicais de caroço com acidez equilibrada.',
    pairing: 'Ideal para compor cartas casuais. Harmoniza com saladas, frutos do mar leves, e pratos da culinária asiática.'
  },
  { 
    id: 2, 
    name: 'Meander Sauvignon Blanc', 
    region: 'Western Cape', 
    country: 'África do Sul', 
    type: 'Branco', 
    grape: 'Sauvignon Blanc', 
    year: '2025',
    price: 54.90, 
    isNew: true,
    image: 'https://meanderwines.co.za/wp-content/uploads/2022/05/Meander-Sauvignon-Blanc-2021.png',
    description: 'Um Sauvignon Blanc extremamente refrescante e direto. Notas herbáceas brilhantes e toques de maracujá e lima. Uma excelente relação custo-benefício para giro rápido em prateleira e taça em restaurantes.',
    pairing: 'Frutos do mar, queijos de cabra, aspargos e peixes grelhados.'
  },
  { 
    id: 3, 
    name: 'Meander Pinotage', 
    region: 'Western Cape', 
    country: 'África do Sul', 
    type: 'Tinto', 
    grape: 'Pinotage', 
    year: '2023',
    price: 59.90, 
    isNew: true,
    image: 'https://meanderwines.co.za/wp-content/uploads/2022/05/Meander-Pinotage-2021.png',
    description: 'A uva ícone da África do Sul em uma abordagem amigável e acessível. Este Pinotage apresenta frutas vermelhas suculentas, taninos macios e um leve toque defumado característico da variedade.',
    pairing: 'Hambúrgueres artesanais, churrasco, carnes vermelhas grelhadas.'
  },
  { 
    id: 4, 
    name: 'Meander Shiraz', 
    region: 'Western Cape', 
    country: 'África do Sul', 
    type: 'Tinto', 
    grape: 'Shiraz', 
    year: '2024',
    price: 59.90, 
    isNew: true,
    image: 'https://meanderwines.co.za/wp-content/uploads/2022/05/Meander-Shiraz-2021.png',
    description: 'Tinto encorpado com forte presença de frutas escuras e pimenta preta. É um vinho fácil de agradar o paladar brasileiro, combinando estrutura com final redondo.',
    pairing: 'Carnes assadas, massas com ragu, embutidos apimentados.'
  },

  // --- DASCHBOSCH LÍNEA PREMIUM/RESERVA ---
  { 
    id: 5, 
    name: 'Daschbosch Sauvignon Blanc', 
    region: 'Breedekloof', 
    country: 'África do Sul', 
    type: 'Branco', 
    grape: 'Sauvignon Blanc', 
    year: '2025',
    price: 79.90, 
    image: 'https://daschbosch.co.za/wp-content/uploads/2022/03/db-sauvignon-blanc.png',
    description: 'Sauvignon Blanc de maior complexidade e mineralidade, vindo do prestigioso terroir de Breedekloof. Notas intensas de groselha e lima, com final longo e sofisticado.',
    pairing: 'Ostras frescas, sushis premium, pratos mediterrâneos finos.'
  },
  { 
    id: 6, 
    name: 'Daschbosch Chenin Blanc', 
    region: 'Breedekloof', 
    country: 'África do Sul', 
    type: 'Branco', 
    grape: 'Chenin Blanc', 
    year: '2025',
    price: 79.90, 
    image: 'https://daschbosch.co.za/wp-content/uploads/2022/03/db-chenin-blanc.png',
    description: 'Uma interpretação clássica e rica da uva. Apresenta notas de melão cantalupo e pêssego branco, sustentado por uma acidez vibrante. Ideal para consumidores mais exigentes.',
    pairing: 'Porco assado, culinária tailandesa picante, risotos de queijo.'
  },
  { 
    id: 7, 
    name: 'Daschbosch Cabernet Sauvignon', 
    region: 'Breedekloof', 
    country: 'África do Sul', 
    type: 'Tinto', 
    grape: 'Cabernet Sauvignon', 
    year: '2024',
    price: 89.90, 
    image: 'https://daschbosch.co.za/wp-content/uploads/2024/08/Dbos_WineBottles_Gevonden_CabSav.png',
    description: 'Tinto estruturado e potente. Notas de cassis, cedro e um leve toque de especiarias do contato com carvalho. Os taninos são presentes, garantindo excelente presença em taça.',
    pairing: 'Cortes nobres de carne (Bife de Ancho, Chorizo), risoto de cogumelos intensos.'
  },
  { 
    id: 8, 
    name: 'Daschbosch The Gift', 
    region: 'Breedekloof', 
    country: 'África do Sul', 
    type: 'Tinto', 
    grape: 'Blend Tinto', 
    year: '2022',
    price: 149.90,
    isNew: true,
    image: 'https://daschbosch.co.za/wp-content/uploads/2024/08/Dbos_WineBottles_TheGift.png',
    description: 'Vinho topo de linha. O blend "The Gift" é uma celebração da viticultura sul-africana. Estágio em carvalho, apresentando taninos maduros, notas de frutas negras compotadas e chocolate. Produto de alta margem para cartas premium.',
    pairing: 'Cordeiro ao forno, carnes de caça, queijos duros maturados (Grana Padano).'
  },
  { 
    id: 9, 
    name: 'Daschbosch Methode Ancestrale', 
    region: 'Breedekloof', 
    country: 'África do Sul', 
    type: 'Espumante', 
    grape: 'Chenin Blanc / Brut', 
    year: '2025',
    price: 119.90,
    image: 'https://daschbosch.co.za/wp-content/uploads/2024/07/Dbos_WineBottles_MethodeAncestrale-703x1536.png',
    description: 'Espumante de método ancestral (Pét-Nat) feito a partir da Chenin Blanc. Traz perlage delicada e rústica, perfil autêntico e fermentação na própria garrafa. Ótimo apelo para consumidores de vinhos naturais.',
    pairing: 'Tapas variadas, comida de rua asiática, queijos de massa mole e curados.'
  },
  { 
    id: 10, 
    name: 'Daschbosch Amphora Grenache', 
    region: 'Breedekloof', 
    country: 'África do Sul', 
    type: 'Tinto', 
    grape: 'Grenache', 
    year: '2025',
    price: 139.90,
    image: 'https://daschbosch.co.za/wp-content/uploads/2020/09/2.png',
    description: 'Fermentado em ânforas de barro, este Grenache é purista e elegante. Resgata técnicas antigas, produzindo um vinho de cor clara, extremamente perfumado (cerejas, menta) e sem influência de madeira.',
    pairing: 'Tartar de carne, pato assado, presuntos curados ibéricos.'
  },
  { 
    id: 11, 
    name: 'Daschbosch Skin Contact', 
    region: 'Breedekloof', 
    country: 'África do Sul', 
    type: 'Laranja/Branco', 
    grape: 'Blend Branco', 
    year: '2025',
    price: 129.90,
    image: 'https://daschbosch.co.za/wp-content/uploads/2024/07/Dbos_WineBottles_SkinContact-660x1536.png',
    description: 'Vinho branco vinificado como tinto (em contato com as cascas). Apresenta coloração âmbar, perfil aromático exótico e textura em boca. Um produto de nicho com excelente aceitação em ambientes gastronômicos modernos.',
    pairing: 'Culinária indiana e marroquina, embutidos artesanais fortes.'
  },
  { 
    id: 12, 
    name: 'Daschbosch Mossiesdrift Steen', 
    region: 'Breedekloof', 
    country: 'África do Sul', 
    type: 'Branco', 
    grape: 'Steen (Chenin Blanc)', 
    year: '2024',
    price: 159.90,
    image: 'https://daschbosch.co.za/wp-content/uploads/2020/09/DB-Mossiesdrift-e1601035508828.png',
    description: '"Steen" é o nome local histórico para Chenin Blanc. Este rótulo provém de vinhas velhas de baixo rendimento. Encorpado, textura quase oleosa e altíssima persistência aromática.',
    pairing: 'Lagosta na manteiga, peixes brancos carnudos, aves nobres assadas.'
  },
]

const countries = ['all', 'África do Sul', 'Argentina', 'Chile']

const Portfolio = () => {
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('all')
  const [type, setType] = useState('all')
  const [selectedWine, setSelectedWine] = useState(null)

  const filtered = wines.filter((w) => {
    const matchSearch = w.name.toLowerCase().includes(search.toLowerCase()) || w.grape.toLowerCase().includes(search.toLowerCase())
    const matchCountry = country === 'all' || w.country === country
    const matchType = type === 'all' || w.type.includes(type)
    return matchSearch && matchCountry && matchType
  })

  // Previne rolagem da página quando o modal está aberto
  useEffect(() => {
    if (selectedWine) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedWine])

  return (
    <div className="min-h-screen pt-24 bg-background">
      {/* Header */}
      <section className="mb-12">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
            <div className="max-w-3xl">
              <Badge variant="gold" className="mb-4">Catálogo de Produtos</Badge>
              <h1 className="heading-1 text-text-primary mb-4 font-serif">
                Portfólio <span className="text-primary italic">Kinieh</span>
              </h1>
              <p className="body-large text-text-secondary font-light">
                Consulte nossa lista de produtos disponíveis em pronta-entrega. 
                Destaque para o portfólio da África do Sul, nossa especialidade e aposta 
                de mercado para distribuidores.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-background/80 backdrop-blur-lg border-b border-white/5 shadow-sm">
        <Container className="py-4">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
                <input
                  type="text"
                  placeholder="Procurando por casta, vinícola ou nome?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted outline-none"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {countries.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCountry(c)}
                    className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${
                      country === c
                        ? 'bg-primary border-primary text-white shadow-glow'
                        : 'bg-transparent border-white/10 text-text-tertiary hover:border-primary/50 hover:text-text-primary'
                    }`}
                  >
                    {c === 'all' ? 'Todos os Países' : c}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="bg-transparent border-none text-xs uppercase tracking-widest font-medium text-text-secondary focus:ring-0 cursor-pointer hover:text-primary transition-colors"
                style={{ backgroundColor: '#080808' }} // fixes default select style
              >
                <option value="all">Filtro de Tipo</option>
                <option value="Tinto">Tinto</option>
                <option value="Branco">Branco</option>
                <option value="Rosé">Rosé</option>
                <option value="Espumante">Espumante</option>
                <option value="Laranja">Laranja</option>
              </select>
            </div>
          </div>
        </Container>
      </section>

      {/* Wine Grid */}
      <section className="section-padding">
        <Container>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence>
                {filtered.map((wine, i) => (
                  <motion.div
                    key={wine.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                    layout
                    onClick={() => setSelectedWine(wine)}
                    className="cursor-pointer h-full"
                  >
                    <Card variant="interactive" className="h-full group p-0 overflow-hidden bg-white/[0.03] border-white/5 hover:border-primary/40 flex flex-col">
                      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-[#f2f2f2] to-[#ebebeb] p-8 flex items-center justify-center">
                        {wine.isNew && (
                          <div className="absolute top-4 left-4 z-10">
                            <Badge variant="gold" className="shadow-[0_0_15px_rgba(0,0,0,0.1)]">Nova Remessa</Badge>
                          </div>
                        )}
                        <div className="absolute top-4 right-4 z-10">
                            <span className="text-black/30 font-bold text-sm tracking-wider">{wine.year}</span>
                        </div>
                        
                        {/* Garrafa Real */}
                        {wine.image ? (
                          <motion.img 
                            src={wine.image} 
                            alt={wine.name} 
                            className="h-[90%] w-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)] relative z-10"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.5 }}
                          />
                        ) : (
                          <motion.div 
                            className="w-16 h-48 bg-gradient-to-b from-primary-800 to-primary rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.3)] relative z-10"
                            whileHover={{ scale: 1.05 }}
                          />
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 flex justify-center">
                          <Button variant="primary" size="sm" className="w-full shadow-2xl backdrop-blur-md bg-primary/90 border border-white/10 pointer-events-none">
                            Ver Informações <ArrowRight size={14} className="ml-2" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-6 relative flex flex-col flex-1 justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] uppercase tracking-widest text-text-muted">{wine.grape}</span>
                          </div>
                          <h3 className="heading-4 text-text-primary mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                            {wine.name}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-4">
                          <span className="text-xl font-medium text-text-primary tracking-tight">
                            R$ {wine.price.toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="heading-4 text-text-muted mb-4">Nenhum rótulo encontrado com estes filtros.</p>
              <Button
                variant="ghost"
                onClick={() => { setSearch(''); setCountry('all'); setType('all') }}
              >
                Limpar Busca
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          MODAL DE DETALHES DO VINHO (MISTO)
          ═══════════════════════════════════════ */}
      <AnimatePresence>
        {selectedWine && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background-dark/90 backdrop-blur-sm"
              onClick={() => setSelectedWine(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#111111] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedWine(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black transition-all"
              >
                <X size={20} />
              </button>

              {/* Garrafa (Visual) */}
              <div className="md:w-5/12 bg-gradient-to-b from-[#f5f5f5] to-[#e0e0e0] p-12 flex items-center justify-center relative overflow-hidden">
                {selectedWine.image ? (
                  <motion.img 
                    src={selectedWine.image} 
                    alt={selectedWine.name} 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="h-full max-h-[60vh] w-auto object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.4)] relative z-10"
                  />
                ) : (
                  <div className="w-24 h-64 sm:h-80 bg-gradient-to-b from-primary-800 to-primary rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-10" />
                )}
                <div className="absolute font-serif text-black/5 right-[-10%] bottom-[-5%] text-[100px] leading-none whitespace-nowrap rotate-[-90deg] origin-bottom-right opacity-50 transform pointer-events-none">
                  {selectedWine.type}
                </div>
              </div>

              {/* Informações Técnicas e Comerciais */}
              <div className="md:w-7/12 p-8 sm:p-12 overflow-y-auto scrollbar-none">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="gold">{selectedWine.type}</Badge>
                  <span className="text-white/60 font-bold border border-white/10 px-3 py-1 rounded-md text-sm">Safra {selectedWine.year}</span>
                </div>
                
                <h2 className="heading-2 text-text-primary font-serif mb-2">{selectedWine.name}</h2>
                <div className="flex gap-4 items-center mb-8 flex-wrap">
                  <p className="text-xl text-primary font-medium">
                    R$ {selectedWine.price.toFixed(2).replace('.', ',')}
                  </p>
                  <span className="text-xs uppercase tracking-wider text-text-muted border-white/10 sm:border-l sm:pl-4 py-1">Desconto Atacado para Lojistas</span>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-text-tertiary mb-3 font-medium">
                      O Perfil Deste Vinho:
                    </h4>
                    <p className="body-large text-text-secondary leading-relaxed">
                      {selectedWine.description}
                    </p>
                  </div>

                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-text-primary mb-3">
                      Harmonização e Onde Servir:
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {selectedWine.pairing}
                    </p>
                  </div>

                  {/* Detalhes Técnicos Básicos */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-text-muted mb-1">Casta</span>
                      <span className="text-text-primary text-sm font-medium">{selectedWine.grape}</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-text-muted mb-1">Terroir / Região</span>
                      <span className="text-text-primary text-sm font-medium">{selectedWine.country} • {selectedWine.region}</span>
                    </div>
                  </div>

                  <div className="pt-8">
                    <Button variant="primary" size="lg" className="w-full">
                      Tenho Interesse / Fazer Pedido <ShoppingBag size={18} className="ml-2" />
                    </Button>
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

export default Portfolio
