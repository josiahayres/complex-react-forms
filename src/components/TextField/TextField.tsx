import { ReactElement } from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiProps,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

export type TextFieldProps = Omit<MuiProps, 'name'> & { name: string }

function TextField({ name, ...props }: TextFieldProps): ReactElement {
  const { control } = useFormContext()
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, error },
      }) => (
        <MuiTextField
          {...props}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          inputRef={ref}
          name={name}
          error={invalid}
          helperText={error?.message}
        />
      )}
    />
  )
}

export default TextField
