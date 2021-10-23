// Types
import * as types from './types';

export const register: types.PostRegisterContract = (payload) => ({
    type: types.REGISTER_PROFILE,
    payload,

});

export const refresh: types.GetRefreshContract = (payload) => ({
    type: types.REFRESH_PROFILE,
    payload,

});
