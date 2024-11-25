import * as React from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { formsAppService } from '@oneblink/apps'
import { useLoadDataState } from '@oneblink/apps-react'

import OnLoading from '@oneblink/apps-react/dist/components/renderer/OnLoading'

function ThemeProvider({
  formsAppId,
  children,
}: React.PropsWithChildren<{ formsAppId: number }>) {
  const loadFormsAppConfiguration = React.useCallback(async () => {
    return await formsAppService.getFormsAppConfiguration(formsAppId)
  }, [formsAppId])

  const [state, refresh] = useLoadDataState(loadFormsAppConfiguration)

  if (state.status === 'LOADING') {
    return <OnLoading className="has-text-centered" small />
  }

  if (state.status === 'ERROR') {
    return (
      <div className="has-text-centered">
        <h3 className="title is-3">Error Loading Configuration</h3>
        <p className="content has-text-danger">{state.error.message}</p>
        <button className="button" onClick={refresh}>
          Try Again
        </button>
      </div>
    )
  }

  const muiTheme = createTheme({
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
        main:
          (state.status === 'SUCCESS' && state.result.styles.highlightColour) ||
          '#407E8C',
      },
      secondary: {
        main:
          (state.status === 'SUCCESS' &&
            state.result.styles.foregroundColour) ||
          '#407E8C',
      },
      warning: {
        main: '#B85000',
      },
    },
  })

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
}

export default React.memo(ThemeProvider)
