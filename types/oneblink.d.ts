declare type UnknownObject = { [property: string]: unknown }

declare type FormElementsCtrl = {
  model: UnknownObject
  elements: import('@oneblink/types').FormTypes.FormElement[]
  parentFormElementsCtrl?: FormElementsCtrl
}
