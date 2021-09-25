import { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import AppProviders from '../AppProviders'
import { FormProvider, useForm } from 'react-hook-form'

const AllTheProviders: FC = ({ children }) => {
  return <AppProviders>{children}</AppProviders>
}

export const TestFormProvider: FC<{
  defaultValues: { [key: string]: any }
}> = ({ children, defaultValues }) => {
  const methods = useForm({ defaultValues: defaultValues })

  return (
    <FormProvider {...methods}>
      <form>{children}</form>
    </FormProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
