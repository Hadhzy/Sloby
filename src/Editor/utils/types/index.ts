import { SetStateAction } from 'react'
import { ChangeEvent } from 'react'
import React, { ReactChildren, ReactChild } from 'react'
import { validateInitalState } from '../../Components/Admin/AdminPageValidation'
export type ProjectState = {
  name: string
  description?: string
  id?: string | number
  projectType?: string
  last?: boolean
}

export type Action = {
  type: string
  id?: number
  project: ProjectState
}

export type ContextChildren = {
  children: ReactChild | ReactChildren
}

export type IsearchBarInitialState = {
  searchInput: string
  isInputFocused: boolean
}

export type Input = '' | string

// Will be refactored with Nest Js
export type IUserContext = {
  log_in_user?: any
  log_out_user: () => Promise<void>
  register_user?: any
  logged_in?: boolean
}

export type IEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.FormEvent<HTMLFormElement>
  | React.ChangeEvent<HTMLInputElement>

export type MainMenusObject = {
  id: number
  title: string
  icon: JSX.Element
  path: string
}

export type ViewsObject = {
  id: number
  title: string
  icon: JSX.Element
}

export type SlobyValidateInputs = {
  [key: string]: string
}

export type HeaderItemData = {
  id: number
  url: string
  title: string
  items: [string] | null
}
