/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import weatherIconSunny from '../../../assets/images/weather-icon-sunny.png';
import weatherIconRainy from '../../../assets/images/weather-icon-rainy.png';
import weatherIconCloudy from '../../../assets/images/weather-icon-cloudy.png';

export const Header = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 83px;
`;


export const Icon = styled.div`
    width: 88px;
    background-image: url(${(props) =>  props.title === 'sunny' ? weatherIconSunny : props.title === 'cloudy' ? weatherIconCloudy : weatherIconRainy   });
    margin-right: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    height: 88px;
`;

export const CurentDate = styled.div`
    display: flex;
    flex-direction: column;
`;

export const P = styled.p`
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 28px;
        color: #fff;
        display: inline-block;
        margin-top: 15px;
        margin-bottom: 10px;
`;

export const Span = styled.span`
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 14px;
        color: #fff;
        text-transform: uppercase;
`;
