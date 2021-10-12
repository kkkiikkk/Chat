import { put } from 'redux-saga/effects';
import { stateUserActions } from '../../slice';
import {  User } from '../../types';

import { makeRequest } from '../../../../tools/utils/makeRequest';
import { togglerCreatorAction } from '../../../client/togglers';
import * as API from '../api/refreshUser';
import { GetUserContract } from '../types';
import { userLocalStore } from '../../../../tools/utils/userLocalStore';

export function* refreshUser({ payload }: ReturnType<GetUserContract>) {
    const result: User  = yield makeRequest<User>({
        fetcher:      API.getUser(payload),
        togglerType:  'isRegister',
        succesAction: stateUserActions.getUserName,
    });
    yield console.log(result);

    if (result !== null) {
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
    }
}
