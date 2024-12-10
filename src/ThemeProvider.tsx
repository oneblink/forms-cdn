import * as React from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { FormsAppsTypes } from '@oneblink/types'

function ThemeProvider({
  formsAppConfiguration,
  children,
}: React.PropsWithChildren<{
  formsAppConfiguration: FormsAppsTypes.FormsAppConfiguration
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
            main: formsAppConfiguration.styles.highlightColour || '#407E8C',
          },
          secondary: {
            main: formsAppConfiguration.styles.foregroundColour || '#407E8C',
          },
          warning: {
            main: '#B85000',
          },
        },
      }),
    [formsAppConfiguration],
  )

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
}

export default React.memo(ThemeProvider)
