import * as React from 'react'
import { CalendarBookingsForm } from '@oneblink/apps-react'

export default function CalendarBookingForm({
  doneRedirectUrl,
}: {
  doneRedirectUrl: string
}) {
  const onDone = React.useCallback(async () => {
    window.location.replace(doneRedirectUrl)
  }, [doneRedirectUrl])

  return <CalendarBookingsForm onDone={onDone} />
}
