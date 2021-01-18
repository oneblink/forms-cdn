import * as React from 'react'
import { formService, submissionService } from '@oneblink/apps'
import { OneBlinkForm, useBooleanState } from '@oneblink/apps-react'
import '@oneblink/apps-react/dist/styles.css'
import OnLoading from '@oneblink/apps-react/dist/components/OnLoading'
import { BrowserRouter as Router } from 'react-router-dom'
import { SubmissionTypes } from '@oneblink/types'

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

const isSubmittingContainerStyles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
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
  const [form, setForm] = React.useState(null)
  const [isFetchingForm, setIsFetchingForm] = React.useState(false)
  const [fetchError, setFetchError] = React.useState(null)
  const [
    isSubmittingForm,
    startSubmittingForm,
    stopSubmittingForm,
  ] = useBooleanState(false)

  const handleSubmit = React.useCallback(
    async (newFormSubmission: SubmissionTypes.NewFormSubmission) => {
      try {
        startSubmittingForm()
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
      } finally {
        stopSubmittingForm()
      }
    },
    [
      startSubmittingForm,
      stopSubmittingForm,
      externalId,
      formsAppId,
      submissionRedirectUrl,
    ],
  )

  const handleCancel = React.useCallback(() => {
    window.location.href = cancelRedirectUrl
  }, [cancelRedirectUrl])

  React.useEffect(() => {
    const fetchForm = async () => {
      setIsFetchingForm(true)

      try {
        const f = await formService.getForm(formId)
        setForm(f)
      } catch (e) {
        setFetchError(e)
      } finally {
        setIsFetchingForm(false)
      }
    }

    fetchForm()
  }, [formId])

  if (!form) {
    return null
  } else if (isFetchingForm) {
    return (
      <div className="has-text-centered">
        <OnLoading className="has-text-centered" />
        <span>Retrieving form...</span>
      </div>
    )
  } else {
    // apps-react won't render a form and instead throws an error unless wrapped in a router tag
    return (
      <div>
        {isSubmittingForm && (
          <div style={isSubmittingContainerStyles}>
            <OnLoading />
            <span>Submitting form...</span>
          </div>
        )}
        <Router>
          <OneBlinkForm
            form={form}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
            initialSubmission={preFillData}
            captchaSiteKey={captchaSiteKey}
            googleMapsApiKey={googleMapsApiKey}
            disabled={isSubmittingForm}
          />
        </Router>
      </div>
    )
  }
}

export default Form
