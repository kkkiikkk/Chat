// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';
import { POST_USER,  GET_USER } from './types';


// Workers
import {
    registerUser,

} from './workers/register';
import { refreshUser } from './workers/refresh';

function* watchPostUser(): SagaIterator {
    yield takeEvery(POST_USER, registerUser);
}

function* watchGetUser(): SagaIterator {
    yield takeEvery(GET_USER, refreshUser);
}

export function* watchUser(): SagaIterator {
    yield all([ call(watchPostUser), call(watchGetUser) ]);
}
