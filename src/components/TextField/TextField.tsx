import { ReactElement } from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiProps,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

export type TextFieldProps = Omit<MuiProps, 'name'> & { name: string }

function TextField({
  name,
  InputLabelProps = {},
  InputProps = {},
  FormHelperTextProps = {},
  helperText,
  ...props
}: TextFieldProps): ReactElement {
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
          helperText={error?.message || helperText}
          InputProps={{ id: `TextField_${name}`, ...InputProps }}
          InputLabelProps={{ htmlFor: `TextField_${name}`, ...InputLabelProps }}
          FormHelperTextProps={{
            role: invalid ? 'alert' : 'note',
            ...FormHelperTextProps,
          }}
        />
      )}
    />
  )
}

export default TextField
