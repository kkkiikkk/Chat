
// Core
import React, { FC, useEffect,  useState, MutableRefObject } from 'react';

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
     name: string | null,
     text: string,
     visible: boolean
     delete: Function
     code: number[],
     codeButton: Function,
     deleteButtonCode: Function,
     focusEL:   MutableRefObject<HTMLInputElement | null>
     clickIsDisable: Function
     update: Function
     clickReset: Function
     reset: boolean
     id: string
 }


export const KeyBoard:FC<IProps> = (props: IProps) => {
    const [ en, setEn ] = useState(true);


    useEffect(() => {
        document.addEventListener('keydown', (event) =>  {
            if (event.keyCode === 8) {
                props.delete();
            }
            props.focusEL?.current?.focus();
            props.codeButton(event.keyCode);
        });
        document.addEventListener('keyup', (event) => {
            props.focusEL?.current?.focus();
            props.deleteButtonCode(event.keyCode);
        });

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
                {keyBoardButton.firstLine.map(({ keyValue, keyCode }, id: number) => {
                    return (
                        <KeyButton
                            key = { String(id) }
                            visible = {  props.code.includes(keyCode)  }
                            onClick = { () =>  textMessages(keyValue) }>
                            {clickShift(keyValue)}
                        </KeyButton>
                    );
                })}
            </ContainerKey>
            <ContainerKey
                a = { en ?  10 : 11 }
                b = { 1 }>
                {keyBoardButton.sescondLine[ en ? 1 : 0 ].map(([ keyValue, keyCode ], id: number) => {
                    return (
                        <KeyButton
                            key = { String(id) }
                            visible = {  props.code.includes(keyCode)  }
                            onClick = { () =>  textMessages(clickShift(keyValue)) }>
                            {clickShift(keyValue)}
                        </KeyButton>
                    );
                })}
            </ContainerKey>
            <ContainerKey
                a = { en ?  9 : 11 }
                b = { 2 }>
                {keyBoardButton.tescondLine[ en ? 1 : 0 ].map(([ keyValue, keyCode ], id: number) => {
                    return (
                        <KeyButton
                            key = { String(id) }
                            visible = {  props.code.includes(keyCode)  }
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
                    visible = { props.code.includes(16) }
                    onClick = { () => {
                        if (isClicked) {
                            clickTrue();
                        } else {
                            clickFalse();
                        }
                    } }>SHIFT
                </KeyButton>
                {keyBoardButton.tescosndLine[ en ? 1 : 0 ].map(([ keyValue, keyCode ], id: number) => {
                    return (
                        <KeyButton
                            key = { String(id) }
                            visible = {  props.code.includes(keyCode)  }
                            onClick = { () =>  textMessages(clickShift(keyValue)) }>
                            {clickShift(keyValue)}
                        </KeyButton>
                    );
                })}
                <KeyButton
                    visible = { props.code.includes(8) }
                    onClick = { () => props.delete() }>BACKSPACE
                </KeyButton>
            </ContainerKey>
            <ContainerKey
                a = { 5 }
                b = { 1 }>
                <KeyButton
                    visible = { props.code.includes(188) }
                    onClick = { () => textMessages(',') }>,
                </KeyButton>
                <KeyButton
                    visible = { props.code.includes(0) }
                    onClick = { () => en ? setEn(false) : setEn(true) }>En
                </KeyButton>
                <SpaceButton
                    visible = { props.code.includes(32) }
                    onClick = { () => textMessages(' ') }>Space
                </SpaceButton>
                <KeyButton
                    visible = { props.code.includes(190) }
                    onClick = { () => textMessages('.') }>.
                </KeyButton>
                <KeyButton
                    visible = { props.code.includes(13) }
                    onClick = {  () => {
                        if (props.text.length !== 0 && props.name !== null) {
                            props.clearMessage();
                            props.reset ? props.createMessage({ text: props.text, username: props.name })
                                : props.update({ text: props.text, _id: props.id });
                            props.clickReset();
                            props.clearMessage();
                            props.clickIsDisable();
                        }
                    }
                    }>Enter
                </KeyButton>
            </ContainerKey>
        </Container>
    );
};

