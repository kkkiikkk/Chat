// Core
<<<<<<< HEAD
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
=======
import React, { FC, useState } from 'react';

// Components
import { ErrorBoundary } from '../../components';

// Redux
import { useCounter } from '../../../bus/counter';
import { useMessages } from '../../../bus/messages';

// Elements
import { Button } from '../../elements';

// Styles
import { Container } from './styles';

const Main: FC = () => {
    const [ amount, setAmount ] = useState<number>(0);
    const { counterState, increment, decrement, incrementByAmount } = useCounter();
    const { messages, loading } = useMessages();

    console.log('🚀', messages);
    console.log('🚀', loading);

    return (
        <Container>
            counterState: {counterState}
            <Button onClick = { () => void increment() }>+</Button>
            <Button onClick = { () => void decrement() }>-</Button>
            <input
                value = { amount }
                onChange = { (event) => void setAmount(parseInt(event.target.value, 10)) }
            />
            <Button onClick = { () => void incrementByAmount(amount) }>incrementByAmount</Button>
        </Container>
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
