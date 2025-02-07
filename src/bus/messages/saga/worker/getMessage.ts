// Core
import { put, select, delay } from 'redux-saga/effects';
import { isEqual } from 'lodash';


// Actions
import { MessageAction } from '../../slices';

// Types
import {  Messages } from '../../types';


// API
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';
import { RootState } from '../../../../init';


export function* fillMessage() {
    const { userSlice }: RootState = yield select((state) => state);
    const newMessages: Messages = yield makeRequest<Messages>({
        fetcher: API.fillMessage,
    });
    delay(500);
    if (!isEqual(userSlice, newMessages)) {
        yield put(MessageAction.setUsers(newMessages));
    }
}
