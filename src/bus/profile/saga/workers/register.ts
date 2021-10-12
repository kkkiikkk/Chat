
// Tools
import { stateUserActions } from '../../slice';
import {  User } from '../../types';

import { makeRequest } from '../../../../tools/utils/makeRequest';
import { userLocalStore } from '../../../../tools/utils';
import { put } from 'redux-saga/effects';
import { togglerCreatorAction } from '../../../client/togglers';
import * as API from '../api/postUser';

// Types
import { PostUserContract } from '../types';

export function* registerUser({ payload }: ReturnType<PostUserContract>) {
    const result: User | null = yield makeRequest<User>({
        fetcher:           API.postUser(payload),
        togglerType:       'isRegister',
        succesAction:      stateUserActions.setUserName,
        successSideEffect: (result) => {
            if (result._id) {
                userLocalStore.setRefreshToken(result._id);
            }
        },
        errorSideEffect: () => { console.log('EROOORRRRRRRRRRRRRRRRRRRRRRRRRRR'); },
    });
    yield console.log(result);


    if (result !== null) {
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
    }
}
