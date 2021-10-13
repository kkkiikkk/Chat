// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import days from '../../bus/days/slice';
import stateFilter from '../../bus/stateFilter/slice';
import stateUserSlice from '../../bus/profile/slice';
import  userSlice from '../../bus/messages/slices';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Sagas
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        days,
        stateFilter,
        stateUserSlice,
        userSlice,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga);
