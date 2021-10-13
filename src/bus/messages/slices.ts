// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { UserState } from './types';

// Reducers
import { setMessages, setUsers } from './cases';

const initialState: UserState = [];

export const userSlice = createSlice({
    name:     'days',
    initialState,
    reducers: {
        setUsers,
        setMessages,
    },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
