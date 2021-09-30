/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
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
    let filteredDays = days.filter((day) => {
        const { minTemperature, maxTemperature, weatherFilters } = stateFilter;
        if (minTemperature === null || maxTemperature === null) {
            return true;
        }
        const { type } = weatherFilters;
        const typeDay = type === day.type;
        const isMinTemperatureValid = day.temperature >= minTemperature;
        const isMaxTemperatureValid = day.temperature <= maxTemperature;
        if (type !== null) {
            if (minTemperature && maxTemperature) {
                return isMaxTemperatureValid && isMinTemperatureValid;
            } else if (minTemperature && !maxTemperature && !type) {
                return isMinTemperatureValid;
            } else if (maxTemperature && !minTemperature && !type) {
                return isMaxTemperatureValid;
            } else if (maxTemperature && minTemperature && type) {
                return isMaxTemperatureValid && isMinTemperatureValid && typeDay;
            } else if (type && !minTemperature && !maxTemperature) {
                return typeDay;
            } else if (type && minTemperature && !maxTemperature) {
                return isMinTemperatureValid && typeDay;
            } else if (type && maxTemperature && !minTemperature) {
                return  isMaxTemperatureValid && typeDay;
            }
        } else if (type === null) {
            if (minTemperature && maxTemperature) {
                return isMaxTemperatureValid && isMinTemperatureValid;
            } else if (minTemperature) {
                return isMinTemperatureValid;
            } else if (maxTemperature) {
                return isMaxTemperatureValid;
            }
        }


        return true;
    });
    const resetValue = (val1:  null, val2?:null, val3?: null):null => {
        // eslint-disable-next-line no-return-assign
        return (
            val1 = null,
            val2 = null,
            val3 = null
        );
    };
    const resetFiltered = () => days.filter(() => true);
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
        resetValue,
        resetFiltered,
        actions: {
            selectDay,
            selectMinTemperature,
            selectMaxTemperature,
            selectTypeWeather,
            togleTypeDay,
        },
    };
};
