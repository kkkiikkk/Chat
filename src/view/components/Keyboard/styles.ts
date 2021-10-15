// Core
import styled from 'styled-components';


export const Container = styled.div<{visible: boolean}>`
    width: 500px;
    margin: 0 auto;
    margin-top:40px;
    display: ${(props) => props.visible ? 'block' : 'none'};
`;

export const ContainerKey = styled.div<{a: number, b: number}>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.a  }, ${(props) => props.b + 'fr'});
`;

export const KeyButton = styled.button`
    display: grid;
    place-items: center;
    border-radius: 4px;
    padding: 3px;
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
    cursor: pointer;
    &:active{
        background-color: #03e9f4;
    }
`;


export const SpaceButton = styled.button`
display: grid;
    place-items: center;
    border-radius: 4px;
    padding: 3px;
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 262px;
    cursor: pointer;
    &:active{
        background-color: #03e9f4;
    }
`;
