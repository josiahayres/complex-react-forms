import { PaletteMode } from '@mui/material'
import { grey } from '@mui/material/colors'
import { ThemeOptions } from '@mui/material/styles'

/**
 *
 * @param mode light or dark
 * @returns colours for light or dark
 */
const getLightDarkPalette = (mode: PaletteMode): ThemeOptions => ({
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
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          palette: {
            primary: {
              main: '#3d678f',
            },
            secondary: {
              main: '#7d7063',
            },
            divider: '#121D2B',
            background: {
              default: '#F1F5F9',
              paper: '#edf3f8',
            },
            contrastThreshold: 3,
            type: 'light',
            error: {
              main: '#a00505',
            },
            text: {
              secondary: 'rgba(0,0,0,0.56)',
              disabled: 'rgba(0,0,0,0.5)',
            },
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#476785',
          },
          secondary: {
            main: '#797067',
          },
          error: {
            main: '#E44E5A',
          },
          divider: '#121D2B',
          background: {
            default: '#050c12',
            paper: '#060A0E',
          },
          text: {
            primary: '#f2f2f2',
            disabled: '#757587',
            secondary: '#cccccc',
          },
          contrastThreshold: 3,
        }),
  },

  // Light override
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
          ...(mode === 'dark' && {
            ':disabled': {
              color: grey[500],
              cursor: 'not-allowed',
            },
          }),
        },
      },
    },
  },
})

export { getLightDarkPalette }
