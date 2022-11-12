import { Tools } from "../../store/sloby-tools/slobyTools"

export interface SlobyElement {
  type?: string,
}

export interface ExpectedActionParameter {
  tool?: keyof Tools,
}