import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Poppins',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#2B4162',
    },
    secondary: {
      main: '#07A0C3',
    },
  },
})

theme = responsiveFontSizes(theme)

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
})

export { theme }
