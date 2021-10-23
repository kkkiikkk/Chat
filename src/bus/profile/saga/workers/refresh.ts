// Core
import { put } from 'redux-saga/effects';

// Actions
import { stateProfileActions } from '../../slice';

// Tools
import { makeRequest } from '../../../../tools/utils/makeRequest';
import { togglerCreatorAction } from '../../../client/togglers';

// API
import * as API from '../api/refreshUser';

// Types
import { GetRefreshContract } from '../types';
import {  Profile } from '../../types';

export function* refreshProfile({ payload }: ReturnType<GetRefreshContract>) {
    const result: Profile  = yield makeRequest<Profile>({
        fetcher:      API.refreshProfile(payload),
        togglerType:  'isRegister',
        succesAction: stateProfileActions.getUserName,
    });

    if (result !== null) {
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
    }
}
