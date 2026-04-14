'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Search, Scale } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5585991516028'

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Consulta',
    description: 'Me conte sua situação pelo WhatsApp. Análise inicial gratuita e sem compromisso.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Estratégia',
    description: 'Avalio seu caso e monto a melhor estratégia jurídica personalizada para a sua situação.',
  },
  {
    number: '03',
    icon: Scale,
    title: 'Ação',
    description: 'Atuamos para garantir seu direito com agilidade, técnica e total comprometimento.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="como-funciona" className="bg-off-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-widest">Como Funciona</span>
          <h2 className="font-playfair text-3xl md:text-4xl text-dark mt-3">
            Do problema à solução em 3 passos
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="grid md:grid-cols-[4rem_auto_1fr] gap-4 md:gap-10 py-10 border-t border-dark/10 items-center"
            >
              <span className="font-playfair text-4xl md:text-5xl font-bold text-gold/25 leading-none select-none">
                {step.number}
              </span>
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
                <step.icon size={18} className="text-gold" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-playfair text-xl text-dark font-bold">{step.title}</h3>
                <p className="text-text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-dark px-10 py-3 rounded-full font-semibold hover:bg-gold-light transition-colors"
          >
            Iniciar minha consulta
          </a>
        </motion.div>
      </div>
    </section>
  )
}
