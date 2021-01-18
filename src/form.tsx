import * as React from 'react'
import { formService, submissionService } from '@oneblink/apps'
import { OneBlinkForm, useBooleanState } from '@oneblink/apps-react'
import { BrowserRouter as Router } from 'react-router-dom'
import { SubmissionTypes } from '@oneblink/types'

type Props = {
  formId: number
  formsAppId: number
  postSubmissionUrl: string
  cancelRedirectUrl: string
  preFillData?: { [key: string]: unknown }
  externalId?: string
  googleMapsApiKey?: string
  captchaSiteKey?: string
}

function Form({
  formId,
  formsAppId,
  postSubmissionUrl,
  cancelRedirectUrl,
  preFillData,
  externalId,
  googleMapsApiKey,
  captchaSiteKey,
}: Props) {
  const [form, setForm] = React.useState(null)
  const [isFetchingForm, setIsFetchingForm] = React.useState(false)
  const [fetchError, setFetchError] = React.useState(null)
  const [formIsDisabled, disableForm, enableForm] = useBooleanState(false)

  const handleSubmit = React.useCallback(
    async (newFormSubmission: SubmissionTypes.NewFormSubmission) => {
      try {
        disableForm()
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

        window.location.href =
          `${postSubmissionUrl}?submissionId=${formSubmissionResult.submissionId}`
      } catch (e) {
        console.error('An error has occurred while attempting to submit: ', e)
      } finally {
        enableForm()
      }
    },
    [],
  )

  const handleCancel = React.useCallback(() => {
    window.location.href = cancelRedirectUrl
  }, [])

  React.useEffect(() => {
    const fetchForm = async () => {
      setIsFetchingForm(true)

      try {
        const form = await formService.getForm(formId)
        setForm(form)
      } catch (e) {
        setFetchError(e)
      } finally {
        setIsFetchingForm(false)
      }
    }

    if (!form && !isFetchingForm && !fetchError) {
      fetchForm()
    }
  }, [isFetchingForm, form, formId])

  if (!form) {
    return null
  } else if (isFetchingForm) {
    return (
      <div>
        <p>fetching</p>
      </div>
    )
  } else {
    // apps-react won't render a form and instead throws an error unless wrapped in a router tag
    return (
      <Router>
        <OneBlinkForm
          form={form}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          initialSubmission={preFillData}
          captchaSiteKey={captchaSiteKey}
          googleMapsApiKey={googleMapsApiKey}
          disabled={formIsDisabled}
        />
      </Router>
    )
  }
}

export default Form
