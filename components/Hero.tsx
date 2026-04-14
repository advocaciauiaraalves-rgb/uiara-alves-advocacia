'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const WHATSAPP_URL = 'https://wa.me/5585991516028'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Direito à Saúde
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl text-dark leading-snug">
            Seu plano de saúde negou?{' '}
            <span className="text-gold">Você tem direito</span> — e eu luto por ele.
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Especialista em ações reparadoras contra planos de saúde.
            Atendimento digital em todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-dark px-8 py-3 rounded-full font-semibold text-center hover:bg-gold-light transition-colors"
            >
              Consulta pelo WhatsApp
            </a>
            <a
              href="#sobre"
              className="border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold text-center hover:bg-gold/10 transition-colors"
            >
              Conheça minha história
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-gold to-gold-light rounded-full z-10" />
          <div className="relative ml-4 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
            <Image
              src="/uiara-about.jpg"
              alt="Dra. Uiara Alves, advogada especialista em planos de saúde"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
