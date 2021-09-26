import { ReactElement } from 'react'
import { Box } from '@mui/system'
import {
  Typography,
  Button,
  Stack,
  Card,
  ButtonProps,
  TypographyProps,
} from '@mui/material'

import { NavigationLink } from 'components'
const ButtonStack = ({ ...props }: ButtonProps) => {
  const label = props.color ? `color: ${props.color}` : 'No color specified'
  return (
    <Card elevation={1} sx={{ p: 2 }}>
      <Typography variant="subtitle1">{label}</Typography>
      <Stack direction="row" spacing={2}>
        <Button {...props}>plain button</Button>
        <Button {...props} variant="text">
          text button
        </Button>
        <Button {...props} variant="outlined">
          outlined button
        </Button>
        <Button {...props} variant="contained">
          contained button
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
        <Button {...props} disabled>
          plain button
        </Button>
        <Button {...props} variant="text" disabled>
          text button
        </Button>
        <Button {...props} variant="outlined" disabled>
          outlined button
        </Button>
        <Button {...props} variant="contained" disabled>
          contained button
        </Button>
      </Stack>
    </Card>
  )
}

const TypographyStack = ({ ...props }: TypographyProps) => {
  const label = props.color ? `color: ${props.color}` : 'No color specified'
  return (
    <Card elevation={1} sx={{ p: 2 }}>
      {label}
      <Typography {...props} variant="h1">
        Header 1
      </Typography>
      <Typography {...props} variant="h2">
        header 2
      </Typography>
      <Typography {...props} variant="h3">
        header 3
      </Typography>
      <Typography {...props} variant="h4">
        header 4
      </Typography>
      <Typography {...props} variant="h5">
        header 5
      </Typography>
      <Typography {...props} variant="h6">
        header 6
      </Typography>
      <Typography {...props} variant="subtitle1">
        subtitle1
      </Typography>
      <Typography {...props} variant="subtitle2">
        subtitle2
      </Typography>
      <Typography {...props} variant="body1">
        body1
      </Typography>
      <Typography {...props} variant="body2">
        body2
      </Typography>
      <Typography {...props} variant="button">
        button
      </Typography>
      <br />
      <Typography {...props} variant="overline">
        overline
      </Typography>
    </Card>
  )
}

function Accessability(): ReactElement {
  return (
    <Box sx={{ width: '100%', display: 'block', pt: 2, pb: 2 }}>
      <Stack spacing={2}>
        <Typography variant="body1">
          Go to the <NavigationLink to="/">Home</NavigationLink> page
        </Typography>
        <Card elevation={1} sx={{ p: 2 }}>
          these are the colours available:
          <Typography component="div" variant="body1">
            <Box sx={{ color: 'primary.main' }}>primary.main</Box>
            <Box sx={{ color: 'secondary.main' }}>secondary.main</Box>
            <Box sx={{ color: 'error.main' }}>error.main</Box>
            <Box sx={{ color: 'warning.main' }}>warning.main</Box>
            <Box sx={{ color: 'info.main' }}>info.main</Box>
            <Box sx={{ color: 'success.main' }}>success.main</Box>
            <Box sx={{ color: 'text.primary' }}>text.primary</Box>
            <Box sx={{ color: 'text.secondary' }}>text.secondary</Box>
            <Box sx={{ color: 'text.disabled' }}>text.disabled</Box>
          </Typography>
        </Card>
        <TypographyStack />
        <TypographyStack color="primary" />
        <TypographyStack color="secondary" />
        <TypographyStack color="error" />
        <TypographyStack color="warning" />
        <TypographyStack color="info" />
        <TypographyStack color="inherit" />

        <ButtonStack></ButtonStack>
        <ButtonStack color="primary"></ButtonStack>
        <ButtonStack color="secondary"></ButtonStack>
        <ButtonStack color="error"></ButtonStack>
        <ButtonStack color="warning"></ButtonStack>
        <ButtonStack color="info"></ButtonStack>
        <ButtonStack color="inherit"></ButtonStack>
      </Stack>
    </Box>
  )
}

export { Accessability }
