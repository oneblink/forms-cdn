import * as React from 'react'
import {
  formService,
  submissionService,
  formsAppService,
  OneBlinkAppsError,
} from '@oneblink/apps'
import { OneBlinkForm, useLoadDataState } from '@oneblink/apps-react'
import OnLoading from '@oneblink/apps-react/dist/components/renderer/OnLoading'
import { useHistory } from 'react-router-dom'
import ErrorModal from './ErrorModal'
import { FormsAppsTypes } from '@oneblink/types'

type Props = {
  formId: number
  formsAppId: number
  submissionRedirectUrl: string
  cancelRedirectUrl: string
  preFillData: Record<string, unknown> | undefined
  externalId: string | undefined
  optionsGoogleMapsApiKey: string | undefined
  paymentReceiptUrl: string | undefined
  paymentFormUrl: string | undefined
}

const formIsSubmittingContainerStyles: React.CSSProperties = {
  opacity: 0.7,
}

function Form({
  formId,
  formsAppId,
  submissionRedirectUrl,
  cancelRedirectUrl,
  paymentReceiptUrl,
  preFillData,
  externalId,
  optionsGoogleMapsApiKey,
  paymentFormUrl,
}: Props) {
  const history = useHistory()

  const [{ isSubmitting, submitError }, setSubmittingState] = React.useState<{
    isSubmitting: boolean
    submitError: Error | null
  }>({
    isSubmitting: false,
    submitError: null,
  })
  const clearSubmitError = React.useCallback(() => {
    setSubmittingState({
      isSubmitting: false,
      submitError: null,
    })
  }, [])

  const handleSubmit = React.useCallback(
    async (newFormSubmission: submissionService.NewFormSubmission) => {
      try {
        setSubmittingState({
          isSubmitting: true,
          submitError: null,
        })
        const formSubmission: submissionService.FormSubmission = {
          ...newFormSubmission,
          formsAppId,
          externalId,
          preFillFormDataId: null,
        }

        const formSubmissionResult = await submissionService.submit({
          formSubmission,
          paymentReceiptUrl,
          isPendingQueueEnabled: false,
          shouldRunServerValidation: true,
          shouldRunExternalIdGeneration: true,
          paymentFormUrl,
        })
        if (formSubmissionResult.isOffline) {
          throw new OneBlinkAppsError(
            'You cannot submit this form while offline, please try again when connectivity is restored.',
            {
              isOffline: true,
            },
          )
        }
        if (formSubmissionResult.submissionId && formSubmissionResult.payment) {
          return submissionService.executePostSubmissionAction(
            formSubmissionResult,
            history.push,
          )
        }

        const url = new URL(submissionRedirectUrl)
        url.searchParams.append(
          'submissionId',
          formSubmissionResult.submissionId || '',
        )

        window.location.href = url.href
      } catch (e) {
        console.error('An error has occurred while attempting to submit: ', e)
        setSubmittingState({
          isSubmitting: false,
          submitError: e as Error,
        })
      }
    },
    [
      formsAppId,
      externalId,
      paymentReceiptUrl,
      paymentFormUrl,
      submissionRedirectUrl,
      history.push,
    ],
  )

  const handleCancel = React.useCallback(() => {
    window.location.href = cancelRedirectUrl
  }, [cancelRedirectUrl])

  const loadState = React.useCallback(async () => {
    return await Promise.all([
      formService.getForm(formId),
      formsAppService.getFormsAppConfiguration(formsAppId) as Promise<
        FormsAppsTypes.FormsAppConfiguration<FormsAppsTypes.FormsListStyles>
      >,
    ])
  }, [formId, formsAppId])

  const [state, refresh] = useLoadDataState(loadState)

  React.useEffect(() => {
    const submitButton = document.querySelector('.ob-button-submit')
    if (submitButton) {
      if (isSubmitting) {
        submitButton.classList.add('is-loading')
      } else {
        submitButton.classList.remove('is-loading')
      }
    }
  }, [isSubmitting])

  if (state.status === 'LOADING') {
    return <OnLoading className="has-text-centered" small />
  }

  if (state.status === 'ERROR') {
    return (
      <div className="has-text-centered">
        <h3 className="title is-3">Error Loading Form</h3>
        <p className="content has-text-danger">{state.error.message}</p>
        <button className="button" onClick={refresh}>
          Try Again
        </button>
      </div>
    )
  }

  const [form, formsAppConfiguration] = state.result
  const googleMapsApiKey =
    optionsGoogleMapsApiKey || formsAppConfiguration.googleMapsApiKey

  return (
    <>
      <div style={isSubmitting ? formIsSubmittingContainerStyles : undefined}>
        <OneBlinkForm
          form={form}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          initialSubmission={preFillData}
          captchaSiteKey={formsAppConfiguration.recaptchaPublicKey}
          googleMapsApiKey={googleMapsApiKey}
          disabled={isSubmitting}
          buttons={formsAppConfiguration.styles.buttons}
          abnLookupAuthenticationGuid={
            formsAppConfiguration.abnLookupAuthenticationGuid
          }
          isPendingQueueEnabled={false}
        />
      </div>
      <ErrorModal error={submitError} onClose={clearSubmitError} />
    </>
  )
}

export default Form
