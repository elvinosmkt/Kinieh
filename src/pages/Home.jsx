import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Wine, Sparkles, Globe } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import wines, { getWhatsAppGeneral } from '../data/wines'

const featured = wines.filter(w => [1, 3, 8, 9, 11].includes(w.id))

const Home = () => (
  <div className="min-h-screen">
    {/* ═══════════════════════════════════════
        HERO
        ═══════════════════════════════════════ */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-500">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940" alt="" className="w-full h-full object-cover opacity-15 scale-105" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600 via-purple-600/80 to-purple-600/40" />
      </div>
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/[0.06] -top-48 -right-48" />
      <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/[0.04] -bottom-24 -left-24" />

      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}} className="relative z-20 text-center px-4 max-w-5xl">

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="mb-6 flex justify-center">
          <Badge variant="gold">Importadora de Vinhos</Badge>
        </motion.div>

        <motion.h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-[1.08] mb-8 tracking-tight"
          initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.6,duration:0.8}}>
          Vinhos que falam <br/>
          a sua <span className="gold-shimmer italic font-medium">língua</span>
        </motion.h1>

        <motion.p className="body-lg text-white/50 max-w-2xl mx-auto mb-12 text-balance" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}>
          Rótulos selecionados da África do Sul e Argentina para quem quer descobrir, experimentar e apreciar — sem complicação, sem cerimônia.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1}}>
          <Link to="/vinhos" className="btn-gold btn-lg">Explorar os Vinhos</Link>
          <a href={getWhatsAppGeneral()} target="_blank" rel="noopener noreferrer" className="btn-white btn-lg">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Falar com a Kinieh
          </a>
        </motion.div>
      </motion.div>

      <motion.div animate={{y:[0,12,0]}} transition={{repeat:Infinity,duration:2.5}} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>

    {/* ═══════════════════════════════════════
        FEATURED WINES
        ═══════════════════════════════════════ */}
    <section className="section-pad bg-bg-cream">
      <Container>
        <div className="text-center mb-16">
          <Badge className="mb-4">Destaques</Badge>
          <h2 className="h2 text-purple mb-4">Comece por <span className="text-primary italic">aqui</span></h2>
          <p className="body-lg text-tx-muted max-w-xl mx-auto">Alguns dos nossos favoritos para quem está chegando agora — ou para quem já sabe o que quer.</p>
          <div className="divider-gold max-w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featured.map((wine, i) => (
            <motion.div key={wine.id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:0.6}}>
              <Link to={`/vinhos?destaque=${wine.id}`} className="group block">
                <div className="bg-white rounded-xl overflow-hidden border border-tx-light/40 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-400">
                  <div className="relative h-64 bg-gradient-to-b from-bg-card to-white flex items-center justify-center overflow-hidden p-6">
                    {wine.isNew && <span className="absolute top-3 left-3 z-10 badge-k badge-gold">Novo</span>}
                    {wine.image ? (
                      <motion.img src={wine.image} alt={wine.name} className="h-[85%] w-auto object-contain drop-shadow-[0_15px_25px_rgba(45,10,62,0.15)]" whileHover={{scale:1.08}} transition={{duration:0.5}} />
                    ) : (
                      <div className="w-14 h-44 bg-gradient-to-b from-purple-300 to-purple rounded-full shadow-lg" />
                    )}
                  </div>
                  <div className="p-4 text-center">
                    <span className="label text-tx-faint">{wine.grape}</span>
                    <h3 className="h4 text-purple mt-1 mb-1 text-sm group-hover:text-primary transition-colors">{wine.name}</h3>
                    <p className="text-xs text-tx-muted italic">{wine.tagline}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/vinhos" className="btn-outline btn-lg">
            Ver Todos os Vinhos <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </Container>
    </section>

    {/* ═══════════════════════════════════════
        BRANDS SECTION — Meander + Daschbosch + Argentina
        ═══════════════════════════════════════ */}
    <section className="section-pad bg-bg-DEFAULT">
      <Container>
        <div className="text-center mb-16">
          <Badge className="mb-4">Nossas Origens</Badge>
          <h2 className="h2 text-purple mb-4">Três <span className="text-primary italic">universos</span>, uma curadoria</h2>
          <p className="body-lg text-tx-muted max-w-xl mx-auto">Da África do Sul à Argentina — selecionamos o que cada terroir tem de melhor.</p>
          <div className="divider-gold max-w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              brand: 'Meander',
              tag: 'ACESSÍVEL & VIBRANTE',
              origin: 'África do Sul · Western Cape',
              img: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2874',
              desc: 'Vinhos descomplicados, frutados e sempre prontos para uma boa companhia. O dia a dia merece.',
              filter: 'Meander',
              hasWines: true,
            },
            {
              brand: 'Daschbosch',
              tag: 'ARTESANAL & AUTORAL',
              origin: 'África do Sul · Breedekloof',
              img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2940',
              desc: 'Métodos tradicionais, vinhas antigas e personalidade que impressiona. Para quando o momento pede algo especial.',
              filter: 'Daschbosch',
              hasWines: true,
            },
            {
              brand: 'Argentina',
              tag: 'EM BREVE',
              origin: 'Mendoza & Mais',
              img: '/argentina-vineyard.png',
              desc: 'Malbecs de altitude, Torrontés aromáticos e blends que definiram uma geração de vinhos. Novos rótulos chegando.',
              filter: null,
              hasWines: false,
            },
          ].map((c, i) => (
            <motion.div key={c.brand} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.15,duration:0.7}}
              className="group relative h-[460px] overflow-hidden rounded-2xl cursor-pointer shadow-lg">
              <img src={c.img} alt={c.brand} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600 via-purple-600/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-7 w-full z-10">
                <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-3 block">{c.tag}</span>
                <h3 className="text-3xl md:text-4xl font-serif text-white font-light mb-2">{c.brand}</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-3">{c.origin}</p>
                <p className="text-white/60 leading-relaxed mb-5 max-w-sm font-light text-sm">{c.desc}</p>
                {c.hasWines ? (
                  <Link to={`/vinhos?marca=${c.filter}`} className="flex items-center text-primary font-medium text-sm group-hover:text-gold-bright transition-colors">
                    Explorar {c.brand} <ArrowRight size={16} className="ml-2" />
                  </Link>
                ) : (
                  <span className="flex items-center text-white/30 font-medium text-sm">
                    Rótulos chegando em breve
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>

    {/* ═══════════════════════════════════════
        WHY KINIEH
        ═══════════════════════════════════════ */}
    <section className="section-pad bg-bg-cream">
      <Container>
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="h2 text-purple mb-6">Por que a <span className="text-primary italic">Kinieh</span>?</h2>
          <div className="divider-gold max-w-24 mx-auto mb-6" />
          <p className="body-lg text-tx-muted max-w-2xl mx-auto">
            Trazemos vinhos incríveis de onde o mundo ainda está descobrindo — para a sua mesa, sem complicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon: Wine, title: 'Vinhos Jovens & Vibrantes', text: 'Rótulos frescos, frutados e cheios de personalidade — perfeitos para quem quer descobrir sem complicação. Da África do Sul e da Argentina.', d: 0.1 },
            { icon: Globe, title: 'Terroirs Surpreendentes', text: 'De Breedekloof a Mendoza — climas e solos que produzem uvas com caráter próprio. Diferente de tudo que você já provou.', d: 0.2 },
            { icon: Sparkles, title: 'Curadoria Honesta', text: 'Selecionamos vinhos que nós mesmos gostaríamos de abrir. Sem rótulos inflados, sem histórias inventadas. O líquido fala por si.', d: 0.3 },
          ].map(({icon:Icon,title,text,d}) => (
            <motion.div key={title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:d,duration:0.6}}>
              <Card hover className="h-full border-tx-light/40 bg-white/60">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="h4 text-purple mb-4">{title}</h3>
                <p className="body-lg text-tx-muted leading-relaxed">{text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>

    {/* ═══════════════════════════════════════
        CTA
        ═══════════════════════════════════════ */}
    <section className="section-pad bg-purple-600 relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-primary/[0.06] -top-48 -right-48" />
      <Container narrow className="relative z-10">
        <div className="text-center">
          <h2 className="h2 text-white mb-6 text-balance font-light">Pronto para sua próxima <span className="gold-shimmer italic">descoberta</span>?</h2>
          <div className="divider-gold max-w-24 mx-auto mb-8" />
          <p className="body-lg text-white/50 mb-10 max-w-xl mx-auto text-balance">
            Fale com a gente pelo WhatsApp. Contamos tudo sobre os vinhos, ajudamos a escolher e entregamos na sua porta.
          </p>
          <a href={getWhatsAppGeneral()} target="_blank" rel="noopener noreferrer" className="btn-gold btn-lg inline-flex items-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Quero Descobrir
          </a>
        </div>
      </Container>
    </section>
  </div>
)

export default Home
