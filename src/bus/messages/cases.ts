// Types
import * as types from './types';

export const fillMessage: types.FilMessageContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};

export const createMessage: types.AddMessageContract = (state, action) => {
    return [ action.payload, ...state ];
};

