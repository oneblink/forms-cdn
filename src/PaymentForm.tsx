import * as React from 'react'
import { PaymentForm as PaymentFormComponent } from '@oneblink/apps-react'
import { FormsAppsTypes } from '@oneblink/types'

export default function PaymentForm({
  formsAppConfiguration,
}: {
  formsAppConfiguration: FormsAppsTypes.FormsAppConfiguration
}) {
  const onCompleted = React.useCallback(
    ({ paymentReceiptUrl }: { paymentReceiptUrl: string }) => {
      window.location.replace(paymentReceiptUrl)
    },
    [],
  )

  return (
    <PaymentFormComponent
      onCompleted={onCompleted}
      onCancelled={onCompleted}
      captchaSiteKey={formsAppConfiguration.recaptchaPublicKey}
      captchaType={formsAppConfiguration.recaptchaKeyType}
      appImageUrl={formsAppConfiguration.pwaSettings?.homeScreenIconUrl}
      title={formsAppConfiguration.pwaSettings?.homeScreenName}
    />
  )
}
