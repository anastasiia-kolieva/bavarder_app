import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './index'

test('renders learn react link', () => {
  render(<Button />)

  // const linkElement = screen.getByText(/learn react/i)
  // expect(linkElement).toBeInTheDocument()
})
