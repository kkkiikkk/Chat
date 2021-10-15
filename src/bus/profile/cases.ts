// Types
import * as types from './types';

export const setUserName: types.UserProfileContract = (state, action) =>  {
    state.username = action.payload.username;
    state._id = action.payload._id;
};

export const introducedUserName: types.UserNameContract = (state, action) =>  {
    state.username = action.payload;
};

export const getUserName: types.UserProfileContract = (state, action) =>  {
    state.username = action.payload.username;
};
