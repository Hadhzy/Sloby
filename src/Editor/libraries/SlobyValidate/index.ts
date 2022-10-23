import { ISlobyValidate,ISlobyValidateState } from './../../types/index';
import React, { useState } from "react"
import { IEventType } from "../../types"
import { v4 as uuidv4 } from "uuid";
import { ADMIN_PAGE } from '../../store/AdminPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux';

export default class SlobyValidate {
    inputList: string[];
    allowedToEnter: boolean
    constructor(public inputs: any) {
        this.inputList = [...Object.getOwnPropertyNames(this.inputs)]
        this.inputs = this.handleChange
        this.allowedToEnter = false
        console.log(this.allowedToEnter)
    }

    handleChange(e: IEventType) {
        this.inputs = { ...this.inputs, [e.currentTarget.name]: e.currentTarget.value }
    }         

    submit(e: IEventType, condition: string) {
        e.preventDefault()
        console.log(this.allowedToEnter)
        const inputsAreFilled = this.checkInputIsFilled()
        const conditionImplemented = inputsAreFilled && this.conditionImplementation(condition)
        const loginInformation = this.loginInformations()
        if(!inputsAreFilled) return console.log("Please fil all of the forms with the right informations")
        if (!conditionImplemented) return console.log("Please implement the condition properly")
        if (!loginInformation) return console.log("Invalid Login Infos")
        console.log("You're in")
        this.allowedToEnter = true
        console.log(this.allowedToEnter)
        return true
    } 

    checkInputIsFilled() {
        const properties = Object.values(this.inputs)
        const inputsAreEmptyString = properties.every(element => element === "") || properties.some(element => element === "")
        if (inputsAreEmptyString) return false 
        return true
    }  

    conditionImplementation(condition: string) {
        return true
    }

    private loginInformations() {
        const newestPassword = this.getNewestAcceptedPassword()
        const validUsernames = this.getValiedUsernames()

        if(newestPassword !== this.inputs.password && validUsernames !== this.inputs.username) return false
        return true
    }

    private getNewestAcceptedPassword() { return ADMIN_PAGE.LOG_IN_PASSWORD }
    
    private getValiedUsernames() { return ADMIN_PAGE.LOG_IN_USERNAME }
}