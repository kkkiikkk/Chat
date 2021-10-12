// Core
import { useDispatch } from 'react-redux';
import { refresh, register } from './action';
import { useSelector } from '../../../tools/hooks';

export const useAuth = () => {
    const dispatch = useDispatch();
    const { stateUserSlice } = useSelector((state) => state);


    return {
        createUser: () => void dispatch(register(stateUserSlice.username)),
    };
};
