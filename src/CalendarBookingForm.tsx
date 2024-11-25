import * as React from 'react'
import { CalendarBookingsForm } from '@oneblink/apps-react'
import { submissionService } from '@oneblink/apps'

export default function CalendarBookingForm({
  doneRedirectUrl,
}: {
  doneRedirectUrl: string
}) {
  const onDone = React.useCallback(
    async (submissionResult: submissionService.FormSubmissionResult) => {
      const url = new URL(doneRedirectUrl)
      if (submissionResult.submissionId) {
        url.searchParams.append('submissionId', submissionResult.submissionId)
      }
      window.location.replace(url.href)
    },
    [doneRedirectUrl],
  )

  return <CalendarBookingsForm onDone={onDone} />
}
