import { createSlice } from '@reduxjs/toolkit';

// Types
import { User } from './types';

// Reducers
import {  setUserName, introducedUserName, getUserName } from './cases';


const initialState: User = {
    _id:      '',
    username: '',
};

export const stateUserSlice = createSlice({
    name:     'stateUser',
    initialState,
    reducers: {
        setUserName,
        introducedUserName,
        getUserName,
    },
});

export const stateUserActions = stateUserSlice.actions;
export default stateUserSlice.reducer;
