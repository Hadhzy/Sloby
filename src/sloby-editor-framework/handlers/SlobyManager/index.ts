import { SlobyGlobalState } from "../../utils/constans";

export default class SlobyManager {
  constructor() {}

  getLocalStorageGlobalState() {
    return JSON.parse(localStorage.getItem(SlobyGlobalState)!)
  }
}