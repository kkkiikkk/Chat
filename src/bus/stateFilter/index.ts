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
import { useDays } from '../days';

export const useStateFilter = ()=>{
    const dispatch = useDispatch();
    useDays();
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

        if (minTemperature === 0 && maxTemperature === 0) {
            return false;
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
        } else if (minTemperature && maxTemperature) {
            return isMaxTemperatureValid && isMinTemperatureValid;
        }


        return true;
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

    const resetMax = (typeTemperature: string) => void dispatch(
        stateFilterActions.resetTemperatureMax(typeTemperature),
    );

    const resetMin = (typeTemperature: string) => void dispatch(
        stateFilterActions.resetTemperatureMin(typeTemperature),
    );

    const togleTypeDay = (value: string) => void dispatch(stateFilterActions.selectTypeWeather(value));

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
            resetMax,
            resetMin,
        },
    };
};
