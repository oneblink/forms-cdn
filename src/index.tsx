import './polyfills'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  authService,
  useTenantCivicPlus,
  useTenantOneBlink,
} from '@oneblink/apps'
import { IsOfflineContextProvider } from '@oneblink/apps-react'
import { ModalContainerProvider } from '@oneblink/apps-react/dist/components/renderer/Modal'
import Form from './form'
import PaymentReceipt from './PaymentReceipt'
import './styles.scss'
import PaymentForm from './PaymentForm'
import CalendarBookingForm from './CalendarBookingForm'
import CalendarBookingRescheduleForm from './CalendarBookingRescheduleForm'
import CalendarBookingCancelForm from './CalendarBookingCancelForm'
import ThemeProvider from './ThemeProvider'
import FormConfigLoader from './FormConfigLoader'

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
    calendarBookingFormUrl,
    calendarBookingRescheduleFormUrl,
    calendarBookingCancelFormUrl,
    externalId,
    googleMapsApiKey,
    preFillData,
    token,
    scrollableContainerId,
  } = options
  if (typeof selector !== 'string' || !selector) {
    throw new TypeError('"options.selector" must be a string')
  }
  if (typeof formId !== 'number' || Number.isNaN(formId)) {
    throw new TypeError('"options.formId" must be a number')
  }
  if (
    formsAppId !== undefined &&
    (typeof formsAppId !== 'number' || Number.isNaN(formsAppId))
  ) {
    throw new TypeError('"options.formsAppId" must be a number or not supplied')
  }
  if (cancelRedirectUrl !== undefined && typeof cancelRedirectUrl !== 'string') {
    throw new TypeError('"options.cancelRedirectUrl" must be a string')
  }
  if (submissionRedirectUrl !== undefined && typeof submissionRedirectUrl !== 'string') {
    throw new TypeError('"options.submissionRedirectUrl" must be a string')
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
  if (
    calendarBookingFormUrl !== undefined &&
    typeof calendarBookingFormUrl !== 'string'
  ) {
    throw new TypeError('"options.calendarBookingFormUrl" must be a string')
  }
  if (
    calendarBookingRescheduleFormUrl !== undefined &&
    typeof calendarBookingRescheduleFormUrl !== 'string'
  ) {
    throw new TypeError(
      '"options.calendarBookingRescheduleFormUrl" must be a string',
    )
  }
  if (
    calendarBookingCancelFormUrl !== undefined &&
    typeof calendarBookingCancelFormUrl !== 'string'
  ) {
    throw new TypeError(
      '"options.calendarBookingCancelFormUrl" must be a string',
    )
  }
  if (calendarBookingFormUrl) {
    if (!calendarBookingRescheduleFormUrl) {
      throw new TypeError(
        '"options.calendarBookingRescheduleFormUrl" must be supplied when supplying "options.calendarBookingFormUrl"',
      )
    }
    if (!calendarBookingCancelFormUrl) {
      throw new TypeError(
        '"options.calendarBookingCancelFormUrl" must be supplied when supplying "options.calendarBookingFormUrl"',
      )
    }
  }
  if (externalId !== undefined && typeof externalId !== 'string') {
    throw new TypeError('"options.externalId" must be a string or not supplied')
  }
  if (googleMapsApiKey !== undefined && typeof googleMapsApiKey !== 'string') {
    throw new TypeError(
      '"options.googleMapsApiKey" must be a string or not supplied',
    )
  }
  if (token !== undefined && typeof token !== 'string') {
    throw new TypeError('"options.token" must be a string or not supplied')
  }
  if (
    scrollableContainerId !== undefined &&
    typeof scrollableContainerId !== 'string'
  ) {
    throw new TypeError(
      '"options.scrollableContainerId" must be a string or not supplied',
    )
  }
  const navigableValidationErrorsNotificationSettings = {
    scrollableContainerId,
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
              calendarBookingFormUrl={calendarBookingFormUrl}
              calendarBookingRescheduleFormUrl={
                calendarBookingRescheduleFormUrl
              }
              calendarBookingCancelFormUrl={calendarBookingCancelFormUrl}
              navigableValidationErrorsNotificationSettings={
                navigableValidationErrorsNotificationSettings
              }
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
  formsAppEnvironmentId?: number
  formsAppId?: number
  token?: string
}) {
  if (!options) {
    throw new TypeError('"options" must be an object')
  }
  const { selector, formsAppId, formsAppEnvironmentId, token } = options
  if (typeof selector !== 'string' || !selector) {
    throw new TypeError('"options.selector" must be a string')
  }
  if (
    formsAppId !== undefined &&
    (typeof formsAppId !== 'number' || Number.isNaN(formsAppId))
  ) {
    throw new TypeError('"options.formsAppId" must be a number or not supplied')
  }
  if (
    formsAppEnvironmentId !== undefined &&
    (typeof formsAppEnvironmentId !== 'number' ||
      Number.isNaN(formsAppEnvironmentId))
  ) {
    throw new TypeError(
      '"options.formsAppEnvironmentId" must be a number or not supplied',
    )
  }
  if (token !== undefined && typeof token !== 'string') {
    throw new TypeError('"options.token" must be a string or not supplied ')
  }

  authService.setFormsKeyToken(token)

  ReactDOM.render(
    <React.StrictMode>
      <FormConfigLoader
        formsAppId={formsAppId}
        formsAppEnvironmentId={formsAppEnvironmentId}
      >
        {({ configuration, pwaSettings }) => (
          <Router>
            <ModalContainerProvider className="oneblink-apps-react-styles">
              <PaymentForm
                configuration={configuration}
                pwaSettings={pwaSettings}
              />
            </ModalContainerProvider>
          </Router>
        )}
      </FormConfigLoader>
    </React.StrictMode>,
    document.querySelector(selector),
  )
}

export function renderCalendarBookingForm(options?: {
  selector: string
  doneRedirectUrl: string
  formsAppEnvironmentId?: number
  formsAppId?: number
}) {
  if (!options) {
    throw new TypeError('"options" must be an object')
  }
  const { selector, formsAppId, formsAppEnvironmentId, doneRedirectUrl } =
    options
  if (typeof selector !== 'string' || !selector) {
    throw new TypeError('"options.selector" must be a string')
  }
  if (typeof doneRedirectUrl !== 'string' || !doneRedirectUrl) {
    throw new TypeError('"options.doneRedirectUrl" must be a string')
  }
  if (
    formsAppId !== undefined &&
    (typeof formsAppId !== 'number' || Number.isNaN(formsAppId))
  ) {
    throw new TypeError('"options.formsAppId" must be a number or not supplied')
  }
  if (
    formsAppEnvironmentId !== undefined &&
    (typeof formsAppEnvironmentId !== 'number' ||
      Number.isNaN(formsAppEnvironmentId))
  ) {
    throw new TypeError(
      '"options.formsAppEnvironmentId" must be a number or not supplied',
    )
  }

  ReactDOM.render(
    <React.StrictMode>
      <FormConfigLoader
        formsAppId={formsAppId}
        formsAppEnvironmentId={formsAppEnvironmentId}
      >
        {({ configuration }) => (
          <Router>
            <ThemeProvider configuration={configuration}>
              <ModalContainerProvider className="oneblink-apps-react-styles">
                <CalendarBookingForm doneRedirectUrl={doneRedirectUrl} />
              </ModalContainerProvider>
            </ThemeProvider>
          </Router>
        )}
      </FormConfigLoader>
    </React.StrictMode>,
    document.querySelector(selector),
  )
}

export function renderCalendarBookingRescheduleForm(options?: {
  selector: string
  formsAppEnvironmentId?: number
  formsAppId?: number
}) {
  if (!options) {
    throw new TypeError('"options" must be an object')
  }
  const { selector, formsAppId, formsAppEnvironmentId } = options
  if (typeof selector !== 'string' || !selector) {
    throw new TypeError('"options.selector" must be a string')
  }
  if (
    formsAppId !== undefined &&
    (typeof formsAppId !== 'number' || Number.isNaN(formsAppId))
  ) {
    throw new TypeError('"options.formsAppId" must be a number or not supplied')
  }
  if (
    formsAppEnvironmentId !== undefined &&
    (typeof formsAppEnvironmentId !== 'number' ||
      Number.isNaN(formsAppEnvironmentId))
  ) {
    throw new TypeError(
      '"options.formsAppEnvironmentId" must be a number or not supplied',
    )
  }

  ReactDOM.render(
    <React.StrictMode>
      <FormConfigLoader
        formsAppId={formsAppId}
        formsAppEnvironmentId={formsAppEnvironmentId}
      >
        {({ configuration }) => (
          <Router>
            <ThemeProvider configuration={configuration}>
              <ModalContainerProvider className="oneblink-apps-react-styles">
                <CalendarBookingRescheduleForm />
              </ModalContainerProvider>
            </ThemeProvider>
          </Router>
        )}
      </FormConfigLoader>
    </React.StrictMode>,
    document.querySelector(selector),
  )
}

export function renderCalendarBookingCancelForm(options?: {
  selector: string
  formsAppEnvironmentId?: number
  formsAppId?: number
}) {
  if (!options) {
    throw new TypeError('"options" must be an object')
  }
  const { selector, formsAppId, formsAppEnvironmentId } = options
  if (typeof selector !== 'string' || !selector) {
    throw new TypeError('"options.selector" must be a string')
  }
  if (
    formsAppId !== undefined &&
    (typeof formsAppId !== 'number' || Number.isNaN(formsAppId))
  ) {
    throw new TypeError('"options.formsAppId" must be a number or not supplied')
  }
  if (
    formsAppEnvironmentId !== undefined &&
    (typeof formsAppEnvironmentId !== 'number' ||
      Number.isNaN(formsAppEnvironmentId))
  ) {
    throw new TypeError(
      '"options.formsAppEnvironmentId" must be a number or not supplied',
    )
  }

  ReactDOM.render(
    <React.StrictMode>
      <FormConfigLoader
        formsAppId={options.formsAppId}
        formsAppEnvironmentId={formsAppEnvironmentId}
      >
        {({ configuration }) => (
          <Router>
            <ThemeProvider configuration={configuration}>
              <ModalContainerProvider className="oneblink-apps-react-styles">
                <CalendarBookingCancelForm />
              </ModalContainerProvider>
            </ThemeProvider>
          </Router>
        )}
      </FormConfigLoader>
    </React.StrictMode>,
    document.querySelector(selector),
  )
}
