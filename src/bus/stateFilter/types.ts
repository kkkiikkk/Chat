// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
import { DayType } from '../days/types';

// State
export type StateFilterState = {
    selectedDay: string | null
    minTemperature: number | null
    maxTemperature: number | null
    weatherFilters: {
        type: DayType | null
    }
}

// Contracts
export type SelectDayContract = CaseReducer<StateFilterState, PayloadAction<string>>
export type SelectTemperatureContract = CaseReducer<StateFilterState, PayloadAction<number>>
export type WeatherTypeContract = CaseReducer<StateFilterState, PayloadAction<DayType | null>>
export type SelectType = CaseReducer<StateFilterState, PayloadAction<number>> 