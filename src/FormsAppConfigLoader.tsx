import * as React from 'react'
import { formsAppService } from '@oneblink/apps'
import { useLoadDataState } from '@oneblink/apps-react'
import { FormsAppsTypes } from '@oneblink/types'

import OnLoading from '@oneblink/apps-react/dist/components/renderer/OnLoading'

function FormsAppConfigLoader({
  formsAppId,
  children,
}: {
  formsAppId: number
  children: ({
    formsAppConfiguration,
  }: {
    formsAppConfiguration: FormsAppsTypes.FormsAppConfiguration
  }) => React.ReactNode
}) {
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

  return <>{children({ formsAppConfiguration: state.result })}</>
}

export default React.memo(FormsAppConfigLoader)
