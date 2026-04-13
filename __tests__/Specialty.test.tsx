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
