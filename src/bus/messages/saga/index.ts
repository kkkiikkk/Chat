// Core
import { useDispatch } from 'react-redux';

// Actions
import {  sendMessages, deleteMessage, updateMessage } from './actions';

export const useMessage = () => {
    const dispatch = useDispatch();

    return {
        createMessages: (obj: {text: string, username: string}) => {
            dispatch(sendMessages(obj));
        },
        deleteMessage: (obj: {_id : string}) => {
            dispatch(deleteMessage(obj));
        },
        updateMessage: (obj: {text: string, _id: string}) => {
            dispatch(updateMessage(obj));
        },
    };
};
