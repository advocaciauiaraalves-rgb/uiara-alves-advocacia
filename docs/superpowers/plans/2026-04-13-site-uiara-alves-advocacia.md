# Uiara Alves Advocacia — Site Institucional

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir site institucional one-page para Uiara Alves Advocacia em Next.js 14, com identidade visual dourado/preto, focado em ações reparadoras contra planos de saúde, publicado na Vercel.

**Architecture:** Single route `app/page.tsx` que monta 8 seções em sequência. Cada seção é um componente React independente em `components/`. Formulário de contato via Formspree (sem backend). Animações de entrada com Framer Motion + useInView.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React, Formspree

---

## Pré-requisitos (verificar antes de iniciar)

1. Node.js 18+ instalado — checar com `node -v`
   - Se não instalado: baixar em https://nodejs.org (versão LTS)
2. Logo exportada em PNG com fundo transparente → salvar como `public/logo.png`
   - Exportar do arquivo `uiara alves_Logomarca_advogada.cdr` no CorelDRAW
3. Foto profissional da Dra. Uiara → salvar como `public/uiara-photo.jpg`
   - Usar a foto do escritório já disponível

---

## Estrutura de Arquivos

```
uiara-alves-advocacia/
├── app/
│   ├── layout.tsx            # Root layout: fontes Google, metadata SEO
│   ├── page.tsx              # Monta todos os componentes na ordem correta
│   └── globals.css           # Reset + scroll suave
├── components/
│   ├── Header.tsx            # Header fixo: logo + nav âncoras + botão WhatsApp
│   ├── Hero.tsx              # Hero: tagline + foto + 2 CTAs
│   ├── About.tsx             # Sobre: bio + bloco destaque bariátrica + OAB badge
│   ├── Specialty.tsx         # Especialidade: 3 cards com ícones dourados
│   ├── HowItWorks.tsx        # Como funciona: 3 passos numerados + CTA
│   ├── Testimonials.tsx      # Depoimentos: placeholder elegante
│   ├── Contact.tsx           # Contato: info cards + formulário Formspree
│   ├── Footer.tsx            # Footer: logo + OAB + links + aviso legal
│   └── WhatsAppFloat.tsx     # Botão WhatsApp flutuante com animação ping
├── public/
│   ├── logo.png              # Logo UA (exportar do CDR — ver pré-requisitos)
│   └── uiara-photo.jpg       # Foto profissional da Dra. Uiara
├── __tests__/
│   ├── Header.test.tsx
│   ├── Hero.test.tsx
│   ├── About.test.tsx
│   ├── Specialty.test.tsx
│   ├── Contact.test.tsx
│   └── Footer.test.tsx
├── tailwind.config.ts        # Cores e fontes customizadas
├── vitest.config.ts
└── vitest.setup.ts
```

---

### Task 1: Setup do Projeto

**Files:**
- Create: `uiara-alves-advocacia/` (via create-next-app)
- Create: `tailwind.config.ts`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`

- [ ] **Step 1: Navegar para a pasta de projetos**

```bash
cd "C:/Users/advoc/Documents"
```

- [ ] **Step 2: Criar projeto Next.js 14**

```bash
npx create-next-app@14 uiara-alves-advocacia --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --no-git
```

Responder às perguntas do wizard (aceitar padrões sugeridos).

- [ ] **Step 3: Instalar dependências**

```bash
cd uiara-alves-advocacia
npm install framer-motion lucide-react
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- [ ] **Step 4: Criar vitest.config.ts**

```ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
})
```

- [ ] **Step 5: Criar vitest.setup.ts**

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 6: Adicionar script de teste em package.json**

Abrir `package.json` e adicionar dentro de `"scripts"`:
```json
"test": "vitest",
"test:run": "vitest run"
```

- [ ] **Step 7: Substituir tailwind.config.ts**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C84A',
        },
        dark: '#1A1A1A',
        'off-white': '#F9F7F4',
        'text-muted': '#4A4A4A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 8: Commit inicial**

```bash
git init
git add .
git commit -m "chore: setup Next.js 14 + Tailwind + Vitest"
```

---

### Task 2: Layout Base + SEO

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Substituir app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Uiara Alves Advocacia | Especialista em Planos de Saúde',
  description:
    'Advogada especialista em ações reparadoras contra planos de saúde e cirurgias pós-bariátrica. Atendimento digital em todo o Brasil. OAB/CE 22.546.',
  keywords: [
    'advogada plano de saúde',
    'ação reparadora plano de saúde',
    'cirurgia pós-bariátrica plano de saúde',
    'direito à saúde',
    'negativa plano de saúde',
    'Uiara Alves Advocacia',
    'advogada Fortaleza',
  ],
  openGraph: {
    title: 'Uiara Alves Advocacia | Especialista em Planos de Saúde',
    description:
      'Seu plano negou? Você tem direito — e eu luto por ele. Especialista em ações reparadoras.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans text-dark bg-white antialiased">{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Substituir app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

@layer base {
  * {
    box-sizing: border-box;
  }
}
```

- [ ] **Step 3: Verificar que o servidor sobe sem erros**

```bash
npm run dev
```

Abrir http://localhost:3000 — deve aparecer a página padrão do Next.js sem erros no terminal.
Parar o servidor com Ctrl+C.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: layout base com fontes Playfair+Inter e SEO metadata"
```

---

### Task 3: Componente Header

**Files:**
- Create: `components/Header.tsx`
- Create: `__tests__/Header.test.tsx`

- [ ] **Step 1: Criar o teste (antes do componente)**

Criar `__tests__/Header.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '@/components/Header'

describe('Header', () => {
  it('renderiza logo com alt correto', () => {
    render(<Header />)
    expect(screen.getByAltText('Uiara Alves Advocacia')).toBeInTheDocument()
  })

  it('renderiza botão de WhatsApp com link correto', () => {
    render(<Header />)
    const link = screen.getByText('Falar no WhatsApp')
    expect(link.closest('a')).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })

  it('renderiza links de navegação principais', () => {
    render(<Header />)
    expect(screen.getAllByText('Sobre')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Especialidade')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Contato')[0]).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar o teste — confirmar que falha**

```bash
npm run test:run
```

Esperado: FAIL — "Cannot find module '@/components/Header'"

- [ ] **Step 3: Criar components/Header.tsx**

```tsx
'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#especialidade', label: 'Especialidade' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
]

const WHATSAPP_URL = 'https://wa.me/5585991516028'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#inicio" aria-label="Uiara Alves Advocacia — início">
          <img src="/logo.png" alt="Uiara Alves Advocacia" className="h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-dark px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors"
          >
            Falar no WhatsApp
          </a>
        </nav>

        <button
          className="md:hidden text-dark"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-dark"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-dark px-5 py-2 rounded-full text-sm font-semibold text-center"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 4: Rodar o teste — confirmar que passa**

```bash
npm run test:run
```

Esperado: PASS nos 3 testes do Header.

- [ ] **Step 5: Commit**

```bash
git add components/Header.tsx __tests__/Header.test.tsx
git commit -m "feat: componente Header com nav âncoras e botão WhatsApp"
```

---

### Task 4: Componente Hero

**Files:**
- Create: `components/Hero.tsx`
- Create: `__tests__/Hero.test.tsx`

- [ ] **Step 1: Criar o teste**

Criar `__tests__/Hero.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Hero from '@/components/Hero'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('Hero', () => {
  it('renderiza a tagline principal', () => {
    render(<Hero />)
    expect(screen.getByText(/Seu plano de saúde negou/i)).toBeInTheDocument()
  })

  it('CTA primário aponta para WhatsApp', () => {
    render(<Hero />)
    const link = screen.getByText('Consulta pelo WhatsApp')
    expect(link.closest('a')).toHaveAttribute('href', expect.stringContaining('wa.me'))
  })

  it('CTA secundário aponta para seção sobre', () => {
    render(<Hero />)
    const link = screen.getByText('Conheça minha história')
    expect(link.closest('a')).toHaveAttribute('href', '#sobre')
  })

  it('renderiza foto da advogada', () => {
    render(<Hero />)
    expect(screen.getByAltText(/Dra\. Uiara Alves/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar o teste — confirmar que falha**

```bash
npm run test:run
```

Esperado: FAIL — "Cannot find module '@/components/Hero'"

- [ ] **Step 3: Criar components/Hero.tsx**

```tsx
'use client'

import { motion } from 'framer-motion'

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
          className="relative flex justify-center"
        >
          <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-gold to-gold-light rounded-full" />
          <img
            src="/uiara-photo.jpg"
            alt="Dra. Uiara Alves, advogada especialista em planos de saúde"
            className="w-full max-h-[520px] object-cover object-top rounded-2xl shadow-2xl ml-4"
          />
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Rodar o teste — confirmar que passa**

```bash
npm run test:run
```

Esperado: PASS nos 4 testes do Hero.

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx __tests__/Hero.test.tsx
git commit -m "feat: componente Hero com tagline, foto e CTAs"
```

---

### Task 5: Componente About

**Files:**
- Create: `components/About.tsx`
- Create: `__tests__/About.test.tsx`

- [ ] **Step 1: Criar o teste**

Criar `__tests__/About.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import About from '@/components/About'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useInView: () => true,
}))

describe('About', () => {
  it('renderiza o nome da advogada', () => {
    render(<About />)
    expect(screen.getByText('Uiara Alves')).toBeInTheDocument()
  })

  it('renderiza o destaque sobre paciente bariátrica', () => {
    render(<About />)
    expect(screen.getByText(/paciente bariátrica/i)).toBeInTheDocument()
  })

  it('renderiza o número da OAB', () => {
    render(<About />)
    expect(screen.getByText(/OAB\/CE 22\.546/i)).toBeInTheDocument()
  })

  it('renderiza foto da advogada', () => {
    render(<About />)
    expect(screen.getByAltText('Dra. Uiara Alves')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar o teste — confirmar que falha**

```bash
npm run test:run
```

Esperado: FAIL — "Cannot find module '@/components/About'"

- [ ] **Step 3: Criar components/About.tsx**

```tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
            <img
              src="/uiara-photo.jpg"
              alt="Dra. Uiara Alves"
              className="w-full max-h-[480px] object-cover object-top rounded-2xl shadow-lg"
            />
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
            <span className="text-gold text-xs font-bold uppercase tracking-widest">
              Sobre
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl text-dark">
              Uiara Alves
            </h2>

            <div className="border-l-4 border-gold bg-white rounded-r-xl px-5 py-4 shadow-sm">
              <p className="text-dark font-semibold leading-relaxed italic">
                "Também sou paciente bariátrica — e essa vivência transforma a minha advocacia."
              </p>
            </div>

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
```

- [ ] **Step 4: Rodar o teste — confirmar que passa**

```bash
npm run test:run
```

Esperado: PASS nos 4 testes do About.

- [ ] **Step 5: Commit**

```bash
git add components/About.tsx __tests__/About.test.tsx
git commit -m "feat: componente About com bio e destaque bariátrica"
```

---

### Task 6: Componente Specialty

**Files:**
- Create: `components/Specialty.tsx`
- Create: `__tests__/Specialty.test.tsx`

- [ ] **Step 1: Criar o teste**

Criar `__tests__/Specialty.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Specialty from '@/components/Specialty'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useInView: () => true,
}))

describe('Specialty', () => {
  it('renderiza título da seção', () => {
    render(<Specialty />)
    expect(screen.getByText('Luto pelo seu direito à saúde')).toBeInTheDocument()
  })

  it('renderiza os 3 cards de especialidade', () => {
    render(<Specialty />)
    expect(screen.getByText('Cirurgias reparadoras pós-bariátrica')).toBeInTheDocument()
    expect(screen.getByText('Negativas abusivas de planos de saúde')).toBeInTheDocument()
    expect(screen.getByText('Tratamentos e procedimentos negados')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar o teste — confirmar que falha**

```bash
npm run test:run
```

Esperado: FAIL — "Cannot find module '@/components/Specialty'"

- [ ] **Step 3: Criar components/Specialty.tsx**

```tsx
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
              <h3 className="font-playfair text-xl text-dark font-semibold">
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Rodar o teste — confirmar que passa**

```bash
npm run test:run
```

Esperado: PASS nos 2 testes do Specialty.

- [ ] **Step 5: Commit**

```bash
git add components/Specialty.tsx __tests__/Specialty.test.tsx
git commit -m "feat: componente Specialty com 3 cards de atuação"
```

---

### Task 7: Componente HowItWorks

**Files:**
- Create: `components/HowItWorks.tsx`

- [ ] **Step 1: Criar components/HowItWorks.tsx**

```tsx
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
    description:
      'Me conte sua situação pelo WhatsApp. Análise inicial gratuita e sem compromisso.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Estratégia',
    description:
      'Avalio seu caso e monto a melhor estratégia jurídica personalizada para a sua situação.',
  },
  {
    number: '03',
    icon: Scale,
    title: 'Ação',
    description:
      'Atuamos para garantir seu direito com agilidade, técnica e total comprometimento.',
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
          className="text-center mb-14"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Como Funciona
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl text-dark mt-3">
            Do problema à solução em 3 passos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white rounded-2xl p-8 flex flex-col gap-4 text-center shadow-sm"
            >
              <span className="absolute top-4 right-6 text-gold/20 font-playfair text-5xl font-bold select-none">
                {step.number}
              </span>
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mx-auto shadow-md">
                <step.icon size={22} className="text-dark" />
              </div>
              <h3 className="font-playfair text-xl text-dark font-semibold mt-2">
                {step.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
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
```

- [ ] **Step 2: Verificar visualmente no browser**

```bash
npm run dev
```

Abrir http://localhost:3000 — verificar que os 3 cards aparecem corretamente.

- [ ] **Step 3: Commit**

```bash
git add components/HowItWorks.tsx
git commit -m "feat: componente HowItWorks com 3 passos e CTA"
```

---

### Task 8: Componente Testimonials (placeholder)

**Files:**
- Create: `components/Testimonials.tsx`

- [ ] **Step 1: Criar components/Testimonials.tsx**

```tsx
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
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Depoimentos
          </span>
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
            "Em breve, histórias reais de quem recuperou seu direito."
          </p>
          <div className="w-12 h-0.5 bg-gold/30" />
          <p className="text-text-muted text-sm">Depoimentos de clientes em breve.</p>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Testimonials.tsx
git commit -m "feat: componente Testimonials placeholder elegante"
```

---

### Task 9: Componente Contact

**Files:**
- Create: `components/Contact.tsx`
- Create: `__tests__/Contact.test.tsx`

> **Ação necessária antes de implementar:**
> 1. Criar conta gratuita em https://formspree.io
> 2. Criar um novo formulário com e-mail `advocaciauiaraalves@gmail.com`
> 3. Copiar o ID do formulário (formato: `xxxxxyyy`)
> 4. Substituir `SEU_FORM_ID_AQUI` pelo ID real no componente abaixo

- [ ] **Step 1: Criar o teste**

Criar `__tests__/Contact.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Contact from '@/components/Contact'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  useInView: () => true,
}))

describe('Contact', () => {
  it('renderiza os dois números de WhatsApp', () => {
    render(<Contact />)
    expect(screen.getByText('(85) 99151-6028')).toBeInTheDocument()
    expect(screen.getByText('(85) 99256-3399')).toBeInTheDocument()
  })

  it('renderiza os campos obrigatórios do formulário', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('Telefone / WhatsApp')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensagem')).toBeInTheDocument()
  })

  it('renderiza o endereço do escritório', () => {
    render(<Contact />)
    expect(screen.getByText(/Humberto Monte/i)).toBeInTheDocument()
  })

  it('renderiza o Instagram', () => {
    render(<Contact />)
    expect(screen.getByText('@uiaralves')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar o teste — confirmar que falha**

```bash
npm run test:run
```

Esperado: FAIL — "Cannot find module '@/components/Contact'"

- [ ] **Step 3: Criar components/Contact.tsx**

```tsx
'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Mail, MapPin, Instagram } from 'lucide-react'

// Substituir pelo ID real do Formspree após criar conta em formspree.io
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
          {/* Cards de contato */}
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
              { href: 'https://www.instagram.com/uiaralves', icon: Instagram, label: 'Instagram', value: '@uiaralves' },
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

          {/* Formulário */}
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
```

- [ ] **Step 4: Rodar o teste — confirmar que passa**

```bash
npm run test:run
```

Esperado: PASS nos 4 testes do Contact.

- [ ] **Step 5: Commit**

```bash
git add components/Contact.tsx __tests__/Contact.test.tsx
git commit -m "feat: componente Contact com cards de contato e formulário Formspree"
```

---

### Task 10: Componente Footer

**Files:**
- Create: `components/Footer.tsx`
- Create: `__tests__/Footer.test.tsx`

- [ ] **Step 1: Criar o teste**

Criar `__tests__/Footer.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renderiza o número da OAB', () => {
    render(<Footer />)
    expect(screen.getByText(/OAB\/CE 22\.546/i)).toBeInTheDocument()
  })

  it('renderiza o aviso legal obrigatório', () => {
    render(<Footer />)
    expect(screen.getByText(/caráter informativo/i)).toBeInTheDocument()
  })

  it('renderiza o nome do escritório', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Uiara Alves Advocacia/i)[0]).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Rodar o teste — confirmar que falha**

```bash
npm run test:run
```

Esperado: FAIL — "Cannot find module '@/components/Footer'"

- [ ] **Step 3: Criar components/Footer.tsx**

```tsx
const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#especialidade', label: 'Especialidade' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#contato', label: 'Contato' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Logo + OAB */}
          <div className="flex flex-col gap-3">
            <img
              src="/logo.png"
              alt="Uiara Alves Advocacia"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">Uiara Alves Advocacia</p>
            <p className="text-gray-400 text-sm">OAB/CE 22.546</p>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-2">
            <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
              Navegação
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 text-sm hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contato rápido */}
          <div className="flex flex-col gap-2">
            <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-1">
              Contato
            </p>
            <a href="https://wa.me/5585991516028" className="text-gray-400 text-sm hover:text-gold transition-colors">
              (85) 99151-6028
            </a>
            <a href="https://wa.me/5585992563399" className="text-gray-400 text-sm hover:text-gold transition-colors">
              (85) 99256-3399
            </a>
            <a href="mailto:advocaciauiaraalves@gmail.com" className="text-gray-400 text-sm hover:text-gold transition-colors">
              advocaciauiaraalves@gmail.com
            </a>
            <a
              href="https://www.instagram.com/uiaralves"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-gold transition-colors"
            >
              @uiaralves
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
          <p>© {currentYear} Uiara Alves Advocacia. Todos os direitos reservados.</p>
          <p className="text-center max-w-sm">
            As informações contidas neste site têm caráter informativo e não constituem consulta jurídica.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Rodar o teste — confirmar que passa**

```bash
npm run test:run
```

Esperado: PASS nos 3 testes do Footer.

- [ ] **Step 5: Commit**

```bash
git add components/Footer.tsx __tests__/Footer.test.tsx
git commit -m "feat: componente Footer com OAB e aviso legal"
```

---

### Task 11: Botão WhatsApp Flutuante

**Files:**
- Create: `components/WhatsAppFloat.tsx`

- [ ] **Step 1: Criar components/WhatsAppFloat.tsx**

```tsx
'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5585991516028'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ backgroundColor: '#25D366' }}
    >
      <span
        className="absolute w-14 h-14 rounded-full animate-ping opacity-40"
        style={{ backgroundColor: '#25D366' }}
      />
      <MessageCircle size={26} className="text-white relative z-10" fill="white" />
    </a>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/WhatsAppFloat.tsx
git commit -m "feat: botão WhatsApp flutuante com animação ping"
```

---

### Task 12: Montagem da Página + Imagens Placeholder

**Files:**
- Modify: `app/page.tsx`
- Create: `public/logo.png` (usuária deve fornecer)
- Create: `public/uiara-photo.jpg` (usuária deve fornecer)

- [ ] **Step 1: Criar imagens placeholder temporárias**

Enquanto a usuária não fornece as imagens reais, criar placeholders:

```bash
# Criar um SVG placeholder para o logo
cat > public/logo.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60">
  <text x="10" y="45" font-family="Georgia, serif" font-size="36" font-weight="bold" fill="#C9A84C">UA</text>
  <text x="60" y="45" font-family="Georgia, serif" font-size="14" fill="#1A1A1A">Advocacia</text>
</svg>
EOF
```

> **Nota:** Substituir `public/logo.png` e `public/uiara-photo.jpg` com os arquivos reais antes do deploy.

- [ ] **Step 2: Substituir app/page.tsx**

```tsx
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Specialty from '@/components/Specialty'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Specialty />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
```

- [ ] **Step 3: Verificar o site completo no browser**

```bash
npm run dev
```

Abrir http://localhost:3000 e verificar:
- [ ] Header fixo com logo e nav
- [ ] Hero com tagline e botões
- [ ] Seção Sobre com bio
- [ ] 3 cards de especialidade
- [ ] 3 passos do Como Funciona
- [ ] Placeholder de depoimentos
- [ ] Seção de contato com formulário
- [ ] Footer com OAB
- [ ] Botão WhatsApp flutuante no canto inferior direito
- [ ] Scroll suave ao clicar nos links de nav

- [ ] **Step 4: Rodar todos os testes**

```bash
npm run test:run
```

Esperado: PASS em todos os testes.

- [ ] **Step 5: Commit final**

```bash
git add app/page.tsx public/
git commit -m "feat: página principal montada com todos os componentes"
```

---

### Task 13: Deploy na Vercel

- [ ] **Step 1: Instalar Vercel CLI**

```bash
npm install -g vercel
```

- [ ] **Step 2: Fazer login na Vercel**

```bash
vercel login
```

Escolher "Continue with GitHub" ou "Continue with Email" e seguir as instruções no browser.

- [ ] **Step 3: Deploy do projeto**

```bash
vercel
```

Responder às perguntas:
- "Set up and deploy?" → Y
- "Which scope?" → selecionar sua conta
- "Link to existing project?" → N
- "Project name?" → `uiara-alves-advocacia`
- "In which directory is your code?" → `./`
- Override settings? → N

Aguardar o deploy. A URL de preview será exibida (formato `https://uiara-alves-advocacia-xxxx.vercel.app`).

- [ ] **Step 4: Deploy para produção**

```bash
vercel --prod
```

- [ ] **Step 5: Configurar domínio (após registrar em Registro.br)**

Após registrar o domínio (ex: `uiaraalves.adv.br`):

```bash
vercel domains add uiaraalves.adv.br
```

Seguir as instruções para configurar os DNS no Registro.br:
- Tipo: CNAME
- Nome: `www`
- Valor: `cname.vercel-dns.com`

Ou para domínio raiz:
- Tipo: A
- Nome: `@`
- Valor: `76.76.21.21`

- [ ] **Step 6: Verificar site em produção**

Acessar a URL de produção e confirmar:
- [ ] Site carrega com HTTPS
- [ ] Logo aparece corretamente
- [ ] Foto da Dra. Uiara aparece
- [ ] Todos os links de WhatsApp funcionam
- [ ] Formulário de contato envia (após configurar Formspree)
- [ ] Site responsivo no celular

---

## Checklist Final

- [ ] `npm run test:run` — todos os testes passando
- [ ] Site abre no browser sem erros no console
- [ ] Logo real substituída (não placeholder)
- [ ] Foto real da Dra. Uiara substituída
- [ ] ID do Formspree configurado em `components/Contact.tsx`
- [ ] Deploy na Vercel com URL pública
- [ ] Domínio registrado e configurado (opcional na v1)
