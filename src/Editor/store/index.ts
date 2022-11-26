import { configureStore } from "@reduxjs/toolkit"
import dashboardReducer from "./dashboard/dashboardSlice"
import slobyToolReducer from "../../sloby-editor-framework/store/sloby-tools/slobyToolsSlice"


export const store = configureStore({
    reducer: {
        projectDashboard: dashboardReducer,
        slobyTools: slobyToolReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch