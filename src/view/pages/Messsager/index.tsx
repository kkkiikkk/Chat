
// Core
import React, { FC, useState, useRef, useEffect } from 'react';
import { useSelector } from '../../../tools/hooks';
import { useAuth } from '../../../bus/profile/saga';
import { useUsers } from '../../../bus/messages';
import { useFilterStyle } from '../../../tools/hooks/useFilterStyle';
// Components
import { ErrorBoundary } from '../../components';
import {  Typography } from '@mui/material';
import  moment  from 'moment';
// Styles
import { GlobalStylesComponents } from '../Registration/GlobalStyles';
import { CustomButtonOut } from '../Registration/styles';
import { NavLink } from 'react-router-dom';
import { useUserName } from '../../../bus/profile';
import { useMessage } from '../../../bus/messages/saga';
import { Message, Chat, MessagesContainer, CustomInput, Footer, Send } from './styles';
import { KeyBoard } from '../../components/Keyboard';

const initial = {
    username: '',
    text:     '',
};

const Messasger: FC = () => {
    const { stateUserSlice } = useSelector((state) => state);
    const { logOutUser } = useAuth();
    const { deleteUserName } = useUserName();
    const { users } = useUsers();
    const [ message, setMessage ] = useState<string>(initial.text);
    const { createMessages } = useMessage();
    const { clickFalse, clickTrue, isClicked } = useFilterStyle();
    const messageEl = useRef<HTMLHeadingElement | null>(null);
    useEffect(() => {
        messageEl.current?.addEventListener('DOMNodeInserted', (event:any) => {
            event.currentTarget.scroll({ top: event.currentTarget.scrollHeight, behavior: 'smooth' });
        }, false);
    }, []);
    const p = users.map(({ text, _id, username, createdAt, updatedAt }) => {
        return (

            <Message
                key = { _id }
                userMessage = { stateUserSlice.username === username }>
                <p>{username}</p>
                <p>{text}</p>
                <p>{moment(createdAt).format('LT')}</p>
                <p>{createdAt === updatedAt ? 'Неисправлено' : 'Исправлено' }</p>
            </Message>
        );
    }).reverse();
    initial.username = stateUserSlice.username;

    return (
        <>
            <GlobalStylesComponents />
            <CustomButtonOut
                type = 'submit'
                onClick = { () => {
                    logOutUser();
                    deleteUserName();
                } }>
                <NavLink
                    to = '/login'>
                    Log Out
                </NavLink>
            </CustomButtonOut>
            <Typography sx = {{ fontSize: '40px', margin: '0 auto' }}>Helo User: {stateUserSlice.username}</Typography>
            <Chat>
                <MessagesContainer ref = { messageEl }>
                    {p}
                </MessagesContainer>
                <Footer>
                    <CustomInput
                        type = 'text'
                        value = { message }
                        onChange = { (event) => {
                            setMessage(event.target.value);
                            clickTrue();
                        }
                        }>
                    </CustomInput>
                    <Send
                        disabled = { isClicked }
                        onClick = { () =>  {
                            if (!isClicked) {
                                createMessages({ text: message, username: stateUserSlice.username });
                                setMessage('');
                                clickFalse();
                            }
                        } }>SEND
                    </Send>
                </Footer>

            </Chat>
            <KeyBoard />
        </>

    );
};

export default () => (
    <ErrorBoundary>
        <Messasger />
    </ErrorBoundary>
);

