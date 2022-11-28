import { SetStateAction } from 'react';
import { ChangeEvent } from 'react';
import React, { ReactChildren, ReactChild } from 'react';

export type ProjectState = {
    name: string,
    description?: string,
    id?: string | number,
    projectType?: string, 
    last?: boolean,
}

export type IsetState = any
   
 export type Action = {
    type: string,
    id?: number,
    project: ProjectState
}

export type  ContextChildren = {
    children: ReactChild | ReactChildren
}

export type IProjectHandlerContext = {
    popup: boolean,
    setPopup: Function,
    notification: boolean,
    setNotification: Function
}

export type IProjectsContext = {
    projects?: ProjectState[],
    dispatch: Function
}

export type IsearchBarInitialState = {
    searchInput: string,
    isInputFocused: boolean
}

export type Input = "" | string

export type IUserContext = {
    log_in_user?: Function, 
    log_out_user: () => Promise<void>
    register_user?: Function
    logged_in?: boolean
}
export type IEventType = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>

export type ISlobyValidateState = any


export interface ISlobyValidate {
    inputNames: any,
    setInputNames(): void,
    setNames(): any
    inputNamesList: Array<any>,
    handleChange(event: IEventType): void,
}