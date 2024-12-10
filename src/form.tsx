import * as React from 'react'
import {
  formService,
  submissionService,
  formsAppService,
  OneBlinkAppsError,
} from '@oneblink/apps'
import { OneBlinkForm, useLoadDataState } from '@oneblink/apps-react'
import sanitizeHtml from '@oneblink/apps-react/dist/services/sanitize-html'
import OnLoading from '@oneblink/apps-react/dist/components/renderer/OnLoading'
import ErrorModal from './ErrorModal'
import { FormsAppsTypes } from '@oneblink/types'

type Props = {
  formId: number
  formsAppId: number
  submissionRedirectUrl: string
  cancelRedirectUrl: string
  preFillData: Record<string, unknown> | undefined
  externalId: string | undefined
  /** @deprecated `googleMapsApiKey` is now inherited from the Forms App Google Maps API Key integration */
  googleMapsApiKey: string | undefined
  paymentReceiptUrl: string | undefined
  paymentFormUrl: string | undefined
  calendarBookingFormUrl: string | undefined
  calendarBookingRescheduleFormUrl: string | undefined
  calendarBookingCancelFormUrl: string | undefined
}

const formIsSubmittingContainerStyles: React.CSSProperties = {
  opacity: 0.7,
}

const defaultUnpublishedHTML = `
<p style="font-size:1.5em">Form Unavailable</p>
<p>This form is currently unpublished.</p>
`

function Form({
  formId,
  formsAppId,
  submissionRedirectUrl,
  cancelRedirectUrl,
  paymentReceiptUrl,
  preFillData,
  externalId,
  googleMapsApiKey: optionsGoogleMapsApiKey,
  paymentFormUrl,
  calendarBookingFormUrl,
  calendarBookingRescheduleFormUrl,
  calendarBookingCancelFormUrl,
}: Props) {
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
          schedulingUrlConfiguration:
            calendarBookingCancelFormUrl &&
            calendarBookingRescheduleFormUrl &&
            calendarBookingFormUrl
              ? {
                  schedulingBookingUrl: calendarBookingFormUrl,
                  schedulingCancelUrl: calendarBookingCancelFormUrl,
                  schedulingRescheduleUrl: calendarBookingRescheduleFormUrl,
                }
              : undefined,
        })
        if (formSubmissionResult.isOffline) {
          throw new OneBlinkAppsError(
            'You cannot submit this form while offline, please try again when connectivity is restored.',
            {
              isOffline: true,
            },
          )
        }

        if (formSubmissionResult.payment || formSubmissionResult.scheduling) {
          return submissionService.executePostSubmissionAction(
            formSubmissionResult,
            {
              onRedirectToRelativeUrl: (url) => window.location.assign(url),
              onRedirectToAbsoluteUrl: (url) => window.location.assign(url),
            },
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
      calendarBookingCancelFormUrl,
      calendarBookingRescheduleFormUrl,
      calendarBookingFormUrl,
      submissionRedirectUrl,
    ],
  )

  const handleCancel = React.useCallback(() => {
    window.location.href = cancelRedirectUrl
  }, [cancelRedirectUrl])

  const loadState = React.useCallback(
    async (abortSignal: AbortSignal) => {
      return await Promise.all([
        formService.getForm({
          formId,
          abortSignal,
          formsAppId: undefined,
          formSlug: undefined,
        }),
        formsAppService.getFormsAppConfiguration(
          formsAppId,
          abortSignal,
        ) as Promise<
          FormsAppsTypes.FormsAppConfiguration<FormsAppsTypes.FormsListStyles>
        >,
      ])
    },
    [formId, formsAppId],
  )

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

  const [form, formsAppConfiguration] = React.useMemo(() => {
    if (state.status === 'SUCCESS') {
      return state.result
    }
    return []
  }, [state])

  const formNotPublishedError = React.useMemo(() => {
    if (!form) {
      return
    }
    const startDate = form.publishStartDate
      ? new Date(form.publishStartDate)
      : null
    const endDate = form.publishEndDate ? new Date(form.publishEndDate) : null
    const now = new Date()
    // If now is before startDate or after endDate
    if ((startDate && now < startDate) || (endDate && now > endDate)) {
      return sanitizeHtml(form.unpublishedUserMessage || defaultUnpublishedHTML)
    }
  }, [form])

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

  if (formNotPublishedError || !form || !formsAppConfiguration) {
    return (
      <div
        className="ob-form-unpublished-user-message__content ql-editor"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: formNotPublishedError || defaultUnpublishedHTML,
        }}
      ></div>
    )
  }

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
          captchaType={formsAppConfiguration.recaptchaKeyType}
          googleMapsApiKey={googleMapsApiKey}
          disabled={isSubmitting}
          buttons={formsAppConfiguration.styles.buttons}
          abnLookupAuthenticationGuid={
            formsAppConfiguration.abnLookupAuthenticationGuid
          }
          isPendingQueueEnabled={false}
          shouldUseNavigableValidationErrorsNotification={false}
        />
      </div>
      <ErrorModal error={submitError} onClose={clearSubmitError} />
    </>
  )
}

export default Form
