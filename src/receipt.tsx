import * as React from 'react'
import { PaymentReceipt } from '@oneblink/apps-react'

type Props = {
  redirectUrl: string
}

export default function Receipt({ redirectUrl }: Props) {
  const onDone = React.useCallback(async () => {
    window.location.href = redirectUrl
  }, [redirectUrl])

  return (
    <div>
      <PaymentReceipt onDone={onDone} />
    </div>
  )
}
