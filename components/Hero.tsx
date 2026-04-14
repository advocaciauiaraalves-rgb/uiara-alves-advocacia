'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const WHATSAPP_URL = 'https://wa.me/5585991516028'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-dark overflow-hidden pt-20">

      {/* Iluminação quente — glow dourado suave emanando da região da foto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 75% at 78% 50%, oklch(0.62 0.09 68 / 0.10) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">
            Direito à Saúde
          </span>

          <h1
            className="font-playfair text-warm-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', lineHeight: 1.2 }}
          >
            Seu plano de saúde negou?{' '}
            <span className="text-gold">Você tem direito</span>
            {' '}— e eu luto por ele.
          </h1>

          <p className="text-text-muted-dark text-lg leading-relaxed" style={{ maxWidth: '50ch' }}>
            Especialista em ações reparadoras contra planos de saúde.
            Atendimento digital em todo o Brasil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border border-gold text-gold px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-center transition-all duration-300 hover:text-dark"
            >
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" aria-hidden="true" />
              <span className="relative">Falar com nosso time de especialistas</span>
            </a>
            <a
              href="#sobre"
              className="text-warm-white/60 text-xs font-semibold uppercase tracking-[0.2em] text-center py-3.5 hover:text-gold transition-colors duration-300"
            >
              Conheça minha história
            </a>
          </div>
        </motion.div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Linha decorativa vertical */}
          <div
            aria-hidden="true"
            className="absolute left-0 top-8 bottom-8 w-px z-10"
            style={{
              background: 'linear-gradient(to bottom, transparent, #C5A46D 30%, #C5A46D 70%, transparent)',
            }}
          />

          {/* Halo quente atrás da foto */}
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 50%, oklch(0.62 0.09 68 / 0.06), transparent)',
            }}
          />

          {/* Container da foto */}
          <div
            className="relative ml-5 rounded-2xl overflow-hidden aspect-[3/4]"
            style={{
              boxShadow:
                '0 40px 90px oklch(0.08 0.01 70 / 0.8), 0 0 50px oklch(0.62 0.09 68 / 0.08)',
            }}
          >
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
