// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import  Login  from '../../view/pages/Registration';

export const Public: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path = '/login'>
                <Login />
            </Route>
            <Redirect to = '/login' />
        </Switch>
    );
};
export const a = null;
