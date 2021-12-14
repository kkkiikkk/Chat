// Core
import styled, { css } from 'styled-components';


export const Container = styled.div<{visible: boolean}>`
    width: 500px;
    margin: 0 auto;
    margin-top:40px;
    display: ${(props) => props.visible ? 'block' : 'none'};
    @media screen and (max-width: 500px){
        width: auto
    }
`;

export const ContainerKey = styled.div<{a: number, b: number}>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.a  }, ${(props) => props.b + 'fr'});
`;

export const KeyButton = styled.button<{visible: boolean}>`
    display: grid;
    place-items: center;
    border-radius: 4px;
    padding: 3px;
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
    cursor: pointer;
    &:active{
        background-color: #baa2cb;
    }
    ${(props) => props.visible && css`
        background-color:#baa2cb;
    `};
`;


export const SpaceButton = styled.button<{visible: boolean}>`
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
    ${(props) => props.visible && css`
        background-color: #03e9f4;
    `};
    @media screen and (max-width: 600px){
        width: 120px;
    }
`;
