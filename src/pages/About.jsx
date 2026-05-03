import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import Container from '../components/ui/Container'
import KiniehLogo from '../components/ui/KiniehLogo'
import { getWhatsAppGeneral } from '../data/wines'

const stats = [
  { value: '12+', label: 'Rótulos Selecionados' },
  { value: '2', label: 'Países de Origem' },
  { value: '3', label: 'Vinícolas Parceiras' },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-500">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=2787" alt="" className="w-full h-full object-cover opacity-20" /><div className="absolute inset-0 bg-gradient-to-t from-purple-600 via-purple-600/70 to-purple-600/30" /></div>
        <div className="grain absolute inset-0 pointer-events-none" />
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}} className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mb-6 flex justify-center"><Badge>Quem Somos</Badge></motion.div>
          <h1 className="h1 text-white mb-8 text-balance text-4xl md:text-6xl font-light">
            Vinhos incríveis <br/>não precisam de <span className="gold-shimmer italic font-medium">diploma</span>
          </h1>
          <p className="body-lg text-white/50 max-w-2xl mx-auto text-balance">
            A Kinieh existe para trazer ao Brasil vinhos da África do Sul e da Argentina que encantam pelo sabor, não pela etiqueta.
          </p>
        </motion.div>
      </header>

      {/* Story */}
      <section className="section-pad bg-bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div className="order-2 lg:order-1 relative" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2874" alt="Vinhedos sul-africanos" className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-primary/10 rounded-xl -z-10 pattern-dots" />
            </motion.div>

            <motion.div className="order-1 lg:order-2 space-y-8" initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
              <Badge>Nossa História</Badge>
              <h2 className="h2 text-purple text-balance">
                Do mundo <span className="text-primary italic">direto</span> para a sua mesa
              </h2>

              <div className="space-y-6 text-tx-secondary body-lg">
                <p>A Kinieh nasceu de uma convicção: existem vinhos extraordinários no mundo que nunca chegaram ao Brasil. Da África do Sul à Argentina, buscamos rótulos que surpreendem — não porque são caros, mas porque são genuínos.</p>
                <p>Nossa curadoria é simples — selecionamos vinhos que nós mesmos gostaríamos de abrir depois de um dia longo, servir para amigos em um jantar descontraído, ou levar de presente para alguém que a gente admira.</p>
                <p>Não somos sommeliers. Somos pessoas que gostam de vinho bom e acreditam que a melhor experiência é a que acontece sem pretensão — com boa companhia, boa comida e uma garrafa que vale cada gole.</p>
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

      {/* Mission Values */}
      <section className="section-pad bg-bg-DEFAULT">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-4">Nosso Jeito</Badge>
            <h2 className="h2 text-purple mb-6">O que nos <span className="text-primary italic">move</span></h2>
            <div className="divider-gold max-w-24 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Descoberta', desc: 'Cada garrafa é um convite para experimentar algo novo. Não seguimos tendências — seguimos o sabor.' },
              { title: 'Honestidade', desc: 'Vinhos que entregam o que prometem. Sem rótulos inflados, sem histórias inventadas. O líquido fala por si.' },
              { title: 'Acessibilidade', desc: 'Acreditamos que o melhor vinho é o que cabe na sua vida. Na sua mesa, no seu momento, do seu jeito.' },
            ].map((v, i) => (
              <motion.div key={v.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1,duration:0.6}}
                className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-serif text-primary font-bold">{i + 1}</span>
                </div>
                <h3 className="h4 text-purple mb-4">{v.title}</h3>
                <p className="body-lg text-tx-muted">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0"><img src="https://images.unsplash.com/photo-1549449339-4467c695a4f3?q=80&w=2940" alt="" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-purple-600/90" /><div className="absolute inset-0 bg-black/20" /></div>
        <div className="grain absolute inset-0 pointer-events-none" />
        <Container narrow className="relative z-10 text-center">
          <motion.blockquote className="h2 text-white mb-10 text-balance font-serif italic font-light" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}>
            "A gente não vende vinho. A gente entrega a desculpa perfeita para reunir as pessoas que importam."
          </motion.blockquote>
          <div className="divider-gold max-w-24 mx-auto mb-8" />
          <p className="text-white/60 font-medium tracking-[0.2em] uppercase text-sm">Kinieh Wines</p>
          <div className="mt-12">
            <a href={getWhatsAppGeneral()} target="_blank" rel="noopener noreferrer" className="btn-gold btn-lg">Conhecer Nossos Vinhos</a>
          </div>
        </Container>
      </section>
    </div>
  )
}
