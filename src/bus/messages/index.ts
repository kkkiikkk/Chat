// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Redux
import { getMessages } from './saga/actions';

export const useUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMessages());
        setInterval(() => void dispatch(getMessages()), 5000);
    }, []);

    const { userSlice } = useSelector((state) => state);


    return {
        users: userSlice,
    };
};
