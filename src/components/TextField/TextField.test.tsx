import { render, screen } from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import TextField from './TextField'

test('renders learn react link', () => {
  render(<TextField name="First name" label="First name" />)
  const input = screen.getByRole('textbox')
  userEvent.type(input, 'hello world')
  expect(input).toHaveValue('hello world')
})
