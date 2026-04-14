import type { Metadata } from 'next'
import { Rufina, Nunito_Sans } from 'next/font/google'
import { Providers } from '@/components/Providers'
import './globals.css'

const rufina = Rufina({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-rufina',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nunito',
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
    <html lang="pt-BR" dir="ltr" className={`${rufina.variable} ${nunitoSans.variable} scroll-smooth`}>
      <body className="font-sans text-dark bg-white antialiased text-left">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
