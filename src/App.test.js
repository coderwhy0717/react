import { render, screen } from '@testing-library/react'
import App from './01_React函数高阶组件/App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
