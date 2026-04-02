declare const __ENVIRONMENT__: string
declare const __TENANT__: string

declare interface Window {
  ONEBLINK_APPS_ENVIRONMENT?: string
  OneBlinkForms?: {
    render: (options: Record<string, unknown>) => void
    renderPaymentReceipt: (options: {
      selector: string
      doneRedirectUrl: string
      cancelRedirectUrl: string
      token?: string
    }) => void
    renderPaymentForm: (options: {
      selector: string
      formsAppEnvironmentId?: number
      formsAppId?: number
      token?: string
    }) => void
    renderCalendarBookingForm: (options: {
      selector: string
      doneRedirectUrl: string
      formsAppEnvironmentId?: number
      formsAppId?: number
    }) => void
    renderCalendarBookingRescheduleForm: (options: {
      selector: string
      formsAppEnvironmentId?: number
      formsAppId?: number
    }) => void
    renderCalendarBookingCancelForm: (options: {
      selector: string
      formsAppEnvironmentId?: number
      formsAppId?: number
    }) => void
  }
}
