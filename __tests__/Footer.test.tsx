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
