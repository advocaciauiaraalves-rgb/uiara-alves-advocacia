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
