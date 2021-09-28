
// Core
import styled from 'styled-components';
// img
import weatherIconSunny from '../../../assets/images/weather-icon-sunny.png';
import weatherIconRainy from '../../../assets/images/weather-icon-rainy.png';
import weatherIconCloudy from '../../../assets/images/weather-icon-cloudy.png';


export const Forcast = styled.div`
    display: flex;
    margin-bottom: 40px;

`;


// export const Day = styled.div`
//     position: relative;
//     width: 130px;
//     height: 204px;
//     background-color: #C486BB;
//     color: #fff;
//     padding-top: 35px;
//     text-align: center;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     &:before {
//         position: absolute;
//         top: 86px;
//         content: '';
//         display: block;
//         width: 62px;
//         height: 37px;
//         background-image: url(${(props) =>  props.title === 'sunny' ? weatherIconSunny : props.title === 'cloudy' ? weatherIconRainy : weatherIconCloudy   });
//         background-size: contain;
//         background-repeat: no-repeat;
//     }
//     &:hover {
//         cursor: pointer;
//         background-color: #966590;
//     }
// `;

export const P = styled.p`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 90px;
`;

export const Span = styled.span`
    ::after {
    margin-left: 5px;
    transform: translateY(-15px);
    content: '';
    display: inline-block;
    width: 5px;
    height: 6px;
    border: solid 1px #fff;
    border-radius: 50%;
    }
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 30px;
`;

