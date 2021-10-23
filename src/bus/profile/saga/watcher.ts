// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { REGISTER_PROFILE,  REFRESH_PROFILE } from './types';

// Workers
import {
    registerProfile,

} from './workers/register';
import { refreshProfile } from './workers/refresh';

function* watchRegisterProfile(): SagaIterator {
    yield takeEvery(REGISTER_PROFILE, registerProfile);
}

function* watchRefreshProfile(): SagaIterator {
    yield takeEvery(REFRESH_PROFILE, refreshProfile);
}

export function* watchProfile(): SagaIterator {
    yield all([ call(watchRegisterProfile), call(watchRefreshProfile) ]);
}
