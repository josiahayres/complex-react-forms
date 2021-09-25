import { render, screen } from '../../utils/test-utils'
import StickyFooter from './StickyFooter'

test('has correct text', () => {
  render(<StickyFooter />)
  const footer = screen.getByTestId('StickyFooter')
  const body = screen.getByTestId('body')
  expect(footer).toBeInTheDocument()
  expect(body).toBeInTheDocument()
  expect(body).toHaveTextContent('Last updated: Sat 25 Sept 2021')
})

test('has a link', () => {
  render(<StickyFooter />)
  const link = screen.getByRole('link')
  expect(link).toBeInTheDocument()
  expect(link).toHaveTextContent('complex-react-forms')
})
