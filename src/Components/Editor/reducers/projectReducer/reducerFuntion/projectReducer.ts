import { v4 as uuidv4 } from "uuid";
import { ProjectState, Action } from "../../../types";
import {PROJECT_TYPES} from "../reducerType"

export const projectReducers = (state: ProjectState[], action: Action) => {

    switch(action.type) {
        case PROJECT_TYPES.ADD_PROJECT: 
            return [...state, {
                name: action.project.name,
                description: action.project.description,
                projectType: action.project.projectType,
                id: uuidv4()
            }]
        case PROJECT_TYPES.REMOVE_PROJECT:  
            return state.filter(project => project.id !== action.id)  
        default: 
            return state
    }
}