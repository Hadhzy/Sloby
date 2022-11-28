import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";
import { SlobyProject } from "../../utils/types";

export type Project = {
  projectName: string;
  projectDescription: string;
};

export interface Dashboard {
  projectModal: boolean;
  projectName: string;
  projectDescription: string;
  errorMessage: string;
  shouldNotificationDisplay: boolean;
  projects: Array<SlobyProject>;
}

const initialState: Dashboard = {
  projectModal: false,
  projectName: "",
  projectDescription: "",
  errorMessage: "",
  projects: [],
  shouldNotificationDisplay: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setProjectModal: (state, action: PayloadAction<boolean>) => {
      state.projectModal = action.payload;
    },
    updateProjectName: (state, action: PayloadAction<string>) => {
      state.projectName = action.payload;
    },
    updateProjectDescription: (state, action: PayloadAction<string>) => {
      state.projectDescription = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    createProject: (state, action: PayloadAction<Project>) => {
      state.projects = [...state.projects, action.payload];
    },
    displayNotification: (state, action: PayloadAction<boolean>) => {
      state.shouldNotificationDisplay = action.payload;
    },
  },
});

export const {
  setProjectModal,
  updateProjectName,
  updateProjectDescription,
  setError,
  createProject,
  displayNotification,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
