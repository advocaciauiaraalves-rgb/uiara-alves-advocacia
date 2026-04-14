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
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Wordmark */}
        <a href="#inicio" aria-label="Uiara Alves Advocacia — início" className="flex flex-col leading-none gap-0.5">
          <span
            className={`font-playfair text-lg font-bold tracking-wide transition-colors ${
              scrolled ? 'text-dark' : 'text-warm-white'
            }`}
          >
            Uiara Alves
          </span>
          <span className="text-gold text-[9px] font-bold uppercase tracking-[0.35em]">
            Advocacia
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-dark hover:text-gold'
                  : 'text-warm-white/80 hover:text-gold'
              }`}
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

        {/* Mobile menu button */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? 'text-dark' : 'text-warm-white'
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden border-t px-6 py-5 flex flex-col gap-4 ${
            scrolled ? 'bg-white border-gray-100' : 'bg-dark border-white/10'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-medium ${
                scrolled ? 'text-dark' : 'text-warm-white/90'
              }`}
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
