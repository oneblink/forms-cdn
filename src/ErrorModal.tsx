import * as React from 'react'
import clsx from 'clsx'
import { OneBlinkAppsError } from '@oneblink/apps'
import { useBooleanState } from '@oneblink/apps-react'
import Modal from '@oneblink/apps-react/dist/components/Modal'

type Props = {
  error: OneBlinkAppsError | Error | null
  onClose: () => unknown
}

function ErrorModal({ error, onClose }: Props) {
  const [isShowingOriginalError, , , toggleOriginalError] =
    useBooleanState(false)

  if (!error) {
    return null
  }

  let displayError

  if (!(error instanceof OneBlinkAppsError)) {
    displayError = new OneBlinkAppsError(error.message)
  } else {
    displayError = error
  }

  return (
    <Modal
      isOpen
      title={displayError.title}
      className="cypress-error-modal"
      cardClassName={clsx({
        'has-text-centered': displayError.isOffline,
      })}
      titleClassName="cypress-error-title"
      bodyClassName="cypress-error-message"
      actions={
        <>
          {!!displayError.originalError && (
            <>
              <button
                type="button"
                className="button ob-button is-light"
                onClick={toggleOriginalError}
              >
                {isShowingOriginalError ? 'Hide' : 'View'} Details
              </button>
              <span style={{ flex: 1 }}></span>
            </>
          )}
          <button
            type="button"
            className="button ob-button cypress-close-error is-primary"
            onClick={onClose}
          >
            Okay
          </button>
        </>
      }
    >
      <>
        <p>{error.message}</p>
        {displayError.isOffline && (
          <i className="material-icons has-text-warning icon-x-large">
            wifi_off
          </i>
        )}
        {!!displayError.originalError && isShowingOriginalError && (
          <div className="content has-margin-top-6">
            <blockquote>{displayError.originalError.message}</blockquote>
          </div>
        )}
      </>
    </Modal>
  )
}

export default React.memo<Props>(ErrorModal)
