
// Core
import { FC, useState } from 'react';
import React from 'react';

// Hooks
import { useAuth } from '../../../bus/profile/saga';

// Styles
import {  GlobalStylesComponents } from './GlobalStyles';
import { LoginBox, UserName, CustomInput, UserBox, CustomLabel, CustomButton, CustomLink } from './styles';
import { ErrorBoundary } from '../../components/ErrorBoundary';


const Login:FC = () => {
    const { createUser } = useAuth();
    const [ name, setName ] = useState('');

    return (
        <>
            <GlobalStylesComponents />
            <LoginBox>
                <UserName>Login</UserName>
                <form  >
                    <UserBox>
                        <CustomInput
                            name = 'userName'
                            value = { name }
                            onChange = { (event) => void setName(event.target.value) }>
                        </CustomInput>
                        <CustomLabel>Username</CustomLabel>
                    </UserBox>
                    <CustomLink
                        to = '/message'
                        type = 'submit'>
                        <CustomButton onClick = { () => {
                            createUser(name);
                        } }>
                            Submit
                        </CustomButton>
                    </CustomLink>
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
