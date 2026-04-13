import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Contact from '@/components/Contact'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
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
