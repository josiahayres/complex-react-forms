import { render, screen, TestFormProvider, act } from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'
import Form from './Form'

describe('Verify jest works on normal HTML forms', () => {
  test('can submit the form by clicking submit', () => {
    const onSubmitMock = jest.fn((data) => data)
    render(
      <form onSubmit={onSubmitMock}>
        <input type="text" name="name" defaultValue="john" />
        <button type="submit">submit form</button>
      </form>,
    )

    userEvent.click(screen.getByRole('button'))
    expect(onSubmitMock).toHaveBeenCalled()
  })

  test('can submit form by pressing enter in the text field', () => {
    const onSubmitMock = jest.fn((data) => data)
    render(
      <form onSubmit={onSubmitMock}>
        <input type="text" name="name" defaultValue="" />
        <button type="submit">submit form</button>
      </form>,
    )

    act(() => {
      userEvent.type(screen.getByRole('textbox'), 'john{enter}')
    })
    expect(screen.getByRole('textbox')).toHaveValue('john')
    expect(onSubmitMock).toHaveBeenCalled()
  })
})

describe('Form component', () => {
  test('allow CTRL+Enter to submit form when in a form field', () => {
    const onSubmitMock = jest.fn((data) => data)
    render(
      <Form onSubmit={onSubmitMock}>
        <input type="text" name="name" defaultValue="" />
        <button type="submit">submit form</button>
      </Form>,
    )
    act(() => {
      userEvent.type(screen.getByRole('textbox'), 'john{ctrl}{enter}')
    })

    expect(screen.getByRole('textbox')).toHaveValue('john')
    expect(onSubmitMock).toHaveBeenCalled()
  })

  test('Dont allow CTRL+Enter to submit form when in a form field', () => {
    const onSubmitMock = jest.fn((data) => data)
    render(
      <Form onSubmit={onSubmitMock} preventSubmitWithCtrlEnter>
        <input type="text" name="name" defaultValue="" />
        <button type="submit">submit form</button>
      </Form>,
    )
    act(() => {
      userEvent.type(screen.getByRole('textbox'), 'john{ctrl}{enter}')
    })
    expect(screen.getByRole('textbox')).toHaveValue('john')
    expect(onSubmitMock).not.toHaveBeenCalled()
  })
})
