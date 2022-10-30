import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface Dashboard {search: boolean}

const initialState: Dashboard = {
    search: false
}

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setSearchbar: (state, action: PayloadAction<boolean>) => {
            state.search = action.payload
        }
    }
})

export const { setSearchbar } = dashboardSlice.actions
export default dashboardSlice.reducer