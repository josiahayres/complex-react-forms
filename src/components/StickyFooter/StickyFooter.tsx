import { Box, Typography, Container, Link } from '@mui/material'
import { lighten, darken } from '@mui/system'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" data-testid="Copyright">
      {'Copyright © '}
      <Link color="inherit" href="#">
        complex-react-forms
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.light, 0.8)
            : darken(theme.palette.primary.light, 0.8),
      }}
      data-testid="StickyFooter"
    >
      <Container maxWidth="sm">
        <Typography variant="body1" data-testid="body">
          Last updated: Sat 25 Sept 2021
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
}
