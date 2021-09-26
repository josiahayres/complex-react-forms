import { render, screen } from '../../utils/test-utils'
import NavigationLink from './NavigationLink'

test('can render a link', () => {
  render(
    <NavigationLink to="/" data-testid="link">
      Go home
    </NavigationLink>,
  )
  expect(screen.getByTestId('link')).toBeInTheDocument()
  expect(screen.getByTestId('link')).toHaveAttribute('href', '/')
})
