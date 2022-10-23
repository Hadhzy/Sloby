import {configureStore} from "@reduxjs/toolkit"
import validateErrorReducer from "./validateError/validateErrorSlice"

export const store = configureStore({
    reducer: {
        validateError: validateErrorReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch