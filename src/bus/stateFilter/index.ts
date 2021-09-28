// Core
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../tools/hooks';

// Action
import { stateFilterActions } from './slice';

// Types
import { DayType } from '../days/types';

export const useStateFilter = ()=>{
    const dispatch = useDispatch();
    const { stateFilter, days } = useSelector((state) => state);

    const findedDay = days?.find((day) => day.id === stateFilter.selectedDay);
    const typeDay = () => stateFilter.weatherFilters.type
    const filteredDays = days.filter(({ temperature }) => {     
        const { minTemperature, maxTemperature } = stateFilter;

        if (minTemperature === null || maxTemperature === null) {
            return true;
        }

        const isMinTemperatureValid = temperature >= minTemperature;
        const isMaxTemperatureValid = temperature <= maxTemperature;
        if (minTemperature && maxTemperature) {
            return isMaxTemperatureValid && isMinTemperatureValid;
        } else if (minTemperature) {
            return isMinTemperatureValid;
        } else if (maxTemperature) {
            return isMaxTemperatureValid;
        }

        return false;
    });

    const selectMinTemperature = (temperature: number) => void dispatch(
        stateFilterActions.selectMinTemperature(temperature),
    );
    const selectMaxTemperature = (temperature: number) => void dispatch(
        stateFilterActions.selectMaxTemperature(temperature),
    );
    const selectTypeWeather = (dayType: DayType) => void dispatch(
        stateFilterActions.typeWeather(dayType),
    );

    const togleTypeDay = (num: number) => void dispatch(stateFilterActions.selectTypeWeather(num))
    const selectDay = (id: string) => void dispatch(stateFilterActions.selectDay(id));

    return {
        stateFilter,
        findedDay,
        filteredDays,
        typeDay,
        actions: {
            selectDay,
            selectMinTemperature,
            selectMaxTemperature,
            selectTypeWeather,
            togleTypeDay,
        },
    };
};
