// Types
import * as types from './types';

export const getMessages: types.GetMessagesContract = () => ({
    type: types.FILL_MESSAGE,
});

export const sendMessages: types.PostMessagesContract = (payload) => ({
    type: types.CREATE_MESSAGE,
    payload,

});
export const deleteMessage: types.DeleteMessageContract = (payload) => ({
    type: types.DELETE_MESSAGE,
    payload,

});
export const updateMessage: types.UpdateMessageContract = (payload) => ({
    type: types.UPDATE_MESSAGE,
    payload,
});

