/* eslint-disable no-undef */
// Core
import React, { FC, useState, useRef, useEffect } from 'react';
import { useSelector } from '../../../tools/hooks';
import { useAuth } from '../../../bus/profile/saga';
import { useUsers } from '../../../bus/messages';
// Components
import { ErrorBoundary } from '../../components';
import {  Typography } from '@mui/material';
import  moment  from 'moment';
// Styles
import { GlobalStylesComponents } from '../Registration/GlobalStyles';
import { CustomButton } from '../Registration/styles';
import { NavLink } from 'react-router-dom';
import { useUserName } from '../../../bus/profile';
import { useMessage } from '../../../bus/messages/saga';
import { Message, Chat, MessagesContainer, CustomInput, Footer, Send } from './styles';

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
            <CustomButton
                type = 'submit'
                onClick = { () => {
                    logOutUser();
                    deleteUserName();
                } }>
                <NavLink
                    to = '/login'>
                    Log Out
                </NavLink>
            </CustomButton>
            <Typography sx = {{ fontSize: '40px', margin: '0 auto' }}>Helo User: {stateUserSlice.username}</Typography>
            <Chat>
                <MessagesContainer ref = { messageEl }>
                    {p}
                </MessagesContainer>
                <Footer>
                    <CustomInput
                        type = 'text'
                        value = { message }
                        onChange = { (event) =>     void setMessage(event.target.value) }>
                    </CustomInput>
                    <Send onClick = { () =>  {
                        createMessages({ text: message, username: stateUserSlice.username });
                        setMessage('');
                    } }>SEND
                    </Send>
                </Footer>

            </Chat>
        </>

    );
};

export default () => (
    <ErrorBoundary>
        <Messasger />
    </ErrorBoundary>
);

