import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Badge from '../components/ui/Badge'
import Container from '../components/ui/Container'
import KiniehLogo from '../components/ui/KiniehLogo'

const stats = [
  { value: '2', label: 'Países Sourcing' },
  { value: '12+', label: 'Rótulos Exclusivos' },
  { value: '100%', label: 'Foco B2B + B2C' },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-500">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=2787" alt="" className="w-full h-full object-cover opacity-20" /><div className="absolute inset-0 bg-gradient-to-t from-purple-600 via-purple-600/70 to-purple-600/30" /></div>
        <div className="grain absolute inset-0 pointer-events-none" />
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}} className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mb-6 flex justify-center"><Badge>Institucional</Badge></motion.div>
          <h1 className="h1 text-white mb-8 text-balance uppercase tracking-widest text-4xl md:text-6xl">
            Sua Importadora <br/><span className="gold-shimmer italic">Estratégica</span>
          </h1>
          <p className="body-lg text-white/50 max-w-2xl mx-auto text-balance">
            Construímos o portfólio inteligente que o seu negócio precisa para crescer e fidelizar clientes.
          </p>
        </motion.div>
      </header>

      {/* Story */}
      <section className="section-pad bg-bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div className="order-2 lg:order-1 relative" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2874" alt="Vinhedos" className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-primary/10 rounded-xl -z-10 pattern-dots" />
            </motion.div>

            <motion.div className="order-1 lg:order-2 space-y-8" initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
              <Badge>Nosso Propósito</Badge>
              <h2 className="h2 text-purple text-balance">
                Curadoria cuidadosa para o seu{' '}<span className="text-primary italic">Negócio</span> e para sua <span className="text-primary italic">Mesa</span>
              </h2>
              <div className="space-y-6 text-tx-secondary body-lg">
                <p>A Kinieh é uma importadora baseada no Brasil com um objetivo claro: suprir tanto a demanda exigente de empresas e restaurantes, quanto o paladar do consumidor que busca descobrir novos terroirs.</p>
                <p>Acreditamos que um bom vinho deve gerar excelentes negócios para os nossos distribuidores e memórias inesquecíveis para quem abre a garrafa em casa.</p>
              </div>
              <div className="pt-8 border-t border-primary/20 grid grid-cols-3 gap-8">
                {stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-3xl md:text-4xl font-bold text-purple mb-2 font-serif">{s.value}</p>
                    <p className="label text-primary">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1549449339-4467c695a4f3?q=80&w=2940" alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-purple-600/90" /><div className="absolute inset-0 bg-black/20" /></div>
        <div className="grain absolute inset-0 pointer-events-none" />
        <Container narrow className="relative z-10 text-center">
          <motion.blockquote className="h2 text-white mb-10 text-balance font-serif italic font-light" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}>
            "O nosso maior legado não é a garrafa selada, mas o brinde que ela promove. Trazemos ao mercado vinhos que constroem negócios prósperos e embalam momentos inesquecíveis."
          </motion.blockquote>
          <div className="divider-gold max-w-24 mx-auto mb-8" />
          <p className="text-white/60 font-medium tracking-[0.2em] uppercase text-sm">Estratégia & Cultura</p>
        </Container>
      </section>
    </div>
  )
}
