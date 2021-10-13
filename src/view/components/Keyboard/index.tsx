// Core
import React, { FC } from 'react';

// Styles
import { Container, ContainerKey, KeyButton } from './styles';

export const KeyBoard:FC = () => {
    return (
        <Container>
            <ContainerKey>
                <KeyButton width = { 51 }>1</KeyButton>
                <KeyButton width = { 51 }>2</KeyButton>
                <KeyButton width = { 51 }>3</KeyButton>
                <KeyButton width = { 51 }>4</KeyButton>
                <KeyButton width = { 51 }>5</KeyButton>
                <KeyButton width = { 51 }>6</KeyButton>
                <KeyButton width = { 51 }>7</KeyButton>
                <KeyButton width = { 51 }>8</KeyButton>
                <KeyButton width = { 51 }>9</KeyButton>
                <KeyButton width = { 51 }>0</KeyButton>
            </ContainerKey>
            <ContainerKey>
                <KeyButton width = { 51 }>q</KeyButton>
                <KeyButton width = { 51 }>w</KeyButton>
                <KeyButton width = { 51 }>e</KeyButton>
                <KeyButton width = { 51 }>r</KeyButton>
                <KeyButton width = { 51 }>t</KeyButton>
                <KeyButton width = { 51 }>y</KeyButton>
                <KeyButton width = { 51 }>u</KeyButton>
                <KeyButton width = { 51 }>i</KeyButton>
                <KeyButton width = { 51 }>o</KeyButton>
                <KeyButton width = { 51 }>p</KeyButton>
            </ContainerKey>
            <ContainerKey>
                <KeyButton width = { 56.7 }>a</KeyButton>
                <KeyButton width = { 56.7 }>s</KeyButton>
                <KeyButton width = { 56.7 }>d</KeyButton>
                <KeyButton width = { 56.7 }>f</KeyButton>
                <KeyButton width = { 56.7 }>g</KeyButton>
                <KeyButton width = { 56.7 }>h</KeyButton>
                <KeyButton width = { 56.7 }>j</KeyButton>
                <KeyButton width = { 56.7 }>k</KeyButton>
                <KeyButton width = { 56.7 }>l</KeyButton>
            </ContainerKey>
            <ContainerKey>
                <KeyButton width = { 54.7 }>SHIFT</KeyButton>
                <KeyButton width = { 49 }>z</KeyButton>
                <KeyButton width = { 49 }>x</KeyButton>
                <KeyButton width = { 49 }>c</KeyButton>
                <KeyButton width = { 49 }>v</KeyButton>
                <KeyButton width = { 49 }>b</KeyButton>
                <KeyButton width = { 49 }>n</KeyButton>
                <KeyButton width = { 49 }>m</KeyButton>
                <KeyButton width = { 113 }>BACKSPACE</KeyButton>
            </ContainerKey>
            <ContainerKey>
                <KeyButton width = { 62 }>,</KeyButton>
                <KeyButton width = { 62 }>En</KeyButton>
                <KeyButton width = { 262 }>Space</KeyButton>
                <KeyButton width = { 62 }>.</KeyButton>
                <KeyButton width = { 62 }>Enter</KeyButton>
            </ContainerKey>
        </Container>
    );
};
