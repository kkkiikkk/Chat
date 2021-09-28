// Core
import React, { FC } from 'react';

// Styles
import { CurenWeather, Span, Temperature, Spans } from './style';

// Hooks
import { useStateFilter } from '../../../bus/stateFilter';


export const CurrentWeather: FC = () => {
    const { findedDay } = useStateFilter();
    const currJSX =  (
        <>
            <Temperature>{findedDay?.temperature}</Temperature>
            <p>
                <Spans>% {findedDay?.rain_probability}</Spans>
                <Span>% {findedDay?.humidity}</Span>
            </p>
        </>
    );

    return (
        <CurenWeather>
            {currJSX}
        </CurenWeather>
    );
};
