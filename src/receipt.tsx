import * as React from 'react'
import { PaymentReceipt } from '@oneblink/apps-react'

type Props = {
  onDone: () => void | Promise<void>
}

export default function Receipt({ onDone }: Props) {
  return (
    <div>
      <PaymentReceipt onDone={onDone} />
    </div>
  )
}
