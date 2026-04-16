import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Users, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════
          HERO SECTION (B2B Intermediário)
          ═══════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="image-overlay" />
          <img
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940"
            alt="Taças de vinho em ambiente profissional"
            className="w-full h-full object-cover opacity-40 scale-105"
            loading="eager"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-20 text-center px-4 max-w-6xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <Badge variant="gold">Importadora & Curadoria</Badge>
          </motion.div>

          <motion.h1
            className="font-serif heading-1 text-text-primary mb-8 text-balance uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Vinhos Selecionados <br/>
            para o seu <span className="text-primary italic">Negócio</span> e sua <span className="text-primary italic">Mesa</span>
          </motion.h1>

          <motion.p
            className="body-large text-text-tertiary max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Nascemos para conectar terroirs incríveis à sua taça. 
            Seja para abastecer o seu restaurante com rótulos de alto giro, 
            ou para descobrir o seu novo vinho favorito para o fim de semana.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Link to="/portfolio" className="btn-primary btn-lg">
              Conhecer Nossos Vinhos
            </Link>
            <Link to="/contato" className="btn-secondary btn-lg">
              Área para Lojistas
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          PREMIUM COUNTRIES SECTION
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="primary" className="mb-4">Origens</Badge>
            <h2 className="heading-2 text-text-primary font-serif">
              Explorar por <span className="text-primary italic">País</span>
            </h2>
            <div className="divider max-w-24 mx-auto bg-gold mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* South Africa */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2874&auto=format&fit=crop" 
                alt="Vinhedos da África do Sul"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3 block">LANÇAMENTOS EXCLUSIVOS</span>
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">África do Sul</h3>
                <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
                  Apresentamos nossa nova importação exclusiva: Rótulos fenomenais da Meander e Daschbosch, 
                  unindo tradição e modernidade com excelente margem.
                </p>
                <Link to="/portfolio?country=África do Sul" className="flex items-center text-primary font-medium group-hover:text-gold transition-colors">
                  Ver Vinhos Sul-Africanos <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>

            {/* Argentina */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1596464716127-f2a82984aec9?q=80&w=2940&auto=format&fit=crop" 
                alt="Vinhedos na Argentina"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-3 block">CLÁSSICOS COM ALTO GIRO</span>
                <h3 className="text-4xl md:text-5xl font-serif text-white mb-4">Argentina</h3>
                <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
                  Vinhos que são sinônimo de sucesso comercial. Malbecs de altitude e blends consistentes 
                  que garantem satisfação e recompra constante.
                </p>
                <Link to="/portfolio?country=Argentina" className="flex items-center text-primary font-medium group-hover:text-gold transition-colors">
                  Ver Vinhos Argentinos <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          B2B PILLARS
          ═══════════════════════════════════════ */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent border-t border-white/5">
        <Container>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="heading-2 text-text-primary mb-6">Por que ser um parceiro Kinieh?</h2>
            <div className="divider max-w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />
            <p className="body-large text-text-tertiary max-w-2xl mx-auto">
              Estruturamos nossa operação para fornecer vinhos de alta demanda 
              com rentabilidade sustentável para toda a cadeia de distribuição.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                title: 'Parceria Focada em Resultados',
                text: 'Ao entrar em nosso portfólio de distribuidores, você garante acesso às importações diretas com preços desenhados para proteger sua margem.',
                delay: 0.1,
              },
              {
                icon: TrendingUp,
                title: 'Alto Market Fit',
                text: 'Não trazemos "vinhos difíceis". Nossa equipe de sourcing seleciona perfis que o consumidor já procura, garantindo giros nas prateleiras.',
                delay: 0.2,
              },
              {
                icon: ShieldCheck,
                title: 'Exclusividade Territorial',
                text: 'Entendemos o valor do seu trabalho. Operamos com respeito às regiões de distribuição, protegendo quem consolida os rótulos no mercado local.',
                delay: 0.3,
              },
            ].map(({ icon: Icon, title, text, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay, duration: 0.6 }}
              >
                <Card variant="hover" className="h-full border border-white/10 bg-white/[0.02]">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-4 text-text-primary mb-4">{title}</h3>
                  <p className="body-large text-text-tertiary leading-relaxed">{text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════
          CTA B2B
          ═══════════════════════════════════════ */}
      <section className="section-padding bg-background-dark border-t border-white/5">
        <Container size="narrow">
          <div className="text-center">
            <h2 className="heading-2 text-text-primary mb-6 text-balance">
              Pronto para atualizar a sua carta de vinhos?
            </h2>
            <p className="body-large text-text-tertiary mb-10 max-w-xl mx-auto text-balance">
              Entre em contato com nosso time comercial e receba e as condições de 
              distribuição da nossa linha sul-africana em primeira mão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato" className="btn-primary btn-lg">
                Falar com Executivo de Vendas
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Home
