// Core
import { useDispatch } from 'react-redux';

// Actions
import {  sendMessages } from './actions';

export const useMessage = () => {
    const dispatch = useDispatch();

    return {
        createMessages: (obj: {text: string, username: string}) => {
            console.log(obj.text);
            dispatch(sendMessages(obj));
        },

    };
};
