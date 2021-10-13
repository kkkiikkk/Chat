// Core
import styled from 'styled-components';


export const Container = styled.div`
    width: 500px;
    margin: 0 auto;
    margin-top:40px;
`;

export const ContainerKey = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
`;

export const KeyButton = styled.button<{width: number}>`
    display: grid;
    place-items: center;
    border-radius: 4px;
    padding: 3px;
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: ${(props) => props.width + 'px'};
    cursor: pointer;
    &:active{
        background-color: #03e9f4;
    }
`;
