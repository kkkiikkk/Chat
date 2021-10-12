// Core
import { all } from 'redux-saga/effects';

// Instruments
import { watchDays } from '../../bus/days/saga';
import { watchUser } from '../../bus/profile/saga/watcher';

export function* rootSaga() {
    yield all([ watchUser() ]);
}
