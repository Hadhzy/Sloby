import { ISlobyValidate,ISlobyValidateState } from './../../types/index';
import React from "react"
import { IEventType } from "../../types"
import { v4 as uuidv4 } from "uuid";
import { ADMIN_PAGE } from '../../store/AdminPage';


export default class SlobyValidate {
    inputList: string[];


    constructor(public inputs: any) {
        this.inputList = [...Object.getOwnPropertyNames(this.inputs)]
        this.inputs = this.handleChange
    }

    handleChange(e: IEventType) {
        this.inputs = { ...this.inputs, [e.currentTarget.name]: e.currentTarget.value }
    }

    submit(e: IEventType, condition: string) {
        e.preventDefault()
        const inputsAreFilled = this.checkInputIsFilled()
        const conditionImplemented = inputsAreFilled && this.conditionImplementation(condition)
        const loginInformation = this.loginInformations()
        if(!inputsAreFilled) return console.log("Please fil all of the forms with the right condition")
        if (!conditionImplemented) return console.log("Please implement the condition properly")
        if(!loginInformation) return console.log("Invalid Login Infos")
        return console.log("You're in")
    } 

    checkInputIsFilled() {
        const properties = Object.values(this.inputs)
        const inputsAreEmptyString= properties.every(element => element === "") || properties.some(element => element === "")
        if (inputsAreEmptyString) return false 
        return true
    }  

    conditionImplementation(condition: string) {
        return true
    }

    private loginInformations() {
        const newestPassword = this.getNewestAcceptedPassword()
        if(newestPassword !== this.inputs.password) return false
        return true
    }

    private getNewestAcceptedPassword() { 
        return ADMIN_PAGE.LOG_IN_PASSWORD
    }
}

class SlobyValidateError {
    constructor(public message: string) { }
}
