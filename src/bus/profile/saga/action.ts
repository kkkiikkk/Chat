
import * as types from './types';

export const register: types.PostUserContract = (payload) => ({
    type: types.POST_USER,
    payload,

});

export const refresh: types.GetUserContract = (payload) => ({
    type: types.GET_USER,
    payload,

});
