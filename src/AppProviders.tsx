import React from 'react'
import {
  ThemeProvider,
  createTheme,
  useMediaQuery,
  CssBaseline,
  responsiveFontSizes,
} from '@mui/material'

import { BrowserRouter as Router } from 'react-router-dom'
import { getLightDarkPalette } from './customTheme'

interface AppProvidersProps {
  children: React.ReactNode
}

const AppProviders = ({ children }: AppProvidersProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const darkSupportedTheme = React.useMemo(() => {
    const mode = prefersDarkMode ? 'dark' : 'light'
    return responsiveFontSizes(createTheme(getLightDarkPalette(mode)))
  }, [prefersDarkMode])

  return (
    <ThemeProvider theme={darkSupportedTheme}>
      <CssBaseline />
      <Router>{children}</Router>
    </ThemeProvider>
  )
}

export default AppProviders
