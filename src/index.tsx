import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Form from './form'
import 'setimmediate'

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

export const renderForm = (config: Config) => {
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
