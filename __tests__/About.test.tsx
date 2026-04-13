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
    expect(screen.getAllByText(/paciente bariátrica/i)[0]).toBeInTheDocument()
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
