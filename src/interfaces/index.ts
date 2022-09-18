import React, { ReactChildren, ReactChild } from 'react';

export interface ProjectState {
        name: string,
        description: string,
        id: unknown,
        projectType?: string
}
   
 export interface Action {
    type: string,
    id?: number,
    project: ProjectState
}

export interface ContextChildren {
    children: ReactChild | ReactChildren
}

export interface IProjectHandlerContext {
    popup: boolean,
    setPopup: Function,
    notification: boolean,
    setNotification: Function
}

export interface IProjectsContext {
    projects?: Array<ProjectState>,
    dispatch: Function
}

export interface IThemeContext {
    theme: string,
    switchTheme: Function,
}