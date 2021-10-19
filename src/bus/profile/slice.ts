import { createSlice } from '@reduxjs/toolkit';

// Types
import { Profile } from './types';

// Reducers
import {  setUserName, introducedUserName, getUserName } from './cases';


const initialState: Profile = {
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
