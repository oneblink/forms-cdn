import * as React from 'react'
import {
  PaymentForm as PaymentFormComponent,
  useLoadDataState,
} from '@oneblink/apps-react'
import { formsAppService } from '@oneblink/apps'
import OnLoading from '@oneblink/apps-react/dist/components/renderer/OnLoading'

export default function PaymentForm({ formsAppId }: { formsAppId: number }) {
  const onCompleted = React.useCallback(
    ({ paymentReceiptUrl }: { paymentReceiptUrl: string }) => {
      window.location.replace(paymentReceiptUrl)
    },
    [],
  )

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

  return (
    <PaymentFormComponent
      onCompleted={onCompleted}
      onCancelled={onCompleted}
      captchaSiteKey={state.result.recaptchaPublicKey}
      appImageUrl={state.result.pwaSettings?.homeScreenIconUrl}
      title={state.result.pwaSettings?.homeScreenName}
    />
  )
}
