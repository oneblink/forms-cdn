import * as React from 'react'
import { PaymentForm as PaymentFormComponent } from '@oneblink/apps-react'
import { EnvironmentTypes, FormsAppsTypes } from '@oneblink/types'

export default function PaymentForm({
  configuration,
  pwaSettings,
}: {
  configuration: EnvironmentTypes.FormsAppEnvironmentConfiguration | undefined
  pwaSettings: FormsAppsTypes.FormsAppPWASettings | undefined
}) {
  const onCompleted = React.useCallback(
    ({ paymentReceiptUrl }: { paymentReceiptUrl: string }) => {
      window.location.replace(paymentReceiptUrl)
    },
    [],
  )

  if (!configuration?.recaptchaPublicKey) {
    console.error(
      'OneBlinkForms.renderPaymentForm() cannot render a payment form without a reCAPTCHA configured on the "formsAppId" or "formsAppEnvironmentId" passed in.',
      configuration,
    )
    return (
      <div className="has-text-centered">
        <h3 className="title is-3">Error Loading Configuration</h3>
        <p className="content has-text-danger">
          Insufficient configuration to complete payment. Please contact the
          site administrators to rectify the issue.
        </p>
      </div>
    )
  }

  return (
    <PaymentFormComponent
      onCompleted={onCompleted}
      onCancelled={onCompleted}
      captchaSiteKey={configuration?.recaptchaPublicKey}
      captchaType={configuration?.recaptchaKeyType}
      appImageUrl={pwaSettings?.homeScreenIconUrl}
      title={pwaSettings?.homeScreenName}
    />
  )
}
