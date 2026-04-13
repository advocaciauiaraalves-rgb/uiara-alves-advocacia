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
