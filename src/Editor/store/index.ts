import { configureStore } from "@reduxjs/toolkit"
import dashboardReducer from "./dashboard/dashboardSlice"
import textToolReducer from "../../sloby-editor-framework/store/sloby-tools/textToolSlice"

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
        textTools: textToolReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch