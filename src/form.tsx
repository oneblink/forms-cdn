import * as React from 'react'
import { formService, submissionService } from '@oneblink/apps'
import { getRequest } from '@oneblink/apps/dist/services/fetch'
import tenants from '@oneblink/apps/dist/tenants'
import { OneBlinkForm } from '@oneblink/apps-react'
import OnLoading from '@oneblink/apps-react/dist/components/renderer/OnLoading'
import { BrowserRouter as Router } from 'react-router-dom'
import { FormsAppsTypes } from '@oneblink/types'
import ErrorModal from './ErrorModal'

type Props = {
  formId: number
  formsAppId: number
  submissionRedirectUrl: string
  cancelRedirectUrl: string
  preFillData?: Record<string, unknown>
  externalId?: string
  googleMapsApiKey?: string
  abnLookupAuthenticationGuid?: string
}

const formIsSubmittingContainerStyles: React.CSSProperties = {
  opacity: 0.7,
}

async function getFormsAppConfiguration(formsAppId: number) {
  const url = `${tenants.current.apiOrigin}/forms-apps/${formsAppId}/hostname-configuration`
  const formsAppConfiguration = await getRequest<
    FormsAppsTypes.FormsAppConfiguration<FormsAppsTypes.BaseFormsAppStyles>
  >(url)
  return formsAppConfiguration
}

function Form({
  formId,
  formsAppId,
  submissionRedirectUrl,
  cancelRedirectUrl,
  preFillData,
  externalId,
  googleMapsApiKey,
  abnLookupAuthenticationGuid,
}: Props) {
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
        formsAppConfiguration: undefined,
        form: null,
      })

      try {
        const [f, formsAppConfiguration] = await Promise.all([
          formService.getForm(formId),
          getFormsAppConfiguration(formsAppId),
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
    // apps-react won't render a form and instead throws an error unless wrapped in a router tag
    <Router>
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
          abnLookupAuthenticationGuid={abnLookupAuthenticationGuid}
        />
      </div>
      <ErrorModal error={submitError} onClose={clearSubmitError} />
    </Router>
  )
}

export default Form
