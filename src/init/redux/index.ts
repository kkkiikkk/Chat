// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import counter from '../../bus/counter/slice';
import messages from '../../bus/messages/slice';
<<<<<<< HEAD
import days from '../../bus/days/slice';
import stateFilter from '../../bus/stateFilter/slice';
=======
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Sagas
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        counter,
        messages,
<<<<<<< HEAD
        days,
        stateFilter,
=======
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
<<<<<<< HEAD
=======
export type AppDispatch = typeof store.dispatch
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62

sagaMiddleware.run(rootSaga);
