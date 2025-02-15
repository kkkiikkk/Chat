// Core
import { useDispatch } from 'react-redux';
import localStore from 'store';

// Action
import {  register } from './action';

// Hooks
import { useTogglersRedux } from '../../client/togglers';

export const useAuth = () => {
    const dispatch = useDispatch();

    const { resetTogglersToInitial } = useTogglersRedux();

    return {
        createUserProfile: (inputName: string) => void dispatch(register(inputName)),
        logOutUser:        () => {
            localStore.remove('userId');
            resetTogglersToInitial();
        },
    };
};
