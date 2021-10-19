// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { REGISTER_USER,  FILL_USER_PROFILE } from './types';

// Workers
import {
    registerProfile,

} from './workers/register';
import { refreshProfile } from './workers/refresh';

function* watchRegisterUser(): SagaIterator {
    yield takeEvery(REGISTER_USER, registerProfile);
}

function* watchRefreshUser(): SagaIterator {
    yield takeEvery(FILL_USER_PROFILE, refreshProfile);
}

export function* watchUser(): SagaIterator {
    yield all([ call(watchRegisterUser), call(watchRefreshUser) ]);
}
