import * as React from 'react'
import { formService } from '@oneblink/apps'
import { OneBlinkForm } from '@oneblink/apps-react'
import { BrowserRouter as Router } from 'react-router-dom'

function Form({ formId }: { formId: number }) {
  const [form, setForm] = React.useState(null)
  const [isFetchingForm, setIsFetchingForm] = React.useState(false)
  const [fetchError, setFetchError] = React.useState(null)

  React.useEffect(() => {
    const fetchForm = async () => {
      setIsFetchingForm(true)

      try {
        const form = await formService.getForm(formId)
        setForm(form)
      } catch (e) {
        setFetchError(e)
      } finally {
        setIsFetchingForm(false)
      }
    }

    if (!form && !isFetchingForm && !fetchError) {
      fetchForm()
    }
  }, [isFetchingForm, form, formId])

  if (form) {
    // apps-react won't render a form and instead throws an error unless wrapped in a router tag
    return (
      <Router>
        <OneBlinkForm
          form={form}
          onCancel={() => console.log('cancelled')}
          onSubmit={() => console.log('submitted!')}
        />
      </Router>
    )
  } else if (isFetchingForm) {
    return (
      <div>
        <p>fetching</p>
      </div>
    )
  } else if (fetchError) {
    return <div>{JSON.stringify(fetchError)}</div>
  } else return null
}

export default Form
