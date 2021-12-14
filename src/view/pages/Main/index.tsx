/* eslint-disable react/jsx-closing-tag-location */
// Core
import React, { FC,  useRef,  useLayoutEffect, useState } from 'react';
import {  Tooltip } from '@mui/material';
import  moment  from 'moment';
import { NavLink } from 'react-router-dom';

// Hooks
import { useAuth } from '../../../bus/profile/saga';
import { useUsers } from '../../../bus/messages';
import { useFilterStyle } from '../../../tools/hooks/useFilterStyle';
import { useUserProfile } from '../../../bus/profile';
import { useMessage } from '../../../bus/messages/saga';
import { useTextMessage } from '../../../bus/client/textMessage';
import { useButtonCode } from '../../../bus/client/keyBoard';

// Components
import { ErrorBoundary } from '../../components';
import { KeyBoard } from '../../components/Keyboard';
import {  SendSharp, LogoutSharp, AccountCircleSharp } from '@mui/icons-material';
import CancelIcon  from '@mui/icons-material/Cancel';


// Styles
import { GlobalStylesComponents } from '../Registration/GlobalStyles';
import { CustomButtonOut, CustomSection } from '../Registration/styles';
import { StyleS, Message, Chat, MessagesContainer, CustomInput, Footer, Send, StyleP, ButtonKeyBoard, DeleteButton, Cancel } from './styles';


const Messasger: FC = () => {
    const [ ids, setId ] = useState({
        _id:  '',
        text: '',
    });

    const { code, codeButton, deleteButtonCode } = useButtonCode();

    const { text, textMessages, clearMessages, deleteElements } = useTextMessage();

    const { logOutUser } = useAuth();

    const { deleteUserName, userName } = useUserProfile();

    const { users, deleteMs } = useUsers();

    const { createMessages, deleteMessage, updateMessage } = useMessage();

    const {  clickTrue,  clickVisibleFalse, clickVisibleTrue,
        visible, clickIsResetFalse,
        clickIsResetTrue,
        isReset, clickIsDisableFalse,  clickIsDisableTrue, isDisable    } = useFilterStyle();

    const messageEl = useRef<HTMLDivElement | null>(null);

    const inputEL = useRef<HTMLInputElement | null>(null);

    useLayoutEffect(() => {
        if (messageEl.current) {
            messageEl.current?.scroll({
                top: messageEl.current.scrollHeight,
            });
        }
    }, [ users[ 0 ]?._id ]);

    const messageJSX = users.map(({ text, _id, username, createdAt, updatedAt }) => {
        return (

            <Message
                key = { _id }
                userMessage = { userName === username }>
                {userName === username
                    ? <>
                        <DeleteButton
                            disabled = { !isReset }
                            onClick = { () => {
                                // eslint-disable-next-line no-alert
                                if (confirm('Вы действитель хотите удалить сообщение?')) {
                                    deleteMessage({ _id });
                                    deleteMs(_id);
                                }
                            } }>Delete
                        </DeleteButton>
                        <DeleteButton
                            disabled = { !isReset }
                            onClick = {   () => {
                                textMessages(text);
                                clickIsResetTrue();
                                setId({ _id, text });
                                clickIsDisableFalse();
                            } }>Update</DeleteButton>
                    </> : null}
                <StyleP>{userName !== username ? username : null}</StyleP>
                <StyleS>{text}</StyleS>
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
                    <LogoutSharp />
                </CustomButtonOut>
            </NavLink>
            <Tooltip title =  { `your nick name is ${userName}` }  >
                <AccountCircleSharp sx = {{ width: '80px', height: '80px', float: 'right', color: '#2b0e34' }}/>
            </Tooltip>
            {/* <Typography sx = {{ fontSize: '40px', textAlign: 'center' }}>Hello User: {userName}</Typography> */}
            <Chat>
                <MessagesContainer ref = { messageEl }>
                    {messageJSX}
                </MessagesContainer>
                <Footer>
                    <Cancel
                        visible = { isDisable }
                        onClick = { () => {
                            clearMessages();
                            clickIsResetFalse();
                            clickIsDisableTrue();
                        } }><CancelIcon />
                    </Cancel>
                    <CustomInput
                        ref = { inputEL }
                        type = 'text'
                        value = { text }
                        onChange = { (event) => {
                            if (event.target.value.includes(text)) {
                                textMessages(event.target.value.slice(event.target.value.length - 1));
                            }
                        }
                        }
                        onKeyPress = { (event) => {
                            if (event.key === 'Enter') {
                                if (text.length !== 0 && userName !== null) {
                                    isReset ? createMessages({ text: text, username: userName })
                                        :  updateMessage({ text: text, _id: ids._id });
                                    clickIsResetFalse();
                                    clearMessages();
                                    clickIsDisableTrue();
                                }
                            }
                        } }>
                    </CustomInput>

                    <Send
                        disabled = { text.length === 0 }
                        onClick = { () =>  {
                            if (text.length !== 0 && userName !== null) {
                                isReset ? createMessages({ text: text, username: userName })
                                    :  updateMessage({ text: text, _id: ids._id });
                                clickIsResetFalse();
                                clearMessages();
                                clickIsDisableTrue();
                            }
                        } }><SendSharp sx = {{ width: 'auto' }} />
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
                clickIsDisable = { clickIsDisableTrue }
                clickReset = { clickIsResetFalse }
                code = { code }
                codeButton = { codeButton }
                createMessage = {  createMessages }
                delete = { deleteElements }
                deleteButtonCode = { deleteButtonCode }
                focusEL = { inputEL }
                id = { ids._id }
                name = { userName }
                reset = { isReset }
                text = { text }
                update = { updateMessage }
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

