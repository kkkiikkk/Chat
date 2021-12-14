// Core
import { delay, put } from 'redux-saga/effects';

// Tools
import { makeRequest } from '../../../../tools/utils/makeRequest';

// Actions
import { getMessages } from '../actions';

// API
import * as API from '../api';

// Types
import { DeleteMessageContract } from '../types';

export function* deleteMessage(payload : ReturnType<DeleteMessageContract>) {
    yield makeRequest<boolean>({
        fetcher:           API.deleteMessage(payload.payload),
        successSideEffect: function* () {
            yield put(getMessages());
        },
    });
    yield delay(500);
}
