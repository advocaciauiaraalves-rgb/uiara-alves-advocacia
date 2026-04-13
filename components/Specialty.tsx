'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HeartPulse, ShieldX, Pill } from 'lucide-react'

const specialties = [
  {
    icon: HeartPulse,
    title: 'Cirurgias reparadoras pós-bariátrica',
    description:
      'Dermolipectomia, mamoplastia, braquioplastia e demais procedimentos negados após grande perda de peso.',
  },
  {
    icon: ShieldX,
    title: 'Negativas abusivas de planos de saúde',
    description:
      'Cobertura negada para tratamentos, exames e internações previstos em contrato ou lei.',
  },
  {
    icon: Pill,
    title: 'Tratamentos e procedimentos negados',
    description:
      'Medicamentos, terapias e procedimentos essenciais recusados indevidamente pelo plano.',
  },
]

export default function Specialty() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="especialidade" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Especialidade
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-dark mt-3 mb-4">
            Luto pelo seu direito à saúde
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Atuação focada, estratégica e humana nas causas que envolvem planos de saúde.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-off-white rounded-2xl p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <item.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-playfair text-xl text-dark font-semibold">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
