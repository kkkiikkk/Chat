import { createSlice } from '@reduxjs/toolkit';

// Types
import { Profile } from './types';

// Reducers
import {  setProfileName, introducedProfileName, getProfileName } from './cases';


const initialState: Profile = {
    _id:      null,
    username: null,
};

export const stateProfile = createSlice({
    name:     'profileState',
    initialState,
    reducers: {
        setUserName:        setProfileName,
        introducedUserName: introducedProfileName,
        getUserName:        getProfileName,
    },
});

export const stateProfileActions = stateProfile.actions;
export default stateProfile.reducer;
