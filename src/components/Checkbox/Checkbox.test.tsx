import { render, screen, TestFormProvider } from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import Checkbox from './Checkbox'

test('can select a checkbox', () => {
  render(
    <TestFormProvider defaultValues={{ selected: false }}>
      <Checkbox name="selected" label="Selected" />
    </TestFormProvider>,
  )
  const unchecked = screen.getByTestId(/CheckBoxOutlineBlankIcon/i)
  expect(unchecked).toBeInTheDocument()

  const input = screen.getByRole(/checkbox/i)
  expect(input).toBeInTheDocument()
  userEvent.click(input?.parentElement || input)

  const checkedIcon = screen.getByTestId(/CheckboxIcon/i)
  expect(checkedIcon).toBeInTheDocument()
})
