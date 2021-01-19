import * as React from 'react'
import { formService, submissionService } from '@oneblink/apps'
import { OneBlinkForm } from '@oneblink/apps-react'
import '@oneblink/apps-react/dist/styles.css'
import OnLoading from '@oneblink/apps-react/dist/components/OnLoading'
import { BrowserRouter as Router } from 'react-router-dom'
import { SubmissionTypes } from '@oneblink/types'
import ErrorModal from './ErrorModal'

type Props = {
  formId: number
  formsAppId: number
  submissionRedirectUrl: string
  cancelRedirectUrl: string
  preFillData?: Record<string, unknown>
  externalId?: string
  googleMapsApiKey?: string
  captchaSiteKey?: string
}

const formIsSubmittingContainerStyles: React.CSSProperties = {
  opacity: 0.7,
}

function Form({
  formId,
  formsAppId,
  submissionRedirectUrl,
  cancelRedirectUrl,
  preFillData,
  externalId,
  googleMapsApiKey,
  captchaSiteKey,
}: Props) {
  const [{ isFetching, form, fetchError }, setFetchingState] = React.useState({
    isFetching: true,
    form: null,
    fetchError: null,
  })
  const fetchAgain = React.useCallback(() => {
    setFetchingState({
      isFetching: true,
      form: null,
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
    async (newFormSubmission: SubmissionTypes.NewFormSubmission) => {
      try {
        setSubmittingState({
          isSubmitting: true,
          submitError: null,
        })
        const formSubmission: SubmissionTypes.FormSubmission = {
          ...newFormSubmission,
          formsAppId,
          externalId,
          draftId: null,
          jobId: null,
          preFillFormDataId: null,
        }

        const formSubmissionResult = await submissionService.submit({
          formSubmission,
          paymentReceiptUrl: null,
        })
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
    [externalId, formsAppId, submissionRedirectUrl],
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
        form: null,
      })

      try {
        const f = await formService.getForm(formId)
        setFetchingState({
          isFetching: false,
          fetchError: null,
          form: f,
        })
      } catch (e) {
        setFetchingState({
          isFetching: false,
          fetchError: e,
          form: null,
        })
      }
    }

    fetchForm()
  }, [formId, isFetching])

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
    // apps-react won't render a form and instead throws an error unless wrapped in a router tag
    <Router>
      <div style={isSubmitting ? formIsSubmittingContainerStyles : undefined}>
        <OneBlinkForm
          form={form}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          initialSubmission={preFillData}
          captchaSiteKey={captchaSiteKey}
          googleMapsApiKey={googleMapsApiKey}
          disabled={isSubmitting}
        />
      </div>
      <ErrorModal error={submitError} onClose={clearSubmitError} />
    </Router>
  )
}

export default Form
