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
    if (action) {
        [ ...state.splice(state.length - 1) ];
    }
};
export const updateMessage: types.UpdateMessageContract = (state, action) => {
    state.map(({ text,   updatedAt, _id }) => {
        if (_id === action.payload._id) {
            text = action.payload.text;
            updatedAt = action.payload.updatedAt;
        }
    });

    return state;
};

