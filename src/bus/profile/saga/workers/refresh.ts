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
import {  User } from '../../types';

export function* refreshUser({ payload }: ReturnType<GetUserContract>) {
    const result: User  = yield makeRequest<User>({
        fetcher:      API.fillUser(payload),
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
