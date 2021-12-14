
// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Actions
import { getMessages } from './saga/actions';
import { MessageAction } from './slices';

let intervalId: ReturnType<typeof setInterval> | void = void 0;

export const useUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (intervalId) {
            return void 0;
        }
        dispatch(getMessages());

        intervalId = setInterval(() => {
            dispatch(getMessages());
        }
        , 4000);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    const { userSlice } = useSelector((state) => state);

    const deleteMs = (val: string) => void dispatch(
        MessageAction.deleteMesage(val),
    );

    return {
        users: userSlice,
        deleteMs,
    };
};
