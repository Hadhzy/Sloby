import { SlobyValidateInputs } from '../../utils/types/index'
import React, { useState } from 'react'
import { IEventType } from '../../utils/types'
import { v4 as uuidv4 } from 'uuid'
import { ADMIN_PAGE } from '../../utils/constans'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export default class SlobyValidate {
  inputList: string[]
  allowedToEnter: boolean
  constructor(public inputs: SlobyValidateInputs | any) {
    this.inputList = [...Object.getOwnPropertyNames(this.inputs)]
    const result = this.handleChange
    this.inputs = result
    this.allowedToEnter = false
  }

  handleChange(e: React.FormEvent<HTMLFormElement>): SlobyValidateInputs {
    return (this.inputs = {
      ...this.inputs,
      [e.currentTarget.name]: e.currentTarget.value,
    })
  }

  submit(e: IEventType, condition: string) {
    e.preventDefault()
    console.log(this.allowedToEnter)
    const inputsAreFilled = this.checkInputIsFilled()
    const conditionImplemented =
      inputsAreFilled && this.conditionImplementation(condition)
    const loginInformation = this.loginInformations()
    if (!inputsAreFilled)
      return console.log(
        'Please fil all of the forms with the right informations'
      )
    if (!conditionImplemented)
      return console.log('Please implement the condition properly')
    if (!loginInformation) return console.log('Invalid Login Infos')
    console.log("You're in")
    this.allowedToEnter = true
    console.log(this.allowedToEnter)
    return true
  }

  checkInputIsFilled() {
    const properties = Object.values(this.inputs)
    const inputsAreEmptyString =
      properties.every((element) => element === '') ||
      properties.some((element) => element === '')
    if (inputsAreEmptyString) return false
    return true
  }

  conditionImplementation(condition: string) {
    return true
  }

  private loginInformations() {
    const newestPassword = this.getNewestAcceptedPassword()
    const validUsernames = this.getValiedUsernames()

    if (
      newestPassword !== this.inputs.password &&
      validUsernames !== this.inputs.username
    )
      return false
    return true
  }

  private getNewestAcceptedPassword() {
    return ADMIN_PAGE.LOG_IN_PASSWORD
  }

  private getValiedUsernames() {
    return ADMIN_PAGE.LOG_IN_USERNAME
  }
}
