import './polyfills'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useTenantCivicPlus, useTenantOneBlink } from '@oneblink/apps'
import Form from './form'
import 'setimmediate'
import './styles.scss'

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
    externalId,
    googleMapsApiKey,
    preFillData,
    abnLookupAuthenticationGuid,
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
  if (
    abnLookupAuthenticationGuid !== undefined &&
    typeof abnLookupAuthenticationGuid !== 'string'
  ) {
    throw new TypeError(
      '"options.abnLookupAuthenticationGuid" must be a string or not supplied ',
    )
  }

  ReactDOM.render(
    <React.StrictMode>
      <div className="oneblink-apps-react-styles">
        <Form
          formId={formId}
          formsAppId={formsAppId}
          preFillData={preFillData as Record<string, unknown> | undefined}
          externalId={externalId}
          googleMapsApiKey={googleMapsApiKey}
          submissionRedirectUrl={submissionRedirectUrl}
          cancelRedirectUrl={cancelRedirectUrl}
          abnLookupAuthenticationGuid={abnLookupAuthenticationGuid}
        />
      </div>
    </React.StrictMode>,
    document.querySelector(selector),
  )
}
