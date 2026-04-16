import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Container from '../components/ui/Container'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: 'partnership', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Contact form:', form)
    setLoading(false)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
  }

  return (
    <div className="min-h-screen pt-24 bg-background">
      {/* Header */}
      <section className="mb-12">
        <Container>
          <div className="max-w-2xl pb-8 border-b border-white/5">
            <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-tertiary mb-4 font-medium">
              <span>Início</span>
              <span className="text-primary">/</span>
              <span className="text-primary">Contato</span>
            </nav>
            <h1 className="heading-1 text-text-primary mb-4 font-serif">
              Vamos <span className="text-primary italic">Conversar</span>
            </h1>
            <p className="body-large text-text-secondary font-light">
              Seja para parcerias comerciais, eventos privados ou simplesmente
              para conhecer melhor nosso universo de vinhos — estamos prontos
              para atendê-lo.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Badge variant="gold" className="mb-4">Informações</Badge>
                <h2 className="heading-3 text-text-primary mb-6">Nosso Escritório</h2>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Endereço', value: 'Batel, Curitiba - PR\nBrasil' },
                  { icon: Phone, label: 'Telefone', value: '+55 (41) 99999-9999' },
                  { icon: Mail, label: 'E-mail', value: 'contato@kinieh.com.br' },
                  { icon: Clock, label: 'Horário', value: 'Seg-Sex: 9h-18h\nSáb: 10h-14h' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-text-muted mb-1 font-medium">{label}</p>
                      <p className="text-text-secondary body-small whitespace-pre-line">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <motion.div
                className="relative rounded-xl overflow-hidden h-48 bg-white/5 border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Navigation className="w-8 h-8 text-primary mb-2 mx-auto" />
                    <p className="text-text-muted text-sm">Batel, Curitiba - PR</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card p-8 lg:p-10">
                <h2 className="heading-3 text-text-primary mb-2">Envie sua Mensagem</h2>
                <p className="body-small text-text-muted mb-8">
                  Preencha o formulário e retornaremos em até 24h úteis.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input label="Nome Completo" name="name" value={form.name} onChange={handleChange} required placeholder="Seu nome" />
                    <Input label="E-mail" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="seu@email.com" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input label="Telefone" name="phone" value={form.phone} onChange={handleChange} placeholder="(41) 99999-9999" />
                    <Input label="Empresa" name="company" value={form.company} onChange={handleChange} placeholder="Nome da empresa" />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-tertiary mb-2 font-medium">
                      Assunto
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="input"
                    >
                      <option value="partnership">Parceria Comercial</option>
                      <option value="event">Evento Privado</option>
                      <option value="press">Imprensa</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-text-tertiary mb-2 font-medium">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Como podemos ajudá-lo?"
                      className="input resize-none"
                    />
                  </div>

                  <Button variant="primary" size="lg" isLoading={loading} className="w-full sm:w-auto">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Contact
