import React from 'react'
import { render, screen } from '@testing-library/react'
import Container from './index'

test('renders learn react link', () => {
  render(<Container />)

  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
