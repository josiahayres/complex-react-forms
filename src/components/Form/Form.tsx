import React, { ReactElement, useRef } from 'react'

export interface FormProps {
  children: React.ReactElement | React.ReactElement[]
  onSubmit: (e: any) => void
  preventSubmitWithCtrlEnter?: boolean
}

/**
 * Returns a MUI paper component as a HTML form.
 * The form prevents HTML validation and submitting by clicking enter.
 * The form allows enter by pressing Ctrl+Enter
 */
function Form({
  children,
  onSubmit,
  preventSubmitWithCtrlEnter,
}: FormProps): ReactElement {
  const formRef = useRef<HTMLFormElement>(null)
  const submitWithCtrlEnter: React.KeyboardEventHandler<HTMLFormElement> = (
    event,
  ) => {
    if (preventSubmitWithCtrlEnter) return
    if (event.key === 'Enter' && event.ctrlKey) {
      if (formRef?.current?.dispatchEvent) {
        formRef?.current.dispatchEvent(
          new Event('submit', {
            cancelable: true,
            bubbles: true,
            composed: true,
          }),
        )
      }
    }
  }
  return (
    <form
      ref={formRef}
      noValidate
      onKeyDown={submitWithCtrlEnter}
      onSubmit={onSubmit}
    >
      {/* This hidden input prevents submitting by pressing enter */}
      <button
        type="submit"
        disabled
        style={{ display: 'none' }}
        aria-hidden="true"
      ></button>
      {children}
    </form>
  )
}

export default Form
