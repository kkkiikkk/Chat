// Core
import React, { FC } from 'react';

// Components
import { Heade } from '../../components/Head';
import { Forecast } from '../../components/Forcast';
import { ErrorBoundary, CurrentWeather } from '../../components';

// Hooks
import { useStateFilter } from '../../../bus/stateFilter';

// Styles
import { Mains } from './style';
import { Global } from './GlobalStyle';
import { Forcast } from '../../components/Forcast/style';
import { Filt } from '../../components/Filter';
import { H1 } from '../../elements/TextError';


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

            {filteredDays.length !== 0 ? (
                <>
                    < Heade />
                    <CurrentWeather />
                    <Forcast>
                        {filteredDays.map((day) => {
                            return (
                                <div
                                    key = { day.id }
                                    onClick = { () => selectDay(day.id) }>
                                    <Forecast
                                        { ...day }
                                    />
                                </div>
                            );
                        })}
                    </Forcast>
                </>
            ) : <H1>По заданым критериям нет доступных дней</H1>
            }
        </Mains>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
