// Core
import React, { FC } from 'react';

// Hooks
import { useTextMessage } from '../../../bus/client/textMessage';
import { useFilterStyle } from '../../../tools/hooks/useFilterStyle';

// Styles
import { Container, ContainerKey, KeyButton, SpaceButton } from './styles';

// Const
import { keyBoardButton } from './keyBoard';

 type IProps = {
     onClick:Function,
     createMessage: Function,
     clearMessage: Function,
     name: string,
     text: string,
     visible: boolean
     delete: Function
 }

export const KeyBoard:FC<IProps> = (props: IProps) => {
    const { textMessages } = useTextMessage();

    const { clickFalse, clickTrue, isClicked } = useFilterStyle();

    const clickShift = (botton: string) => {
        const a = isClicked ? botton.toLowerCase() : botton.toUpperCase();

        return a;
    };

    return (
        <Container
            visible = { props.visible }
            onClick = { () => props.onClick() }>
            <ContainerKey
                a = { 10 }
                b = { 1 } >
                {keyBoardButton.number.map((el: string) => {
                    return (
                        <KeyButton onClick = { () => textMessages(el) }>{el}</KeyButton>
                    );
                })}
            </ContainerKey>
            <ContainerKey
                a = { 10 }
                b = { 1 }>
                {keyBoardButton.str1.map((el: string) => {
                    return (
                        <KeyButton onClick = { () => textMessages(clickShift(el)) } >{clickShift(el)}</KeyButton>
                    );
                })}
            </ContainerKey>
            <ContainerKey
                a = { 9 }
                b = { 2 }>
                {keyBoardButton.str2.map((el: string) => {
                    return (
                        <KeyButton onClick = { () => textMessages(clickShift(el)) } >{clickShift(el)}</KeyButton>
                    );
                })}
            </ContainerKey>
            <ContainerKey
                a = { 9 }
                b = { 2 }>
                <KeyButton onClick = { () => {
                    if (isClicked) {
                        clickTrue();
                    } else {
                        clickFalse();
                    }
                } }>SHIFT
                </KeyButton>
                {keyBoardButton.str3.map((el: string) => {
                    return (
                        <KeyButton onClick = { () => textMessages(clickShift(el)) } >{clickShift(el)}</KeyButton>
                    );
                })}
                <KeyButton onClick = { () => props.delete() }>BACKSPACE</KeyButton>
            </ContainerKey>
            <ContainerKey
                a = { 5 }
                b = { 1 }>
                <KeyButton onClick = { () => textMessages(',') }>,</KeyButton>
                <KeyButton >En</KeyButton>
                <SpaceButton onClick = { () => textMessages(' ') }>Space</SpaceButton>
                <KeyButton onClick = { () => textMessages('.') }>.</KeyButton>
                <KeyButton onClick = {  () => {
                    if (props.text.length !== 0) {
                        props.createMessage({ text: props.text, username: props.name });
                        props.clearMessage();
                    }
                }
                }>Enter
                </KeyButton>
            </ContainerKey>
        </Container>
    );
};
