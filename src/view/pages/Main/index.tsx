// Core
import React, { FC } from 'react';

// Components
import { Heade } from '../../components/Head';
import { Forecast } from '../../components/Forcast';
import { ErrorBoundary, CurrentWeather } from '../../components';

// Hooks
import { useDays } from '../../../bus/days';

import { useStateFilter } from '../../../bus/stateFilter';

// Styles
import { Mains } from './style';
import { Global } from './GlobalStyle';
import { Forcast } from '../../components/Forcast/style';
import { Filt } from '../../components/Filter';


const Main: FC = () => {
    const { actions: {
        selectDay,
        selectMinTemperature,
        selectMaxTemperature,
        togleTypeDay,
        resetMax,
        resetMin,
    }, filteredDays, typeDay,
    } = useStateFilter();

    const {  isDaysFetching } = useDays();

    if (isDaysFetching) {
        return <div>Loading...</div>;
    }

    return (
        <Mains>
            <Global />
            <Filt
                handleSubmit = { selectMinTemperature }
                handleSubmitMax = { selectMaxTemperature }
                resetMax = { resetMax }
                resetMin = { resetMin }
                togleDay = { togleTypeDay }
                typeDay = { typeDay }
            />
            <Heade />
            <CurrentWeather />
            <Forcast>
                {
                    filteredDays.map((day) => {
                        return (
                            <div
                                key = { day.id }
                                onClick = { () => selectDay(day.id) }>
                                <Forecast
                                    { ...day }
                                />
                            </div>
                        );
                    })
                }
            </Forcast>
        </Mains>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
