// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { FILL_MESSAGE, CREATE_MESSAGE } from './types';

// Workers
import {
    fillMessage,

} from './worker/getMessage';
import { sendMessages } from './worker/postMessages';
function* watchFillMessage(): SagaIterator {
    yield takeEvery(FILL_MESSAGE, fillMessage);
}

function* watchCreateMessage(): SagaIterator {
    yield takeEvery(CREATE_MESSAGE, sendMessages);
}


export function* watchUsers(): SagaIterator {
    yield all([ call(watchFillMessage), call(watchCreateMessage) ]);
}
