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
