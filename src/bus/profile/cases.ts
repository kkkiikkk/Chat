// Types
import * as types from './types';

export const setUserName: types.UserNameContract = (state, action) =>  {
    state.username = action.payload.username;
    state._id = action.payload._id;
};

export const introducedUserName: types.UserNameContract1 = (state, action) =>  {
    state.username = action.payload;
};

export const getUserName: types.UserNameContract = (state, action) =>  {
    state.username = action.payload.username;
};
