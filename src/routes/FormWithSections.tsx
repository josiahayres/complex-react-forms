import { ReactElement, useState } from 'react'
import { Box } from '@mui/system'
import { Typography, Button, Stack, Card } from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { NavigationLink, Form, TextField, Checkbox } from 'components'

const schema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().required(),
  showDevTool: yup.boolean().required(),
})

type FormData = {
  fullName: string
  email: string
  showDevTool: boolean
}
const defaultFormValues: FormData = {
  fullName: '',
  email: '',
  showDevTool: true,
}
function FormWithSections(): ReactElement {
  const [validatedForm, setValidatedForm] = useState<FormData | null>(null)
  const methods = useForm<FormData>({
    defaultValues: { ...defaultFormValues },
    resolver: yupResolver(schema),
  })
  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = methods

  const showDevTool = watch('showDevTool')

  const onSubmit = handleSubmit((data) => setValidatedForm(data))

  return (
    <Box sx={{ width: '100%', display: 'block' }}>
      <Typography variant="h1">SimpleForm</Typography>
      <Typography variant="body1">This is the SimpleForm page</Typography>
      <Typography variant="body1">
        Go to the <NavigationLink to="/">Home</NavigationLink> page
      </Typography>
      <NavigationLink to="/simple"> Clear url parameters</NavigationLink>
      <Stack spacing={2}>
        <Card elevation={1} sx={{ p: 2 }}>
          <FormProvider {...methods}>
            <Form onSubmit={onSubmit}>
              <Stack
                spacing={2}
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography variant="h5">Simple Form</Typography>
                <TextField
                  name="fullName"
                  label="Full name"
                  fullWidth
                  helperText="test"
                />
                <TextField name="email" label="Email address" fullWidth />
                <Checkbox name="showDevTool" label="Show RHF Dev Tool" />

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Submit form
                </Button>
              </Stack>
            </Form>
          </FormProvider>
        </Card>
        <Card sx={{ p: 2 }}>
          <Typography variant="h3">Debug form</Typography>
          <Typography variant="subtitle1">Errors</Typography>
          <Typography variant="caption" sx={{ wordBreak: 'break-word' }}>
            {JSON.stringify(errors)}
          </Typography>
          <Typography variant="subtitle1">Watch</Typography>
          <Typography variant="caption" sx={{ wordBreak: 'break-word' }}>
            {JSON.stringify(watch())}
          </Typography>
          <Typography variant="subtitle1">validatedForm</Typography>
          <Typography variant="caption" sx={{ wordBreak: 'break-word' }}>
            {JSON.stringify(validatedForm)}
          </Typography>
        </Card>
      </Stack>
      {showDevTool && <DevTool control={control} />}
    </Box>
  )
}

export { FormWithSections }
