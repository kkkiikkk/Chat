// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { Messages as MessagesType } from './types';

// Reducers
import { createMessage, fillMessage } from './cases';

const initialState: MessagesType = [];

export const Messages = createSlice({
    name:     'message',
    initialState,
    reducers: {
        setUsers:    fillMessage,
        setMessages: createMessage,
    },
});

export const MessageAction = Messages.actions;
export default Messages.reducer;
