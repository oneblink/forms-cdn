import * as React from 'react'
import { formService, submissionService, formsAppService, OneBlinkAppsError } from '@oneblink/apps'
import { OneBlinkForm } from '@oneblink/apps-react'
import OnLoading from '@oneblink/apps-react/dist/components/renderer/OnLoading'
import { useHistory } from 'react-router-dom'
import ErrorModal from './ErrorModal'

type Props = {
  formId: number
  formsAppId: number
  submissionRedirectUrl: string
  cancelRedirectUrl: string
  preFillData?: Record<string, unknown>
  externalId?: string
  googleMapsApiKey?: string
  paymentReceiptUrl?: string
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
  googleMapsApiKey,
}: Props) {
  const history = useHistory()
  const [
    { isFetching, form, formsAppConfiguration, fetchError },
    setFetchingState,
  ] = React.useState({
    isFetching: true,
    form: null,
    formsAppConfiguration: undefined,
    fetchError: null,
  })
  const fetchAgain = React.useCallback(() => {
    setFetchingState({
      isFetching: true,
      form: null,
      formsAppConfiguration: undefined,
      fetchError: null,
    })
  }, [])

  const [{ isSubmitting, submitError }, setSubmittingState] = React.useState({
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
          draftId: null,
          jobId: null,
          preFillFormDataId: null,
        }

        const formSubmissionResult = await submissionService.submit({
          formSubmission,
          paymentReceiptUrl,
          isPendingQueueEnabled: false,
          shouldRunServerValidation: true,
          shouldRunExternalIdGeneration: true,
        })
        if (
          formSubmissionResult.isOffline 
        ) {
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
          formSubmissionResult.submissionId,
        )

        window.location.href = url.href
      } catch (e) {
        console.error('An error has occurred while attempting to submit: ', e)
        setSubmittingState({
          isSubmitting: false,
          submitError: e,
        })
      }
    },
    [
      externalId,
      formsAppId,
      submissionRedirectUrl,
      paymentReceiptUrl,
      history.push,
    ],
  )

  const handleCancel = React.useCallback(() => {
    window.location.href = cancelRedirectUrl
  }, [cancelRedirectUrl])

  React.useEffect(() => {
    if (!isFetching) {
      return
    }

    const fetchForm = async () => {
      setFetchingState({
        isFetching: true,
        fetchError: null,
        formsAppConfiguration: undefined,
        form: null,
      })

      try {
        const [f, formsAppConfiguration] = await Promise.all([
          formService.getForm(formId),
          formsAppService.getFormsAppConfiguration(formsAppId),
        ])
        setFetchingState({
          isFetching: false,
          fetchError: null,
          formsAppConfiguration,
          form: f,
        })
      } catch (e) {
        setFetchingState({
          isFetching: false,
          formsAppConfiguration: undefined,
          fetchError: e,
          form: null,
        })
      }
    }

    fetchForm()
  }, [formId, formsAppId, isFetching])

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

  if (isFetching) {
    return <OnLoading className="has-text-centered" small />
  }

  if (fetchError) {
    return (
      <div className="has-text-centered">
        <h3 className="title is-3">Error Loading Form</h3>
        <p className="content has-text-danger">{fetchError.message}</p>
        <button className="button" onClick={fetchAgain}>
          Try Again
        </button>
      </div>
    )
  }

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
