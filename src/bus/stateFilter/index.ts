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
    const typeDay = () => stateFilter.weatherFilters.type;
    const filteredDays = days.filter((day) => {
        const { minTemperature, maxTemperature, weatherFilters } = stateFilter;
        const { type } = weatherFilters;
        if (minTemperature === null || maxTemperature === null || type === null) {
            return true;
        }
        const validType = type === 'cloudy' || type === 'sunny';
        const isTypeWeather = type === day.type;
        const isMinTemperatureValid = day.temperature >= minTemperature;
        const isMaxTemperatureValid = day.temperature <= maxTemperature;
        if (minTemperature && maxTemperature) {
            return isMaxTemperatureValid && isMinTemperatureValid;
        } else if (minTemperature && !validType && !maxTemperature) {
            return isMinTemperatureValid;
        } else if (maxTemperature && !validType && !minTemperature) {
            return isMaxTemperatureValid;
        } else if (validType && !minTemperature && !maxTemperature) {
            return isTypeWeather;
        } else if (validType && minTemperature && maxTemperature) {
            return isMaxTemperatureValid && isMinTemperatureValid && isTypeWeather;
        } else if (validType && minTemperature && !maxTemperature) {
            return isMinTemperatureValid && isTypeWeather;
        } else if (validType && maxTemperature && !minTemperature) {
            return isMaxTemperatureValid && isTypeWeather;
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

    const togleTypeDay = (value: number) => void dispatch(stateFilterActions.selectTypeWeather(value));
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
