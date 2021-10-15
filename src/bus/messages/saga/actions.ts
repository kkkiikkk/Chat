// Types
import * as types from './types';

export const getMessages: types.GetMessagesContract = () => ({
    type: types.FILL_MESSAGE,
});

export const sendMessages: types.PostMessagesContract = (payload) => ({
    type: types.CREATE_MESSAGE,
    payload,

});
