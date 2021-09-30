/* eslint-disable no-nested-ternary */

// Core
import React, { FC } from 'react';
import moment from 'moment';
import weatherIconSunny from '../../../assets/images/weather-icon-sunny.png';
import weatherIconRainy from '../../../assets/images/weather-icon-rainy.png';
import weatherIconCloudy from '../../../assets/images/weather-icon-cloudy.png';

// Types
import { Day as IDay } from '../../../bus/days/types';

// Styles
import {  P, Span } from './style';
import styled from 'styled-components';

export const Day = styled.div`
    position: relative;
    width: 130px;
    height: 204px;
    background-color: #C486BB;
    color: #fff;
    padding-top: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:before {
        position: absolute;
        top: 86px;
        content: '';
        display: block;
        width: 62px;
        height: 37px;
        background-image: url(${(props) =>  props.title === 'sunny' ? weatherIconSunny : props.title === 'cloudy' ? weatherIconCloudy : weatherIconRainy   });
        background-size: contain;
        background-repeat: no-repeat;
    }
    &:hover {
        cursor: pointer;
        background-color: #966590;
    }
`;

type PropTypes = IDay

export const Forecast: FC<PropTypes> = (props) => {
    return (
        <Day title = { props.type }>
            <P>{moment(props.day).format('dddd')}</P>
            <Span>{props.temperature}</Span>
        </Day>
    );
};
