// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Redux
import { fetchDaysAction } from './saga/actions';


export const useDays = () => {
    const dispatch = useDispatch();
    const days = useSelector(({ days }) => days);


    useEffect(() => {
        dispatch(fetchDaysAction());
    }, []);

    return {
        days,
    };
};
