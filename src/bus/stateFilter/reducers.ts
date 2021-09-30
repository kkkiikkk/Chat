// Types
import * as types from './types';

export const selectDay: types.SelectDayContract = (state, action) => {
    state.selectedDay = action.payload;
};

export const selectMinTemperature:types.SelectTemperatureContract = (state, action) => {
    state.minTemperature = action.payload;
};


export const selectMaxTemperature: types.SelectTemperatureContract = (state, action) => {
    state.maxTemperature = action.payload;
};

export const typeWeather: types.WeatherTypeContract = (state, action) => {
    state.weatherFilters.type = action.payload;
};

export const selectTypeWeather: types.SelectType = (state, action) => {
    if (action.payload === 'cloudy') {
        state.weatherFilters.type = 'cloudy';
    } else if (action.payload ===  'sunny') {
        state.weatherFilters.type = 'sunny';
    } else if (action.payload === 'reset') {
        state.weatherFilters.type = null;
    }
};

export const resetTemperatureMin: types.resetTemperature = (state, action) => {
    if (action.payload === 'min') {
        state.minTemperature = null;
    }
};

export const resetTemperatureMax: types.resetTemperature = (state, action) => {
    if (action.payload === 'max') {
        state.maxTemperature = null;
    }
};

