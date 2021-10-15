// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchUser } from '../../bus/profile/saga/watcher';
import {  watchMessages } from '../../bus/messages/saga/worker';

export function* rootSaga() {
    yield all([ watchUser(), watchMessages()  ]);
}
