import { Box } from '@mui/system'
import { Switch, Route } from 'react-router-dom'

import { Home, SimpleForm } from './routes'
import { StickyFooter } from './components'
import { Container } from '@mui/material'

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
      <Container maxWidth="lg" component="main" sx={{ flexGrow: 1 }}>
        <Switch>
          <Route path="/simple">
            <SimpleForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
      <StickyFooter />
    </Box>
  )
}

export default App
