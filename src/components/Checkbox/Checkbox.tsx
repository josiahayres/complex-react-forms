import {
  FormGroup,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Controller, useFormContext } from 'react-hook-form'

export type CheckboxProps = Omit<MuiCheckboxProps, 'label'> & {
  name: string
  label?: string
}

export default function Checkbox({
  name,
  label,
  ...checkboxProps
}: CheckboxProps) {
  const { control } = useFormContext()
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <MuiCheckbox
                onChange={(e) => onChange(e.target.checked)}
                checked={value}
                inputRef={ref}
                onBlur={onBlur}
                name={name}
              />
            )}
          />
        }
        label={label}
      />
    </FormGroup>
  )
}
