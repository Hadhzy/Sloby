import React from "react";
import { ADMIN_PAGE } from "../../utils/constans";
import { IEventType } from "../../utils/types";
import { SlobyValidateInputs } from "../../utils/types/index";

export default class SlobyValidate {
  inputList: string[];
  allowedToEnter: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(public inputs: SlobyValidateInputs | any) {
    this.inputList = [...Object.getOwnPropertyNames(this.inputs)];
    const result = this.handleChange;
    this.inputs = result;
    this.allowedToEnter = false;
  }

  handleChange(e: React.FormEvent<HTMLFormElement>): SlobyValidateInputs {
    return (this.inputs = {
      ...this.inputs,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  submit(e: IEventType, condition: string) {
    e.preventDefault();
    console.log(this.allowedToEnter);
    const inputsAreFilled = this.checkInputIsFilled();
    const conditionImplemented = inputsAreFilled && this.conditionImplementation(condition);
    const loginInformation = this.loginInformations();
    if (!inputsAreFilled) return console.log("Please fil all of the forms with the right informations");
    if (!conditionImplemented) return console.log("Please implement the condition properly");
    if (!loginInformation) return console.log("Invalid Login Infos");
    console.log("You're in");
    this.allowedToEnter = true;
    console.log(this.allowedToEnter);
    return true;
  }

  checkInputIsFilled() {
    const properties = Object.values(this.inputs);
    const inputsAreEmptyString =
      properties.every((element) => element === "") || properties.some((element) => element === "");
    if (inputsAreEmptyString) return false;
    return true;
  }

  conditionImplementation(condition: string) {
    return true;
  }

  private loginInformations() {
    const newestPassword = this.getNewestAcceptedPassword();
    const validUsernames = this.getValiedUsernames();

    if (newestPassword !== this.inputs.password && validUsernames !== this.inputs.username) return false;
    return true;
  }

  private getNewestAcceptedPassword() {
    return ADMIN_PAGE.LOG_IN_PASSWORD;
  }

  private getValiedUsernames() {
    return ADMIN_PAGE.LOG_IN_USERNAME;
  }
}
