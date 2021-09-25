import { ReactElement } from 'react'
import { Typography } from '@mui/material'
import { NavigationLink } from 'components'

function Home(): ReactElement {
  return (
    <div>
      <Typography variant="h1">Home</Typography>
      <Typography variant="body1">This is the home page</Typography>
      <Typography variant="body1">
        Go to the <NavigationLink to="/simple">Simple Form</NavigationLink> page
      </Typography>
    </div>
  )
}

export { Home }
