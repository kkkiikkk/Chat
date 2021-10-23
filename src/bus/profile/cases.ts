// Types
import * as types from './types';

export const setProfileName: types.UserProfileContract = (state, action) =>  {
    state.username = action.payload.username;
    state._id = action.payload._id;
};

export const introducedProfileName: types.UserNameContract = (state, action) =>  {
    state.username = action.payload;
};

export const getProfileName: types.UserProfileContract = (state, action) =>  {
    state.username = action.payload.username;
};
