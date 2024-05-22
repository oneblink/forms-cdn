import * as React from 'react'
import { PaymentReceipt as PaymentReceiptComponent } from '@oneblink/apps-react'
import { submissionService } from '@oneblink/apps'

type Props = {
  doneRedirectUrl: string
  cancelRedirectUrl: string
}

export default function PaymentReceipt({
  doneRedirectUrl,
  cancelRedirectUrl,
}: Props) {
  const onDone = React.useCallback(
    async (submissionResult: submissionService.FormSubmissionResult) => {
      const url = new URL(doneRedirectUrl)
      url.searchParams.append(
        'submissionId',
        submissionResult.submissionId || '',
      )
      window.location.href = url.href
    },
    [doneRedirectUrl],
  )

  const handleCancel = React.useCallback(async () => {
    window.location.href = cancelRedirectUrl
  }, [cancelRedirectUrl])

  return <PaymentReceiptComponent onDone={onDone} onCancel={handleCancel} />
}
