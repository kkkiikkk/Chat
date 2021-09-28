// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// Redux
import { useTogglersRedux } from '../client/togglers';
import { useStateFilter } from '../stateFilter';

// Api
import { fetchDays } from './api';

// Actions
import { daysActions } from './slice';

export const useDays = () => {
    const dispatch = useDispatch();
    const days = useSelector(({ days }) => days);
    const { setTogglerAction, togglersRedux: { isDaysFetching }} = useTogglersRedux();
    const { actions: { selectDay }} = useStateFilter();

    const fetchDaysHandler = async () => {
        setTogglerAction({
            type:  'isDaysFetching',
            value: true,
        });
        const result = await fetchDays();

        if (result !== null) {
            dispatch(daysActions.setDays(result));
            selectDay(result[ 0 ].id);
        }

        setTogglerAction({
            type:  'isDaysFetching',
            value: false,
        });
    };


    useEffect(() => {
        fetchDaysHandler();
    }, []);

    return {
        days,
        isDaysFetching,
    };
};
