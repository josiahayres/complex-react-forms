import { render, screen, TestFormProvider } from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import TextField from './TextField'

test('can type into text field', () => {
  render(
    <TestFormProvider defaultValues={{ firstName: '' }}>
      <TextField name="firstName" label="First name" />
    </TestFormProvider>,
  )
  const input = screen.getByRole('textbox')
  userEvent.type(input, 'hello world')
  expect(input).toHaveValue('hello world')
})
