// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchProfile } from '../../bus/profile/saga/watcher';
import {  watchMessages } from '../../bus/messages/saga/watcher';

export function* rootSaga() {
    yield all([ watchProfile(), watchMessages()  ]);
}
