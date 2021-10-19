// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { Messages as MessagesType } from './types';

// Reducers
import { createMessage, fillMessage, deleteMessage, updateMessage  } from './cases';

const initialState: MessagesType = [];

export const Messages = createSlice({
    name:     'message',
    initialState,
    reducers: {
        setUsers:      fillMessage,
        setMessages:   createMessage,
        deleteMesage:  deleteMessage,
        updateMessage: updateMessage,
    },
});

export const MessageAction = Messages.actions;
export default Messages.reducer;
