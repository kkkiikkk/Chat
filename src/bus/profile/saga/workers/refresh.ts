// Core
import { put } from 'redux-saga/effects';

// Actions
import { stateUserActions } from '../../slice';

// Tools
import { makeRequest } from '../../../../tools/utils/makeRequest';
import { togglerCreatorAction } from '../../../client/togglers';

// API
import * as API from '../api/refreshUser';

// Types
import { GetUserContract } from '../types';
import {  Profile } from '../../types';

export function* refreshProfile({ payload }: ReturnType<GetUserContract>) {
    const result: Profile  = yield makeRequest<Profile>({
        fetcher:      API.fillProfile(payload),
        togglerType:  'isRegister',
        succesAction: stateUserActions.getUserName,
    });

    if (result !== null) {
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
    }
}
