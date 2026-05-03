import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Container from '../components/ui/Container'
import { getWhatsAppGeneral } from '../data/wines'

const WhatsAppIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 bg-bg-DEFAULT">
      <section className="mb-12">
        <Container>
          <div className="max-w-2xl pb-8 border-b border-tx-light/40">
            <nav className="label text-tx-muted mb-4 flex gap-2"><span>Início</span><span className="text-primary">/</span><span className="text-primary">Contato</span></nav>
            <h1 className="h1 text-purple mb-4">Vamos <span className="text-primary italic">Conversar</span></h1>
            <p className="body-lg text-tx-muted">Quer saber mais sobre algum vinho? Precisa de ajuda para escolher? Estamos aqui.</p>
          </div>
        </Container>
      </section>

      <section className="section-pad pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* WhatsApp Main CTA */}
            <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
              <div className="bg-gradient-to-br from-[#075E54] to-[#128C7E] rounded-2xl p-10 lg:p-12 text-white relative overflow-hidden shadow-xl">
                <div className="absolute w-64 h-64 rounded-full bg-white/5 -top-20 -right-20" />
                <div className="absolute w-32 h-32 rounded-full bg-white/5 -bottom-10 -left-10" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                    <WhatsAppIcon size={32} />
                  </div>
                  <h2 className="h3 text-white mb-4">O jeito mais fácil de falar com a gente</h2>
                  <p className="text-white/70 body-lg mb-8 leading-relaxed">
                    Pelo WhatsApp você tira dúvidas, recebe sugestões personalizadas e faz seu pedido sem complicação. Respondemos rápido — é só mandar um "oi".
                  </p>
                  <a href={getWhatsAppGeneral()} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-[#075E54] px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    <WhatsAppIcon size={20} />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>

              {/* Quick info cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-xl p-5 border border-tx-light/40 shadow-card">
                  <Clock size={18} className="text-primary mb-3" />
                  <p className="label text-tx-faint mb-1">Atendimento</p>
                  <p className="text-sm text-tx-secondary font-medium">Seg-Sex: 9h-18h<br/>Sáb: 10h-14h</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-tx-light/40 shadow-card">
                  <MessageCircle size={18} className="text-primary mb-3" />
                  <p className="label text-tx-faint mb-1">Resposta</p>
                  <p className="text-sm text-tx-secondary font-medium">Normalmente em<br/>menos de 1 hora</p>
                </div>
              </div>
            </motion.div>

            {/* Other contact info */}
            <motion.div className="space-y-8" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2,duration:0.6}}>
              <div>
                <Badge className="mb-4">Informações</Badge>
                <h2 className="h3 text-purple mb-8">Outros canais</h2>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Localização', value: 'Batel, Curitiba - PR\nEntregamos em todo Brasil' },
                  { icon: Phone, label: 'Telefone', value: '+55 (41) 99999-9999' },
                  { icon: Mail, label: 'E-mail', value: 'contato@kinieh.com.br' },
                ].map(({icon:Ic,label,value}) => (
                  <div key={label} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-tx-light/40 shadow-card hover:shadow-card-hover transition-all">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0"><Ic size={18} className="text-primary" /></div>
                    <div><p className="label text-tx-faint mb-1">{label}</p><p className="text-tx-secondary body-sm whitespace-pre-line">{value}</p></div>
                  </div>
                ))}
              </div>

              {/* Instagram */}
              <div className="p-6 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl text-white">
                <h3 className="font-serif text-xl font-medium mb-3">Siga a Kinieh</h3>
                <p className="text-white/60 text-sm mb-4">Novidades, bastidores e inspirações para a sua próxima taça.</p>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold-bright hover:text-white transition-colors">
                  @kiniehwines →
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}
