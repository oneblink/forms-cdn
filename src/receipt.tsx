import * as React from 'react'
import { PaymentReceipt } from '@oneblink/apps-react'
import { submissionService } from '@oneblink/apps'

type Props = {
  redirectUrl: string
  cancelRedirectUrl: string
}

export default function Receipt({ redirectUrl, cancelRedirectUrl }: Props) {
  const onDone = React.useCallback(
    async (submissionResult: submissionService.FormSubmissionResult) => {
      const url = new URL(redirectUrl)
      const searchString = url.search
        ? `${url.search}&submissionId=${submissionResult.submissionId}`
        : `?submissionId=${submissionResult.submissionId}`
      window.location.href = `${url.origin}${searchString}`
    },
    [redirectUrl],
  )

  const handleCancel = React.useCallback(() => {
    window.location.href = cancelRedirectUrl
  }, [cancelRedirectUrl])

  return (
    <div>
      <PaymentReceipt onDone={onDone} onCancel={handleCancel} />
    </div>
  )
}
