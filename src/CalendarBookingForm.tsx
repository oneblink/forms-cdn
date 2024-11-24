import * as React from 'react'

export default function CalendarBookingForm({
  doneRedirectUrl,
}: {
  doneRedirectUrl: string
}) {
  const onDone = React.useCallback(() => {
    window.location.replace(doneRedirectUrl)
  }, [doneRedirectUrl])

  // TODO implement when @oneblink/apps-react is ready
  return <div>Coming soon... {onDone}</div>
}
