// Core
import React, { FC,  useRef,  useLayoutEffect } from 'react';
import {  Typography } from '@mui/material';
import  moment  from 'moment';
import { NavLink } from 'react-router-dom';

// Hooks
import { useAuth } from '../../../bus/profile/saga';
import { useUsers } from '../../../bus/messages';
import { useFilterStyle } from '../../../tools/hooks/useFilterStyle';
import { useUserProfile } from '../../../bus/profile';
import { useMessage } from '../../../bus/messages/saga';
import { useTextMessage } from '../../../bus/client/textMessage';

// Components
import { ErrorBoundary } from '../../components';
import { KeyBoard } from '../../components/Keyboard';

// Styles
import { GlobalStylesComponents } from '../Registration/GlobalStyles';
import { CustomButtonOut, CustomSection } from '../Registration/styles';
import { Message, Chat, MessagesContainer, CustomInput, Footer, Send, StyleP, ButtonKeyBoard } from './styles';


const Messasger: FC = () => {
    const { text, textMessages, clearMessages, deleteElements } = useTextMessage();

    const { logOutUser } = useAuth();

    const { deleteUserName, userName } = useUserProfile();

    const { users } = useUsers();

    const { createMessages } = useMessage();

    const { clickFalse, clickTrue, isClicked, clickVisibleFalse, clickVisibleTrue, visible  } = useFilterStyle();

    const messageEl = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        if (messageEl.current) {
            messageEl.current?.scroll({
                top: messageEl.current.scrollHeight,
            });
        }
    }, [ users[ 0 ]?._id ]);

    const p = users.map(({ text, _id, username, createdAt, updatedAt }) => {
        return (

            <Message
                key = { _id }
                userMessage = { userName === username }>
                <StyleP>{username}</StyleP>
                <p>{text}</p>
                <StyleP>{moment(createdAt).format('LT')}</StyleP>
                <StyleP>{createdAt === updatedAt ? '' : 'Исправлено' }</StyleP>
            </Message>
        );
    }).reverse();

    return (
        <CustomSection>
            <GlobalStylesComponents />
            <NavLink
                to = '/login'>
                <CustomButtonOut
                    onClick = { () => {
                        logOutUser();
                        deleteUserName();
                    } }>
                    Log Out
                </CustomButtonOut>
            </NavLink>
            <Typography sx = {{ fontSize: '40px', textAlign: 'center' }}>Helo User: {userName}</Typography>
            <Chat>
                <MessagesContainer ref = { messageEl }>
                    {p}
                </MessagesContainer>
                <Footer>
                    <CustomInput
                        type = 'text'
                        value = { text }
                        onChange = { (event) => {
                            if (text) {
                                clickTrue();
                            }
                            if (event.target.value.includes(text)) {
                                textMessages(event.target.value.slice(event.target.value.length - 1));
                            }
                        }
                        }>
                    </CustomInput>
                    <Send
                        disabled = { isClicked }
                        onClick = { () =>  {
                            if (!isClicked) {
                                createMessages({ text: text, username: userName });
                                clickFalse();
                                clearMessages();
                            }
                        } }>SEND
                    </Send>
                </Footer>

            </Chat>
            <ButtonKeyBoard
                onClick = { () => {
                    if (visible) {
                        clickVisibleTrue();
                    } else {
                        clickVisibleFalse();
                    }
                } }>{visible ?  'Close ' : 'Open KeyBoard' }
            </ButtonKeyBoard>
            <KeyBoard
                clearMessage = { clearMessages }
                createMessage = {  createMessages }
                delete = { deleteElements }
                name = { userName }
                text = { text }
                visible = { visible }
                onClick = { () => clickTrue() }>
            </KeyBoard>
        </CustomSection>

    );
};

export default () => (
    <ErrorBoundary>
        <Messasger />
    </ErrorBoundary>
);

