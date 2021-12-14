
// Tools
import { makeRequest } from '../../../../tools/utils/makeRequest';
import { put } from 'redux-saga/effects';

// Actions
import { MessageAction } from '../../slices';

// Actions
import { getMessages } from '../actions';

// API
import * as API from '../api';

// Types
import { UpdateMessageContract } from '../types';
import {  Message } from '../../types';

export function* updateMessage(payload : ReturnType<UpdateMessageContract>) {
    yield makeRequest<Message>({
        fetcher:           API.updateMessage(payload.payload),
        succesAction:      MessageAction.updateMessage,
        successSideEffect: function* () {
            yield put(getMessages());
        },
    });
}
