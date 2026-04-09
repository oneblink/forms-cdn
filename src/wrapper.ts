// IIFE wrapper loaded via <script> tag that dynamically imports the ESM entry
// and exposes window.OneBlinkForms. Method calls made before the module loads
// are queued and replayed.

type OneBlinkFormsModule = typeof import('./index')
type MethodName = keyof OneBlinkFormsModule
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyCallable = (...args: any[]) => any

interface QueuedCall {
  n: MethodName
  a: unknown[]
}

;(function () {
  const script = document.currentScript as HTMLScriptElement
  const base = script.src.substring(0, script.src.lastIndexOf('/') + 1)
  const queue: QueuedCall[] = []
  let loadedOneBlinkForms: OneBlinkFormsModule | undefined

  const generateQueuedCall =
    (name: MethodName) =>
    (...args: unknown[]) => {
      if (loadedOneBlinkForms) {
        return (loadedOneBlinkForms[name] as AnyCallable)(...args)
      }
      queue.push({ n: name, a: args })
    }

  const ns: OneBlinkFormsModule = {
    render: generateQueuedCall('render'),
    renderPaymentReceipt: generateQueuedCall('renderPaymentReceipt'),
    renderPaymentForm: generateQueuedCall('renderPaymentForm'),
    renderCalendarBookingForm: generateQueuedCall('renderCalendarBookingForm'),
    renderCalendarBookingRescheduleForm: generateQueuedCall(
      'renderCalendarBookingRescheduleForm',
    ),
    renderCalendarBookingCancelForm: generateQueuedCall(
      'renderCalendarBookingCancelForm',
    ),
  }
  window.OneBlinkForms = ns

  import(base + '__ENTRY_FILE__').then((loadedModule: OneBlinkFormsModule) => {
    loadedOneBlinkForms = loadedModule
    Object.keys(loadedModule).forEach((k) => {
      ;(ns as Record<string, AnyCallable>)[k] = loadedModule[k as MethodName]
    })
    queue.forEach((c) => {
      ;(loadedModule[c.n] as AnyCallable)(...c.a)
    })
    queue.length = 0
  })
})()
