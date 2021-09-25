import { PaletteMode } from '@mui/material'
import { red } from '@mui/material/colors'
import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles'

/**
 *
 * @param mode light or dark
 * @returns colours for light or dark
 */
const getLightDarkPalette = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#2B4162',
          },
          secondary: {
            main: '#07A0C3',
          },
          background: {
            default: '#ECFBFE',
            paper: '#ECFBFE',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#8EA7CD',
          },
          secondary: {
            main: '#046176',
          },
          error: { main: red[300] },
          divider: '#02313C',
          background: {
            default: '#012128',
            paper: '#012128',
          },
          text: {
            primary: '#fff',
            secondary: '#EBFBFE',
          },
        }),
  },
})

/**
 * Base theme
 * Sets shape, typography, and responsive font sizes.
 * Also sets default props for components
 */
let baseTheme = createTheme({
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
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
})

baseTheme = responsiveFontSizes(baseTheme)

export { baseTheme, getLightDarkPalette }
