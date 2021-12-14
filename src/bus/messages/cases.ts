// Types
import * as types from './types';

export const fillMessage: types.FilMessageContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};

export const createMessage: types.AddMessageContract = (state, action) => {
    return [ action.payload, ...state ];
};

export const deleteMessage: types.DeleteMEssage = (state, action) => {
    state.filter(({ _id }) => _id !== action.payload);
};
export const updateMessage: types.UpdateMessageContract = (state, action) => {
    const index = state.indexOf(action.payload);

    if (index !== -1) {
        state[ index ] = action.payload;
    }
};

