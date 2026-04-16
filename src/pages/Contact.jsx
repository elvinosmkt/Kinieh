import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Container from '../components/ui/Container'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', subject:'partnership', message:'' })
  const [loading, setLoading] = useState(false)
  const chg = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async e => {
    e.preventDefault(); setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false); alert('Mensagem enviada com sucesso!')
  }

  return (
    <div className="min-h-screen pt-24 bg-bg-DEFAULT">
      <section className="mb-12">
        <Container>
          <div className="max-w-2xl pb-8 border-b border-tx-light/40">
            <nav className="label text-tx-muted mb-4 flex gap-2"><span>Início</span><span className="text-primary">/</span><span className="text-primary">Contato</span></nav>
            <h1 className="h1 text-purple mb-4">Vamos <span className="text-primary italic">Conversar</span></h1>
            <p className="body-lg text-tx-muted">Seja para parcerias comerciais, eventos privados ou para conhecer nosso universo de vinhos.</p>
          </div>
        </Container>
      </section>

      <section className="section-pad pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div><Badge className="mb-4">Informações</Badge><h2 className="h3 text-purple mb-6">Nosso Escritório</h2></div>
              <div className="space-y-6">
                {[
                  { icon:MapPin, label:'Endereço', value:'Batel, Curitiba - PR\nBrasil' },
                  { icon:Phone, label:'Telefone', value:'+55 (41) 99999-9999' },
                  { icon:Mail, label:'E-mail', value:'contato@kinieh.com.br' },
                  { icon:Clock, label:'Horário', value:'Seg-Sex: 9h-18h\nSáb: 10h-14h' },
                ].map(({icon:Ic,label,value}) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0"><Ic size={18} className="text-primary" /></div>
                    <div><p className="label text-tx-faint mb-1">{label}</p><p className="text-tx-secondary body-sm whitespace-pre-line">{value}</p></div>
                  </div>
                ))}
              </div>
              <motion.div className="rounded-xl overflow-hidden h-48 bg-bg-card border border-tx-light/40 flex items-center justify-center" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
                <div className="text-center"><Navigation className="w-8 h-8 text-primary mb-2 mx-auto" /><p className="text-tx-muted text-sm">Batel, Curitiba - PR</p></div>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div className="lg:col-span-3" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
              <div className="bg-white rounded-xl border border-tx-light/40 shadow-card p-8 lg:p-10">
                <h2 className="h3 text-purple mb-2">Envie sua Mensagem</h2>
                <p className="body-sm text-tx-muted mb-8">Preencha o formulário e retornaremos em até 24h úteis.</p>
                <form onSubmit={submit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input label="Nome Completo" name="name" value={form.name} onChange={chg} required placeholder="Seu nome" />
                    <Input label="E-mail" name="email" type="email" value={form.email} onChange={chg} required placeholder="seu@email.com" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input label="Telefone" name="phone" value={form.phone} onChange={chg} placeholder="(41) 99999-9999" />
                    <Input label="Empresa" name="company" value={form.company} onChange={chg} placeholder="Nome da empresa" />
                  </div>
                  <div>
                    <label className="label text-tx-muted mb-2 block">Assunto</label>
                    <select name="subject" value={form.subject} onChange={chg} className="input-k">
                      <option value="partnership">Parceria Comercial</option>
                      <option value="event">Evento Privado</option>
                      <option value="press">Imprensa</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="label text-tx-muted mb-2 block">Mensagem</label>
                    <textarea name="message" value={form.message} onChange={chg} rows={5} required placeholder="Como podemos ajudá-lo?" className="input-k resize-none" />
                  </div>
                  <Button variant="gold" size="lg" isLoading={loading} className="w-full sm:w-auto">Enviar Mensagem</Button>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}
