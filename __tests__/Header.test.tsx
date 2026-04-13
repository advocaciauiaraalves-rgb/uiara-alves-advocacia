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
