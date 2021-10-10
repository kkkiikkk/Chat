// Core
import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import { Login } from '../../components/Registration/index';

// Pages
import { Main } from '../../pages';

export const Private: FC = () => {
    const { push } = useHistory();
    const { pathname } = useLocation();

    useEffect(()=> {
        if (pathname.match(/login|register/)) {
            push('/');
        }
    });

    return (
        <Switch>
            <Route
                exact
                path = '/'>
                {/* <Main /> */}
                <Login />
            </Route>
            <Redirect to = '/form' />
        </Switch>
    );
};
