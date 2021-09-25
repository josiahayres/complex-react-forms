import React from 'react'
import { StickyFooter } from './components'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

function App() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div>
        <Box
          sx={{
            height: '400px',
            width: '100%',
            backgroundColor: (theme) => theme.palette.primary.light,
            color: 'white',
          }}
        >
          <Typography>Light</Typography>
        </Box>
        <Box
          sx={{
            height: '400px',
            width: '100%',
            backgroundColor: (theme) => theme.palette.primary.main,
            color: 'white',
          }}
        >
          Main
        </Box>
        <Box
          sx={{
            height: '400px',
            width: '100%',
            backgroundColor: (theme) => theme.palette.primary.dark,
            color: 'white',
          }}
        >
          dark
        </Box>
      </div>
      <StickyFooter />
    </Box>
  )
}

export default App
