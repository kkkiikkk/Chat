
// Core
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { RecoilRoot } from 'recoil';

// App initializaion
import {
    store as reduxStore,
    history as routerHistory,
    registerServiceWorker,
} from './init';

// App
import { App } from './view';

// Assets
import { initIconsLibrary } from './assets';

initIconsLibrary();

const Root = () => {
    return (
        <ReduxProvider store = { reduxStore }>
            <RecoilRoot>
                <Router history = { routerHistory }>
                    <App />
                </Router>
            </RecoilRoot>
        </ReduxProvider>
    );
};

render(<Root />, document.getElementById('app'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    registerServiceWorker();
}
