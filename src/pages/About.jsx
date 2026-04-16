import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../components/ui/Badge'
import Container from '../components/ui/Container'

const stats = [
  { value: '2', label: 'Países Sourcing' },
  { value: '12+', label: 'Rótulos Exclusivos' },
  { value: '100%', label: 'Foco B2B' },
]

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="image-overlay" />
          <img
            src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=2787"
            alt="Profissionais e taças de vinho"
            className="w-full h-full object-cover opacity-40 scale-105"
            loading="eager"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-6 flex justify-center">
            <Badge variant="primary">Institucional</Badge>
          </motion.div>
          <h1 className="heading-1 text-white mb-8 text-balance font-serif uppercase tracking-widest text-4xl md:text-6xl">
            Sua Importadora <br />
            <span className="text-primary italic">Estratégica</span>
          </h1>
          <p className="body-large text-text-tertiary max-w-2xl mx-auto text-balance">
            Construímos o portfólio inteligente que o seu negócio precisa para crescer e fidelizar clientes.
          </p>
        </motion.div>
      </header>

      {/* Story */}
      <section className="section-padding bg-background-dark">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              className="order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2874"
                  alt="Vinhedos da África do Sul"
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/10 rounded-xl -z-10 pattern-dots" />
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="gold">Nosso Propósito</Badge>
              <h2 className="heading-2 text-text-primary text-balance font-serif">
                Curadoria cuidadosa para o seu{' '}
                <span className="text-primary italic">Negócio</span> e para sua <span className="text-primary italic">Mesa</span>
              </h2>
              <div className="space-y-6 text-text-secondary body-large font-light">
                <p>
                  A Kinieh é uma importadora baseada no Brasil com um objetivo claro: 
                  suprir tanto a demanda exigente de empresas e restaurantes, quanto o paladar 
                  do consumidor que busca descobrir novos terroirs. Atuamos com extrema curadoria, 
                  selecionando vinícolas autênticas como Daschbosch e Meander na África do Sul, e 
                  parceiros de prestígio na Argentina.
                </p>
                <p>
                  Acreditamos que um bom vinho deve gerar excelentes negócios para os nossos 
                  distribuidores e memórias inesquecíveis para quem abre a garrafa em casa. 
                  Operamos com logística ágil, fomento da cultura do vinho e preços justos 
                  para todos os elos dessa rede de apaixonados.
                </p>
              </div>

              <div className="pt-8 border-t border-primary/20 grid grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">
                      {stat.value}
                    </p>
                    <p className="text-xs uppercase tracking-widest text-primary font-bold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Quote Banner */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549449339-4467c695a4f3?q=80&w=2940"
            alt="Ambiente profissional"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <Container size="narrow" className="relative z-10 text-center">
          <motion.blockquote
            className="heading-2 text-white mb-10 text-balance font-serif italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "O nosso maior legado não é a garrafa selada, mas o brinde que ela 
            promove. Trazemos ao mercado vinhos que constróem negócios prósperos 
            e embalam momentos inesquecíveis."
          </motion.blockquote>
          <div className="divider w-24 mx-auto bg-white/50 mb-8" />
          <p className="text-white/80 font-medium tracking-[0.2em] uppercase text-sm">
            Estratégia & Cultura
          </p>
        </Container>
      </section>
    </div>
  )
}

export default About
