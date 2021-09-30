// Core
import React, { FC, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

// Containers
<<<<<<< HEAD:src/view/index.tsx
=======
import { TopBar } from './containers/TopBar';
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62:src/view/App/index.tsx
import { Routes } from './routes';

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
                <p className = 'www'>adssdddddddd</p>
            </AppContainer>
        </ThemeProvider>
    );
};
