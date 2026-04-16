import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Users, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import KiniehLogo from '../components/ui/KiniehLogo'

const Home = () => (
  <div className="min-h-screen">
    {/* ═══════════════════════════════════════
        HERO — Deep Purple with grain
        ═══════════════════════════════════════ */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-500">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940" alt="" className="w-full h-full object-cover opacity-20 scale-105" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600 via-purple-600/80 to-purple-600/40" />
      </div>
      {/* Grain */}
      <div className="grain absolute inset-0 pointer-events-none" />
      {/* Decorative circles */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-primary/[0.06] -top-48 -right-48" />
      <div className="absolute w-[400px] h-[400px] rounded-full border border-primary/[0.04] -bottom-24 -left-24" />
      <div className="absolute w-52 h-52 rounded-full bg-gradient-radial from-primary/[0.08] to-transparent top-1/3 left-1/5" />

      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}} className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mb-8">
          <KiniehLogo size="xl" />
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} className="mb-6 flex justify-center">
          <Badge variant="gold">Importadora & Curadoria</Badge>
        </motion.div>

        <motion.h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-[1.08] mb-8 tracking-tight"
          initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.6,duration:0.8}}>
          Vinhos Selecionados <br/>
          para o seu <span className="gold-shimmer italic font-medium">Negócio</span> e sua <span className="gold-shimmer italic font-medium">Mesa</span>
        </motion.h1>

        <motion.p className="body-lg text-white/50 max-w-2xl mx-auto mb-12 text-balance" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.8}}>
          Nascemos para conectar terroirs incríveis à sua taça. Seja para abastecer o seu restaurante com rótulos de alto giro, ou para descobrir o seu novo vinho favorito.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1}}>
          <Link to="/portfolio" className="btn-gold btn-lg">Conhecer Nossos Vinhos</Link>
          <Link to="/contato" className="btn-white btn-lg">Área para Lojistas</Link>
        </motion.div>
      </motion.div>

      <motion.div animate={{y:[0,12,0]}} transition={{repeat:Infinity,duration:2.5}} className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>

    {/* ═══════════════════════════════════════
        COUNTRIES — Cream background
        ═══════════════════════════════════════ */}
    <section className="section-pad bg-bg-cream">
      <Container>
        <div className="text-center mb-16">
          <Badge className="mb-4">Origens</Badge>
          <h2 className="h2 text-purple mb-4">Explorar por <span className="text-primary italic">País</span></h2>
          <div className="divider-gold max-w-24 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {[
            { country:'África do Sul', tag:'LANÇAMENTOS EXCLUSIVOS', img:'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2874', desc:'Rótulos fenomenais da Meander e Daschbosch, unindo tradição e modernidade com excelente margem.', filter:'África do Sul' },
            { country:'Argentina', tag:'CLÁSSICOS COM ALTO GIRO', img:'https://images.unsplash.com/photo-1596464716127-f2a82984aec9?q=80&w=2940', desc:'Malbecs de altitude e blends consistentes que garantem satisfação e recompra constante.', filter:'Argentina' },
          ].map((c, i) => (
            <motion.div key={c.country} initial={{opacity:0,x:i===0?-30:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}
              className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer shadow-lg">
              <img src={c.img} alt={c.country} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600 via-purple-600/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-3 block">{c.tag}</span>
                <h3 className="text-4xl md:text-5xl font-serif text-white font-light mb-4">{c.country}</h3>
                <p className="text-white/60 leading-relaxed mb-6 max-w-md font-light">{c.desc}</p>
                <Link to={`/portfolio?country=${c.filter}`} className="flex items-center text-primary font-medium text-sm group-hover:text-gold-bright transition-colors">
                  Ver Vinhos <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>

    {/* ═══════════════════════════════════════
        B2B PILLARS
        ═══════════════════════════════════════ */}
    <section className="section-pad bg-bg-DEFAULT">
      <Container>
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="h2 text-purple mb-6">Por que ser um parceiro Kinieh?</h2>
          <div className="divider-gold max-w-24 mx-auto mb-6" />
          <p className="body-lg text-tx-muted max-w-2xl mx-auto">
            Estruturamos nossa operação para fornecer vinhos de alta demanda com rentabilidade sustentável para toda a cadeia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon:Users, title:'Parceria Focada em Resultados', text:'Acesso às importações diretas com preços desenhados para proteger sua margem.', d:0.1 },
            { icon:TrendingUp, title:'Alto Market Fit', text:'Nossa equipe de sourcing seleciona perfis que o consumidor já procura, garantindo giros nas prateleiras.', d:0.2 },
            { icon:ShieldCheck, title:'Exclusividade Territorial', text:'Operamos com respeito às regiões de distribuição, protegendo quem consolida os rótulos no mercado local.', d:0.3 },
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
          <h2 className="h2 text-white mb-6 text-balance font-light">Pronto para atualizar a sua carta de vinhos?</h2>
          <div className="divider-gold max-w-24 mx-auto mb-8" />
          <p className="body-lg text-white/50 mb-10 max-w-xl mx-auto text-balance">
            Entre em contato com nosso time comercial e receba as condições de distribuição em primeira mão.
          </p>
          <Link to="/contato" className="btn-gold btn-lg">Falar com Executivo de Vendas</Link>
        </div>
      </Container>
    </section>
  </div>
)

export default Home
