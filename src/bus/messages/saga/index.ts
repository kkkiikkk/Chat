// Core
import { useDispatch } from 'react-redux';
import {  sendMessages } from './actions';

export const useMessage = () => {
    const dispatch = useDispatch();

    return {
        createMessages: (obj: {text: string, username: string}) => void dispatch(sendMessages(obj)),
    };
};
