import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ValidateError {errorMessage: string}


const initialState: ValidateError = {
    errorMessage: ""
}

export const validateErrorSlice = createSlice({
    name: "validateError",
    initialState,
    reducers: {
        newSlobyValidateError: (state, action: PayloadAction<string>) => {
            state.errorMessage = action.payload
        },
    },
});

export const { newSlobyValidateError } = validateErrorSlice.actions
export default validateErrorSlice.reducer