// Core
import { put, select } from 'redux-saga/effects';
import { isEqual } from 'lodash';


// Actions
import { MessageAction } from '../../slices';

// Types
import {  Messages } from '../../types';


// API
import * as API from '../api/getMessages';

// Tools
import { makeRequest } from '../../../../tools/utils';
import { RootState } from '../../../../init';


export function* fillMessage() {
    const { userSlice }: RootState = yield select((state) => state);
    const newMessages: Messages = yield makeRequest<Messages>({
        fetcher: API.fillMessage,
    });
    if (!isEqual(userSlice, newMessages)) {
        yield put(MessageAction.setUsers(newMessages));
    }
}
