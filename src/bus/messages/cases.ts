// Types
import * as types from './types';

export const setUsers: types.SetUserContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};

export const setMessages: types.SetMessagesContract = (state, action) => {
    state.push(action.payload);
};
