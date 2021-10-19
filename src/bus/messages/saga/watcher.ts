// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { FILL_MESSAGE, CREATE_MESSAGE, DELETE_MESSAGE, UPDATE_MESSAGE } from './types';

// Workers
import {
    fillMessage,

} from './worker/getMessage';
import { sendMessages } from './worker/postMessages';
import {  deleteMessage } from './worker/deleteMessage';
import { updateMessage } from './worker/updateMessage';


function* watchFillMessage(): SagaIterator {
    yield takeEvery(FILL_MESSAGE, fillMessage);
}

function* watchCreateMessage(): SagaIterator {
    yield takeEvery(CREATE_MESSAGE, sendMessages);
}

function* watchDeleteMessage(): SagaIterator {
    yield takeEvery(DELETE_MESSAGE, deleteMessage);
}


function* watchUpdateMessage(): SagaIterator {
    yield takeEvery(UPDATE_MESSAGE, updateMessage);
}


export function* watchMessages(): SagaIterator {
    yield all([ call(watchFillMessage), call(watchCreateMessage), call(watchDeleteMessage), call(watchUpdateMessage) ]);
}
