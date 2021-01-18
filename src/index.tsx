import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useTenantCivicPlus, useTenantOneBlink } from '@oneblink/apps'
import Form from './form'
import 'setimmediate'

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

type Config = {
  formId: number
  formsAppId: number
  selector: string
  postSubmissionUrl: string
  cancelRedirectUrl: string
  preFillData?: { [key: string]: unknown }
  externalId?: string
  googleMapsApiKey?: string
  captchaSiteKey?: string
}

export const renderForm = (config: Config): void => {
  ReactDOM.render(
    <React.StrictMode>
      <Form
        formId={config.formId}
        formsAppId={config.formsAppId}
        preFillData={config.preFillData}
        externalId={config.externalId}
        googleMapsApiKey={config.googleMapsApiKey}
        captchaSiteKey={config.captchaSiteKey}
        postSubmissionUrl={config.postSubmissionUrl}
        cancelRedirectUrl={config.cancelRedirectUrl}
      />
    </React.StrictMode>,
    document.getElementById(config.selector),
  )
}
