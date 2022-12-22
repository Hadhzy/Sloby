import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from './dashboard/dashboardSlice'
import userReducer from './user/userSlice'

export const store = configureStore({
  reducer: {
    projectDashboard: dashboardReducer,
    userSignIn: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
