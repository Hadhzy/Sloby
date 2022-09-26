import { ChangeEvent } from 'react';
import React, { ReactChildren, ReactChild } from 'react';

export type ProjectState = {
    name: string,
    description?: string,
    id?: string | number,
    projectType?: string, 
    last?: boolean,
}
   
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
export type IEventType = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>