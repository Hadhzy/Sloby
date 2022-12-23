import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TUserState = {
  username: string
  password: string
  email: string
  loading: boolean
}

const initialState: TUserState = {
  username: '',
  password: '',
  email: '',
  loading: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    sendData: (
      state,
      action: PayloadAction<{
        username: string
        password: string
        email: string
      }>
    ) => {
      state.loading = true
    },
  },
})

export const { sendData } = userSlice.actions
export default userSlice.reducer
