import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders author name', () => {
  render(<App />)
  const author = screen.getByText(/Autor: Ricardo Rivas González/i)
  expect(author).toBeInTheDocument()
})
