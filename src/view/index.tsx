// Core
import React, { FC, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import localStore from 'store';

// Containers
import { Routes } from './routes';
import { refresh } from '../bus/profile/saga/action';

// Hooks
import { useLocalStorage } from '../tools/hooks';
import { useTogglersRedux } from '../bus/client/togglers';
// Assets and Styles
import { GlobalStyles, defaultTheme } from '../assets';
import { AppContainer } from './styles';

import './styles.css';

export const App: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);
    const value = localStore.get('userId');
    const dispatch = useDispatch();
    useEffect(() => {
        if (value) {
            dispatch(refresh(value));
        }
    }, [ dispatch ]);
    const setOnlineStatusHanlder = useCallback(() => void setTogglerAction({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setTogglerAction ]);

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};

