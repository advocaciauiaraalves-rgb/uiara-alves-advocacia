'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="bg-off-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
              <Image
                src="/uiara-hero.jpg"
                alt="Dra. Uiara Alves"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold text-dark px-6 py-3 rounded-xl shadow-lg font-semibold text-sm">
              OAB/CE 22.546
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <span className="text-gold text-xs font-bold uppercase tracking-widest">Sobre</span>
            <h2 className="font-playfair text-3xl md:text-4xl text-dark">Uiara Alves</h2>

            <blockquote className="py-2">
              <p className="font-playfair text-xl md:text-2xl text-dark/80 italic leading-snug">
                &ldquo;Também sou paciente bariátrica — e essa vivência transforma a minha advocacia.&rdquo;
              </p>
            </blockquote>

            <div className="flex flex-col gap-4 text-text-muted leading-relaxed">
              <p>
                Sou Uiara Alves, advogada especialista em Direito da Saúde, e dedico minha atuação
                à defesa de pacientes diante de negativas abusivas de planos de saúde, com destaque
                para casos que envolvem cirurgias reparadoras após grande perda de peso.
              </p>
              <p>
                Minha advocacia é marcada não apenas pela técnica e pela estratégia, mas também pela
                vivência. Também sou paciente bariátrica, e isso me permite compreender, de forma
                real e profunda, os impactos dessa jornada e a importância de uma atuação jurídica
                séria, sensível e comprometida com resultados.
              </p>
              <p>
                No Uiara Alves Advocacia, prezamos por um serviço de excelência, com atendimento
                próximo, atuação direta e soluções jurídicas conduzidas com responsabilidade,
                agilidade e clareza. Atendimento digital em todo o Brasil.
              </p>
              <p>
                Aqui, cada demanda é tratada com seriedade, sensibilidade e compromisso. Porque por
                trás de cada processo, existe uma história que merece ser respeitada e um direito
                que precisa ser defendido com firmeza.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
