import * as React from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { EnvironmentTypes } from '@oneblink/types'

export default function ThemeProvider({
  configuration,
  children,
}: React.PropsWithChildren<{
  configuration: EnvironmentTypes.FormsAppEnvironmentConfiguration | undefined
}>) {
  const muiTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          success: {
            main: '#3a833c',
          },
          info: {
            main: '#2d7ab9',
          },
          error: {
            main: '#E8113C',
          },
          primary: {
            main: configuration?.styles.highlightColour || '#407E8C',
          },
          secondary: {
            main: configuration?.styles.foregroundColour || '#407E8C',
          },
          warning: {
            main: '#B85000',
          },
        },
      }),
    [configuration],
  )

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
}
