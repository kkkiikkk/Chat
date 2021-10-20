
// Core
import React, { FC, useEffect,  useState } from 'react';

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
     code: string[],
     codeButton: Function,
     deleteButtonCode: Function,
 }


export const KeyBoard:FC<IProps> = (props: IProps) => {
    const [ en, setEn ] = useState(true);


    useEffect(() => {
        document.addEventListener('keydown', (event) =>  props.codeButton(event.key));
        document.addEventListener('keyup', (event) => props.deleteButtonCode(event.key));

        return () => {
            document.addEventListener('keydown', () =>  void 0);
            document.addEventListener('keyup', () => void 0);
        };
    }, []);


    const { textMessages } = useTextMessage();

    const { clickFalse, clickTrue, isClicked } = useFilterStyle();

    const clickShift = (botton: string) => {
        const a =  isClicked
            ? botton.toLowerCase() : botton.toUpperCase();


        return a;
    };

    return (
        <Container
            visible = { props.visible }
            onClick = { () => props.onClick() }>
            <ContainerKey
                a = { 10 }
                b = { 1 } >
                {keyBoardButton.firstLine.map(({ keyRuValue, keyEnValue }, id: number) => {
                    return (
                        <KeyButton
                            key = { String(id) }
                            visible = {  props.code.includes(en && keyEnValue ? keyEnValue : keyRuValue)  }
                            onClick = { () =>  textMessages(en && keyEnValue ? keyEnValue : keyRuValue) }>
                            {clickShift(en && keyEnValue ?  keyEnValue : keyRuValue)}
                        </KeyButton>
                    );
                })}
            </ContainerKey>
            <ContainerKey
                a = { en ?  10 : 11 }
                b = { 1 }>
                {keyBoardButton.sescondLine[ en ? 1 : 0 ].map((keyValue, id: number) => {
                    return (
                        <KeyButton
                            key = { String(id) }
                            visible = {  props.code.includes(keyValue)  }
                            onClick = { () =>  textMessages(clickShift(keyValue)) }>
                            {clickShift(keyValue)}
                        </KeyButton>
                    );
                })}
            </ContainerKey>
            <ContainerKey
                a = { en ?  9 : 11 }
                b = { 2 }>
                {keyBoardButton.tescondLine[ en ? 1 : 0 ].map((keyValue, id: number) => {
                    return (
                        <KeyButton
                            key = { String(id) }
                            visible = {  props.code.includes(keyValue)  }
                            onClick = { () =>  textMessages(clickShift(keyValue)) }>
                            {clickShift(keyValue)}
                        </KeyButton>
                    );
                })}
            </ContainerKey>
            <ContainerKey
                a = { en ?  9 : 11 }
                b = { 2 }>
                <KeyButton
                    visible = { props.code.includes('Shift') }
                    onClick = { () => {
                        if (isClicked) {
                            clickTrue();
                        } else {
                            clickFalse();
                        }
                    } }>SHIFT
                </KeyButton>
                {keyBoardButton.tescosndLine[ en ? 1 : 0 ].map((keyValue, id: number) => {
                    return (
                        <KeyButton
                            key = { String(id) }
                            visible = {  props.code.includes(keyValue)  }
                            onClick = { () =>  textMessages(clickShift(keyValue)) }>
                            {clickShift(keyValue)}
                        </KeyButton>
                    );
                })}
                <KeyButton
                    visible = { props.code.includes('Backspace') }
                    onClick = { () => props.delete() }>BACKSPACE
                </KeyButton>
            </ContainerKey>
            <ContainerKey
                a = { 5 }
                b = { 1 }>
                <KeyButton
                    visible = { props.code.includes(',') }
                    onClick = { () => textMessages(',') }>,
                </KeyButton>
                <KeyButton
                    visible = { props.code.includes('') }
                    onClick = { () => en ? setEn(false) : setEn(true) }>En
                </KeyButton>
                <SpaceButton
                    visible = { props.code.includes(' ') }
                    onClick = { () => textMessages(' ') }>Space
                </SpaceButton>
                <KeyButton
                    visible = { props.code.includes('.') }
                    onClick = { () => textMessages('.') }>.
                </KeyButton>
                <KeyButton
                    visible = { props.code.includes('Enter') }
                    onClick = {  () => {
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

