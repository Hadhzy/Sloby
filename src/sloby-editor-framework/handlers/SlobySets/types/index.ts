export type ExpectedSetValues =
  | Array<string | number | boolean>
  | number
  | string
  | boolean
export type SlobySetType = { values: ExpectedSetValues[]; handler: any }
