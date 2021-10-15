// Type
import * as type from './types';

export const textMessage: type.TextMessageContract = (state, action)  => `${state}${action.payload}`;


export const clearMessage: type.TextClearMessageContract = () => '';

export const deleteElement: type.TextClearMessageContract = (state) => {
    return state.slice(0, -1);
};
