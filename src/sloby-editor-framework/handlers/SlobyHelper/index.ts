import { SlobyGlobalState } from "../../utils/constans";

export default class SlobyHelper {
  constructor() {  }

  getLocalStorage(value: string) {
    return JSON.parse(localStorage.getItem(value)!)
  }
  
  setLocalStorage(value: string, data: any) {
    return localStorage.setItem(value, JSON.stringify(data))
  }
}