import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '@oneblink/apps-react/dist/styles.css'
import Form from './form'

type Config = {
  formId: number
  selector: string
}

export const renderForm = (config: Config) => {
  ReactDOM.render(
    <React.StrictMode>
      <div>
        <Form formId={config.formId} />
      </div>
    </React.StrictMode>,
    document.getElementById(config.selector),
  )
}
