// Core
import React, { FC } from 'react';
import moment from 'moment';

// Styles
import { Header, Icon, CurentDate, P, Span } from './style';

// Hooks
import { useStateFilter } from '../../../bus/stateFilter';


export const Heade:FC = () => {
    const { findedDay } = useStateFilter();

    return (
        <Header>
            <Icon title = { findedDay?.type }/>
            <CurentDate>
                <P>{moment(findedDay?.day).format('dddd')}</P>
                <Span>{moment(findedDay?.day).format('MMMM, dddd')}</Span>
            </CurentDate>
        </Header>
    );
};
