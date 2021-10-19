// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchUser } from '../../bus/profile/saga/watcher';
import {  watchMessages } from '../../bus/messages/saga/watcher';

export function* rootSaga() {
    yield all([ watchUser(), watchMessages()  ]);
}
