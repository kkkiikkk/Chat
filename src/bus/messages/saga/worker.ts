// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';
import { GET_MESSAGES, POST_MESSAGES } from './types';


// Workers
import {
    fetchUsers,

} from './worker/getMessage';
import { sendMessages } from './worker/postMessages';
function* watchFetchUser(): SagaIterator {
    yield takeEvery(GET_MESSAGES, fetchUsers);
}

function* watchPostMessage(): SagaIterator {
    yield takeEvery(POST_MESSAGES, sendMessages);
}


export function* watchUsers(): SagaIterator {
    yield all([ call(watchFetchUser), call(watchPostMessage) ]);
}
