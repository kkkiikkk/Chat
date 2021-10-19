// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import stateUserSlice from '../../bus/profile/slice';
import  Messages from '../../bus/messages/slices';
import textMessage  from '../../bus/client/textMessage/slices';
import  buttonCodeMessages from '../../bus/client/keyBoard/slices';


// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Sagas
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        stateUserSlice,
        userSlice: Messages,
        textMessage,
        buttonCodeMessages,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

sagaMiddleware.run(rootSaga);
