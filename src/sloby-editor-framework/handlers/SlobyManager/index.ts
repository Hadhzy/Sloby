import { SlobyGlobalState } from "../../utils/constans";
import { SlobyStateHandler } from "../SlobyStateHandler";

export default class SlobyManager extends SlobyStateHandler{
  constructor() {
    super();
  }

  getLocalStorageGlobalState() {
    return JSON.parse(localStorage.getItem(SlobyGlobalState)!)
  }

  getAllSlobyToolClass() {
    
  }
}