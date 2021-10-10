
// Core
import { FC } from 'react';
import React from 'react';

// Styles
import {  GlobalStylesComponents } from './GlobalStyles';
import { LoginBox, UserName, CustomInput, UserBox, CustomLabel, CustomButton } from './styles';

export const Login:FC = () => {
    return (
        <>
            <GlobalStylesComponents />
            <LoginBox>
                <UserName>Login</UserName>
                <form>
                    <UserBox>
                        <CustomInput />
                        <CustomLabel>Username</CustomLabel>
                    </UserBox>
                    <CustomButton>
                        Submit
                    </CustomButton>
                </form>
            </LoginBox>
        </>
    );
};
