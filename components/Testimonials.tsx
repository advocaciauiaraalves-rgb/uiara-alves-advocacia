'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="depoimentos" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-widest">Depoimentos</span>
          <h2 className="font-playfair text-3xl md:text-4xl text-dark mt-3">
            O que dizem nossos clientes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-2 border-dashed border-gold/30 rounded-2xl p-12 flex flex-col items-center gap-4 text-center max-w-lg mx-auto"
        >
          <Quote size={40} className="text-gold/30" />
          <p className="text-text-muted text-lg font-playfair italic">
            &ldquo;Em breve, histórias reais de quem recuperou seu direito.&rdquo;
          </p>
          <div className="w-12 h-0.5 bg-gold/30" />
          <p className="text-text-muted text-sm">Depoimentos de clientes em breve.</p>
        </motion.div>
      </div>
    </section>
  )
}
