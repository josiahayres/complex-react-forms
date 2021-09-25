import { ReactElement } from 'react'
import {
  TextField as MuiTextField,
  TextFieldProps as MuiProps,
} from '@mui/material'

interface TextFieldProps {}

function TextField(props: MuiProps): ReactElement {
  return <MuiTextField {...props} />
}

export default TextField
