'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Mail, MapPin, AtSign } from 'lucide-react'

// Substituir pelo ID real após criar conta em formspree.io
const FORMSPREE_FORM_ID = 'SEU_FORM_ID_AQUI'

const WHATSAPP_1 = 'https://wa.me/5585991516028'
const WHATSAPP_2 = 'https://wa.me/5585992563399'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="bg-off-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-widest">Contato</span>
          <h2 className="font-playfair text-3xl md:text-4xl text-dark mt-3 mb-2">
            Fale com a gente
          </h2>
          <p className="text-text-muted">Atendimento digital em todo o Brasil</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {[
              { href: WHATSAPP_1, icon: MessageCircle, label: 'WhatsApp', value: '(85) 99151-6028' },
              { href: WHATSAPP_2, icon: MessageCircle, label: 'WhatsApp', value: '(85) 99256-3399' },
              { href: 'mailto:advocaciauiaraalves@gmail.com', icon: Mail, label: 'E-mail', value: 'advocaciauiaraalves@gmail.com' },
              { href: 'https://www.instagram.com/uiaralves', icon: AtSign, label: 'Instagram', value: '@uiaralves' },
            ].map((item) => (
              <a
                key={item.value}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                  <item.icon size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide">{item.label}</p>
                  <p className="text-dark font-semibold">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-gold" />
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wide">Endereço</p>
                <a
                  href="https://maps.google.com/?q=Avenida+Humberto+Monte+2929+Fortaleza+CE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark font-semibold leading-snug hover:text-gold transition-colors"
                >
                  Av. Humberto Monte, 2929, Sala 607<br />
                  Torre Norte, Pici<br />
                  Fortaleza-CE, CEP 60440-593
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-dark">Nome</label>
                <input
                  id="name" name="name" type="text" required
                  placeholder="Seu nome completo"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-dark">
                  Telefone / WhatsApp
                </label>
                <input
                  id="phone" name="phone" type="tel" required
                  placeholder="(00) 00000-0000"
                  className="border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-dark">Mensagem</label>
                <textarea
                  id="message" name="message" required rows={4}
                  placeholder="Descreva brevemente sua situação..."
                  className="border border-gray-200 rounded-xl px-4 py-3 text-dark focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-gold text-dark py-3 rounded-full font-semibold hover:bg-gold-light transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm text-center">
                  Mensagem enviada! Entraremos em contato em breve.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">
                  Erro ao enviar. Por favor, entre em contato pelo WhatsApp.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
