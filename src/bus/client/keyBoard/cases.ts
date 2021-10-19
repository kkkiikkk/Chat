// Types
import * as types from './type';

export const buttonCode: types.ButtonMessageContract = (state, action)  => {
    if (!state.includes(action.payload)) {
        state.push(action.payload);
    }
};
export const deleteButtonCode: types.ButtonMessageContract = (state, action)  => {
    const item = state.indexOf(action.payload);

    state.splice(item, 1);
};
