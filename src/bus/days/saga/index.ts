// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';


// Workers
import {
    fetchDays,
} from './worker';

function* watchFetchDays(): SagaIterator {
    yield takeEvery('SET_DAYS', fetchDays);
}

export function* watchDays(): SagaIterator {
    yield all([ call(watchFetchDays) ]);
}
