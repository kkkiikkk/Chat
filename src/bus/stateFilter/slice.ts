/* eslint-disable react-hooks/rules-of-hooks */
// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { StateFilterState } from './types';

// Reducers
import {  selectDay, selectMinTemperature, selectMaxTemperature, typeWeather } from './reducers';


const initialState: StateFilterState = {
    selectedDay:    null,
    minTemperature: null,
    maxTemperature: null,
    weatherFilters: {
        type: null,
    },
};

export const stateFilterSlice = createSlice({
    name:     'stateFilter',
    initialState,
    reducers: {
        selectDay,
        selectMinTemperature,
        selectMaxTemperature,
        typeWeather,
    },
});

export const stateFilterActions = stateFilterSlice.actions;
export default stateFilterSlice.reducer;
