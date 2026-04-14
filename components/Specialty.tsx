'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const specialties = [
  {
    title: 'Cirurgias reparadoras pós-bariátrica',
    description:
      'Dermolipectomia, mamoplastia, braquioplastia e demais procedimentos negados após grande perda de peso.',
  },
  {
    title: 'Negativas abusivas de planos de saúde',
    description:
      'Cobertura negada para tratamentos, exames e internações previstos em contrato ou lei.',
  },
  {
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
          className="mb-14"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Especialidade
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-dark mt-3 mb-4">
            Luto pelo seu direito à saúde
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">
            Atuação focada, estratégica e humana nas causas que envolvem planos de saúde.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {specialties.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="grid md:grid-cols-[4rem_1fr_2fr] gap-4 md:gap-10 py-10 border-t border-dark/10 items-start"
            >
              <span className="font-playfair text-4xl md:text-5xl font-bold text-gold/25 leading-none select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-playfair text-xl text-dark font-bold leading-snug">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
