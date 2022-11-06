import { SlobyObject } from "../../utils/types";

export class Detector {
  constructor() {}

  detect(object: SlobyObject) {
    console.log(`${object.type} was created`)
  }
}


const p = new Detector()
const result = p.detect({type: "Cube"})
console.log(result)