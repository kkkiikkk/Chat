// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { ButtonMessage } from './type';

// Reducers
import { buttonCode, deleteButtonCode } from './cases';

const initialState: Array<ButtonMessage> = [];

export const buttonCodeMessages = createSlice({
    name:     'buttonCode',
    initialState,
    reducers: {
        buttonCode,
        deleteButtonCode,
    },
});

export const buttonMessageAction = buttonCodeMessages.actions;
export default buttonCodeMessages.reducer;
