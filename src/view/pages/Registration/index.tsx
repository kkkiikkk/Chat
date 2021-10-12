/* eslint-disable react-hooks/rules-of-hooks */


// Core
import { FC } from 'react';
import React from 'react';

// Hooks
import { useForm } from '../../../tools/hooks/useForm';
import { useUserName } from '../../../bus/profile/index';
import { useAuth } from '../../../bus/profile/saga';

// Styles
import {  GlobalStylesComponents } from './GlobalStyles';
import { LoginBox, UserName, CustomInput, UserBox, CustomLabel, CustomButton, CustomLink } from './styles';
import { ErrorBoundary } from '../../components/ErrorBoundary';

const initialState = {
    userName: '',
};

const Login:FC = () => {
    const [ form, handleChange ] = useForm<typeof initialState>(initialState);
    const { userName } = useUserName();
    const { createUser } = useAuth();

    return (
        <>
            <GlobalStylesComponents />
            <LoginBox>
                <UserName>Login</UserName>
                <form onSubmit = { (event) => event.preventDefault() }>
                    <UserBox>
                        <CustomInput
                            name = 'userName'
                            value = { form.userName }
                            onChange = { (event) => void handleChange(event, false) }>
                        </CustomInput>
                        <CustomLabel>Username</CustomLabel>
                    </UserBox>
                    <CustomButton onClick = { () => {
                        userName(form.userName);
                        createUser();
                    } }>
                        <CustomLink
                            to = '/message'
                            type = 'submit'>
                            Submit
                        </CustomLink>
                    </CustomButton>
                </form>
            </LoginBox>
        </>
    );
};

export default () => (
    <ErrorBoundary>
        <Login />
    </ErrorBoundary>
);
