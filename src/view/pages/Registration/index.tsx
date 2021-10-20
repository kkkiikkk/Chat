
// Core
import { FC, useState } from 'react';
import React from 'react';

// Hooks
import { useAuth } from '../../../bus/profile/saga';

// Styles
import {  GlobalStylesComponents } from './GlobalStyles';
import { LoginBox, UserName, CustomInput, UserBox, CustomLabel, CustomButton, CustomLink, CustomSection } from './styles';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { useFilterStyle } from '../../../tools/hooks/useFilterStyle';


const Login:FC = () => {
    const { createUserProfile: createUser } = useAuth();
    const [ name, setName ] = useState('');
    const { clickFalse, clickTrue, isClicked } = useFilterStyle();

    return (
        <CustomSection>
            <GlobalStylesComponents />
            <LoginBox>
                <UserName>Login</UserName>
                <form  >
                    <UserBox>
                        <CustomInput
                            name = 'userName'
                            value = { name }
                            onChange = { (event) => {
                                setName(event.target.value);
                                if (event.target.value.length !== 0) {
                                    clickTrue();
                                } else if (event.target.value.length === 0) {
                                    clickFalse();
                                }
                            }
                            }>
                        </CustomInput>
                        <CustomLabel>Username</CustomLabel>
                    </UserBox>
                    <CustomLink
                        to = '/message'
                        type = 'submit'>
                        <CustomButton
                            disabled = { isClicked }
                            onClick = { () => {
                                if (!isClicked) {
                                    createUser(name);
                                    clickFalse();
                                }
                            } }>
                            Submit
                        </CustomButton>
                    </CustomLink>
                </form>
            </LoginBox>
        </CustomSection>
    );
};

export default () => (
    <ErrorBoundary>
        <Login />
    </ErrorBoundary>
);
