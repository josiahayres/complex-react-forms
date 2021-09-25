import { render, screen } from './utils/test-utils'
import App from './App'

test('renders sticky footer', () => {
  render(<App />)
  const stickyFooter = screen.getByTestId(/StickyFooter/i)
  expect(stickyFooter).toBeInTheDocument()
})
