// Core
import React, { FC } from 'react';

// Components
import { Heade } from '../../components/Head';
// import { Filt } from '../../components/Filter';
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
// import { CustomButton, CustomChekbox, CustomInput, CustomLabel, P, Filter } from '../../components/Filter/style';

const Main: FC = () => {
    const { actions: {
        selectDay,
        selectMinTemperature,
        selectMaxTemperature,
        selectTypeWeather,
    }, filteredDays,
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
