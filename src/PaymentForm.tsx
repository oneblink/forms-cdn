import * as React from 'react'
import {
  PaymentForm as PaymentFormComponent,
  paymentService,
} from '@oneblink/apps-react'
import {
  EnvironmentTypes,
  FormsAppsTypes,
  SubmissionTypes,
} from '@oneblink/types'

export default function PaymentForm({
  configuration,
  pwaSettings,
}: {
  configuration: EnvironmentTypes.FormsAppEnvironmentConfiguration | undefined
  pwaSettings: FormsAppsTypes.FormsAppPWASettings | undefined
}) {
  const sessionResult = React.useMemo(() => {
    try {
      return {
        session: paymentService.getPaymentFormSession(window.location.search),
      }
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error('Invalid payment'),
      }
    }
  }, [])

  const session = sessionResult.session

  const onCompleted = React.useCallback(
    async ({
      formSubmissionPayment,
    }: {
      formSubmissionPayment: SubmissionTypes.FormSubmissionPayment
    }) => {
      const { formSubmissionResult } =
        await paymentService.getFormSubmissionResultPayment()
      window.location.replace(
        paymentService.getCompletedPaymentReceiptUrl({
          formSubmissionResult,
          formSubmissionPayment,
        }),
      )
    },
    [],
  )

  const onCancelled = React.useCallback(async () => {
    if (!session) {
      return
    }
    const { formSubmissionResult } =
      await paymentService.getFormSubmissionResultPayment()
    window.location.replace(
      paymentService.getCancelledPaymentReceiptUrl(
        formSubmissionResult,
        session.formSubmissionPaymentId,
      ),
    )
  }, [session])

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

  if (!session) {
    return (
      <div className="has-text-centered">
        <h3 className="title is-3">Invalid Payment Link</h3>
        <p className="content has-text-danger">
          {sessionResult.error?.message}
        </p>
      </div>
    )
  }

  return (
    <PaymentFormComponent
      session={session}
      onCompleted={onCompleted}
      onCancelled={onCancelled}
      captchaSiteKey={configuration.recaptchaPublicKey}
      captchaType={configuration.recaptchaKeyType}
      appImageUrl={pwaSettings?.homeScreenIconUrl}
      title={pwaSettings?.homeScreenName}
    />
  )
}
