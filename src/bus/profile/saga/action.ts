// Types
import * as types from './types';

export const register: types.PostUserContract = (payload) => ({
    type: types.REGISTER_USER,
    payload,

});

export const refresh: types.GetUserContract = (payload) => ({
    type: types.FILL_USER_PROFILE,
    payload,

});
