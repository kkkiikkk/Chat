/* eslint-disable react-hooks/rules-of-hooks */
// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Redux
import { getMessages } from './saga/actions';
import { useTogglersRedux } from '../client/togglers';

export const useUsers = () => {
    const dispatch = useDispatch();
    const { togglersRedux } = useTogglersRedux();

    useEffect(() => {
        dispatch(getMessages());
        setInterval(() => {
            if (togglersRedux.isLoggedIn) {
                dispatch(getMessages());
            }
        }
        , 2000);
        if (!togglersRedux.isLoggedIn) {
            clearInterval();
        }
    }, []);
    const { userSlice } = useSelector((state) => state);


    return {
        users: userSlice,
    };
};
