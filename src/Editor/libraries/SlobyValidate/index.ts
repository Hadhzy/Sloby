import { ISlobyValidate,ISlobyValidateState } from './../../types/index';
import React from "react"
import { IEventType } from "../../types"


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
        const passwordValid = this.passwordValid()
        if(!inputsAreFilled) return console.log("Please fil all of the forms with the right condition")
        if (!conditionImplemented) return console.log("Please implement the condition properly")
        if(!passwordValid) return console.log("Invalid password")
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

    passwordValid() {
        const newestPassword = this.getNewesAcceptedPassword()
        if(newestPassword !== this.inputs.password) return false
        return true
    }

    getNewesAcceptedPassword() { 
        return "slobyAdminPagePassword.com"
    }
}

class SlobyValidateError {
    constructor(public message: string) { }
}
