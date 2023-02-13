import * as React from 'react'
import { PaymentReceipt } from '@oneblink/apps-react'
import { submissionService } from '@oneblink/apps'

type Props = {
  onDone: (
    formSubmissionResult: submissionService.FormSubmissionResult,
  ) => Promise<void>
}

export default function Receipt({ onDone }: Props) {
  return (
    <div>
      <PaymentReceipt onDone={onDone} />
    </div>
  )
}
