import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type Project = {
    projectName: string,
    projectDescription: string
}

export interface Dashboard {
    search: boolean, projectModal: boolean, projectName: string, projectDescription: string,
    errorMessage: string,
    shouldNotificationDisplay: boolean,
    projects: Array<Object>
}

const initialState: Dashboard = {
    search: false,
    projectModal: false,
    projectName: "",
    projectDescription: "",
    errorMessage: "",
    projects: [],
    shouldNotificationDisplay: false
}

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setSearchbar: (state, action: PayloadAction<boolean>) => {
            state.search = action.payload
        },
        setProjectModal: (state, action: PayloadAction<boolean>) => {
            state.projectModal = action.payload
        },
        updateProjectName: (state, action: PayloadAction<string>) => {
            state.projectName = action.payload
        },
        updateProjectDescription: (state, action: PayloadAction<string>) => {
            state.projectDescription = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload
        },
        createProject: (state, action: PayloadAction<Project>) => {
            state.projects = [...state.projects, action.payload]
        },
        displayNotification: (state, action: PayloadAction<boolean>) => {
            state.shouldNotificationDisplay = action.payload
        }
    }
})

export const { setSearchbar, setProjectModal, updateProjectName, updateProjectDescription, setError, createProject,displayNotification } = dashboardSlice.actions
export default dashboardSlice.reducer