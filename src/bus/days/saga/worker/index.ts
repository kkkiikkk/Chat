// Core
import { put } from 'redux-saga/effects';

// Redux
import { daysActions } from '../../slice';

// Tools
import * as API from '../api';


import {  DaysState } from '../../types';
import { makeRequest } from '../../../../tools/utils';
import { stateFilterActions } from '../../../stateFilter/slice';


export function* fetchDays() {
    const combineResult: DaysState | null = yield makeRequest<DaysState>({
        fetcher:          API.fetchDays,
        togglerType:      'isDaysFetching',
        succesAction:     daysActions.setDays,
        isControlledMode: true,
    });

    if (combineResult) {
        yield put(stateFilterActions.selectDay(combineResult[ 0 ].id));
    }
}
