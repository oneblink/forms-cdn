import * as React from 'react'
import {
  formsAppEnvironmentService,
  formsAppService,
  useLoadDataState,
} from '@oneblink/apps-react'
import { EnvironmentTypes, FormsAppsTypes } from '@oneblink/types'

import OnLoading from '@oneblink/apps-react/dist/components/renderer/OnLoading'

type RenderProps = {
  configuration: EnvironmentTypes.FormsAppEnvironmentConfiguration | undefined
  pwaSettings: FormsAppsTypes.FormsAppPWASettings | undefined
}

export default function FormConfigLoader({
  formsAppId,
  formsAppEnvironmentId,
  children,
}: {
  formsAppId: number | undefined
  formsAppEnvironmentId: number | undefined
  children: (renderProps: RenderProps) => React.ReactNode
}) {
  const loadConfiguration = React.useCallback(
    async (abortSignal: AbortSignal): Promise<RenderProps> => {
      if (formsAppId) {
        const configuration = await formsAppService.getFormsAppConfiguration(
          formsAppId,
          abortSignal,
        )
        return {
          configuration,
          pwaSettings: configuration.pwaSettings || undefined,
        }
      } else if (formsAppEnvironmentId) {
        const configuration =
          await formsAppEnvironmentService.getFormsAppEnvironmentConfiguration(
            formsAppEnvironmentId,
            abortSignal,
          )
        return {
          configuration,
          pwaSettings: undefined,
        }
      } else {
        return {
          configuration: undefined,
          pwaSettings: undefined,
        }
      }
    },
    [formsAppEnvironmentId, formsAppId],
  )

  const [state, refresh] = useLoadDataState(loadConfiguration)

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

  return <>{children(state.result)}</>
}
