import * as React from 'react'
import { CalendarBookingsForm } from '@oneblink/apps-react'
import { submissionService } from '@oneblink/apps'

export default function CalendarBookingForm({
  doneRedirectUrl,
}: {
  doneRedirectUrl: string
}) {
  const onDone = React.useCallback(
    async (formSubmissionResult: submissionService.FormSubmissionResult) => {
      if (formSubmissionResult.payment) {
        return await submissionService.executePostSubmissionAction(
          formSubmissionResult,
          {
            onRedirectToAbsoluteUrl: (url) => window.location.replace(url),
            onRedirectToRelativeUrl: (url) => window.location.replace(url),
          },
        )
      }

      const url = new URL(doneRedirectUrl)
      if (formSubmissionResult.submissionId) {
        url.searchParams.append(
          'submissionId',
          formSubmissionResult.submissionId,
        )
      }
      window.location.replace(url.href)
    },
    [doneRedirectUrl],
  )

  return <CalendarBookingsForm onDone={onDone} />
}
