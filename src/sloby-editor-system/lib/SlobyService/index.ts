import * as fs from "fs";
import { ISlobyService } from "../../utils/interfaces";

export default class SlobyService implements ISlobyService {
  /** Providing helper methods for global usage*/

  loadJson(filename: string) {
    /** Loading Json data based on a filename that is provided */
    return JSON.parse(
      fs.existsSync(filename) ? fs.readFileSync(filename).toString() : "''"
    );
  }

  saveJson(filename: string, json: string) {
    /**Saving a Json data by the filename and with the proper Json string data */
    return fs.writeFileSync(filename, JSON.stringify(json, null, 2));
  }
}
