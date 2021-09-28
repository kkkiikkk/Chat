// COre
import { createGlobalStyle } from 'styled-components';

// Image
import bg from '../../../assets/images/bg.png';

export const Global = createGlobalStyle`
    body{
        background-image: url(${bg});
        background-size: auto;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;
