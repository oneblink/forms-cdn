import './polyfills'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  authService,
  useTenantCivicPlus,
  useTenantOneBlink,
} from '@oneblink/apps'
import Form from './form'
import PaymentReceipt from './PaymentReceipt'
import './styles.scss'
import { IsOfflineContextProvider } from '@oneblink/apps-react'
import PaymentForm from './PaymentForm'
import { ModalContainerProvider } from '@oneblink/apps-react/dist/components/renderer/Modal'

window.ONEBLINK_APPS_ENVIRONMENT = __ENVIRONMENT__
switch (__TENANT__) {
  case 'civicplus': {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTenantCivicPlus()
    break
  }
  case 'oneblink':
  default: {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTenantOneBlink()
    break
  }
}

export function render(options?: Record<string, unknown>): void {
  if (!options) {
    throw new TypeError('"options" must be an object')
  }
  const {
    selector,
    formId,
    formsAppId,
    submissionRedirectUrl,
    cancelRedirectUrl,
    paymentReceiptUrl,
    paymentFormUrl,
    externalId,
    googleMapsApiKey,
    preFillData,
    token,
  } = options
  if (typeof selector !== 'string' || !selector) {
    throw new TypeError('"options.selector" must be a string')
  }
  if (typeof formId !== 'number' || Number.isNaN(formId)) {
    throw new TypeError('"options.formId" must be a number')
  }
  if (typeof formsAppId !== 'number' || Number.isNaN(formsAppId)) {
    throw new TypeError('"options.formsAppId" must be a number')
  }
  if (!cancelRedirectUrl || typeof cancelRedirectUrl !== 'string') {
    throw new TypeError('"options.cancelRedirectUrl" must be a string ')
  }
  if (!submissionRedirectUrl || typeof submissionRedirectUrl !== 'string') {
    throw new TypeError('"options.submissionRedirectUrl" must be a string ')
  }
  if (
    paymentReceiptUrl !== undefined &&
    typeof paymentReceiptUrl !== 'string'
  ) {
    throw new TypeError('"options.paymentReceiptUrl" must be a string ')
  }
  if (paymentFormUrl !== undefined && typeof paymentFormUrl !== 'string') {
    throw new TypeError('"options.paymentFormUrl" must be a string ')
  }
  if (externalId !== undefined && typeof externalId !== 'string') {
    throw new TypeError(
      '"options.externalId" must be a string or not supplied ',
    )
  }
  if (googleMapsApiKey !== undefined && typeof googleMapsApiKey !== 'string') {
    throw new TypeError(
      '"options.googleMapsApiKey" must be a string or not supplied ',
    )
  }
  if (token !== undefined && typeof token !== 'string') {
    throw new TypeError('"options.token" must be a string or not supplied ')
  }

  authService.setFormsKeyToken(token)

  ReactDOM.render(
    <React.StrictMode>
      <ModalContainerProvider className="oneblink-apps-react-styles">
        {/* apps-react won't render a form and instead throws an error unless wrapped in a router tag */}
        <Router>
          <IsOfflineContextProvider>
            <Form
              formId={formId}
              formsAppId={formsAppId}
              preFillData={preFillData as Record<string, unknown> | undefined}
              externalId={externalId}
              googleMapsApiKey={googleMapsApiKey}
              submissionRedirectUrl={submissionRedirectUrl}
              cancelRedirectUrl={cancelRedirectUrl}
              paymentReceiptUrl={paymentReceiptUrl}
              paymentFormUrl={paymentFormUrl}
            />
          </IsOfflineContextProvider>
        </Router>
      </ModalContainerProvider>
    </React.StrictMode>,
    document.querySelector(selector),
  )
}

export function renderPaymentReceipt(options?: {
  selector: string
  doneRedirectUrl: string
  cancelRedirectUrl: string
  token?: string
}) {
  if (!options) {
    throw new TypeError('"options" must be an object')
  }
  const { selector, doneRedirectUrl, cancelRedirectUrl, token } = options
  if (typeof selector !== 'string' || !selector) {
    throw new TypeError('"options.selector" must be a string')
  }
  if (!doneRedirectUrl || typeof doneRedirectUrl !== 'string') {
    throw new TypeError('"options.doneRedirectUrl" must be a string')
  }
  if (!cancelRedirectUrl || typeof cancelRedirectUrl !== 'string') {
    throw new TypeError('"options.cancelRedirectUrl" must be a string ')
  }
  if (token !== undefined && typeof token !== 'string') {
    throw new TypeError('"options.token" must be a string or not supplied ')
  }

  authService.setFormsKeyToken(token)

  ReactDOM.render(
    <React.StrictMode>
      <ModalContainerProvider className="oneblink-apps-react-styles">
        {/* apps-react won't render a form and instead throws an error unless wrapped in a router tag */}
        <Router>
          <PaymentReceipt
            doneRedirectUrl={doneRedirectUrl}
            cancelRedirectUrl={cancelRedirectUrl}
          />
        </Router>
      </ModalContainerProvider>
    </React.StrictMode>,
    document.querySelector(selector),
  )
}

export function renderPaymentForm(options?: {
  selector: string
  formsAppId: number
  token?: string
}) {
  if (!options) {
    throw new TypeError('"options" must be an object')
  }
  const { selector, formsAppId, token } = options
  if (typeof selector !== 'string' || !selector) {
    throw new TypeError('"options.selector" must be a string')
  }
  if (typeof formsAppId !== 'number' || Number.isNaN(formsAppId)) {
    throw new TypeError('"options.formsAppId" must be a number')
  }
  if (token !== undefined && typeof token !== 'string') {
    throw new TypeError('"options.token" must be a string or not supplied ')
  }

  authService.setFormsKeyToken(token)

  ReactDOM.render(
    <React.StrictMode>
      <ModalContainerProvider className="oneblink-apps-react-styles">
        {/* apps-react won't render a form and instead throws an error unless wrapped in a router tag */}
        <Router>
          <PaymentForm formsAppId={formsAppId} />
        </Router>
      </ModalContainerProvider>
    </React.StrictMode>,
    document.querySelector(selector),
  )
}
