import * as types from './types';

export const getMessages: types.GetMessagesContract = () => ({
    type: types.GET_MESSAGES,
});

export const sendMessages: types.PostMessagesContract = (payload) => ({
    type: types.POST_MESSAGES,
    payload,

});
