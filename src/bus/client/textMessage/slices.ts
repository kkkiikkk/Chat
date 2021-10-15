// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { TextMessage } from './types';

// Reducers
import { textMessage, clearMessage, deleteElement } from './cases';

const initialState: TextMessage = '';

export const textMessages = createSlice({
    name:     'text',
    initialState,
    reducers: {
        textMessage,
        clearMessage,
        deleteElement,
    },
});

export const textMessageAction = textMessages.actions;
export default textMessages.reducer;
