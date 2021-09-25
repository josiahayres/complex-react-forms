import React from 'react'
import {
  ThemeProvider,
  createTheme,
  useMediaQuery,
  CssBaseline,
} from '@mui/material'

import { getLightDarkPalette, baseTheme } from './customTheme'

interface AppProvidersProps {
  children: React.ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const darkSupportedTheme = React.useMemo(() => {
    const mode = prefersDarkMode ? 'dark' : 'light'
    let colorTheme = createTheme(baseTheme, getLightDarkPalette(mode))
    colorTheme = createTheme(colorTheme, {
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      },
    })
    return colorTheme
  }, [prefersDarkMode])
  return (
    <ThemeProvider theme={darkSupportedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppProviders
