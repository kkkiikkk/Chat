// Core
import { put } from 'redux-saga/effects';

// Tools
import { userLocalStore } from '../../../../tools/utils';
import { makeRequest } from '../../../../tools/utils/makeRequest';

// Toggler
import { togglerCreatorAction } from '../../../client/togglers';

// API
import * as API from '../api/postUser';

// Actions
import { stateUserActions } from '../../slice';

// Types
import { PostUserContract } from '../types';
import {  Profile } from '../../types';

export function* registerProfile({ payload }: ReturnType<PostUserContract>) {
    const result: Profile | null = yield makeRequest<Profile>({
        fetcher:           API.createProfile(payload),
        togglerType:       'isRegister',
        succesAction:      stateUserActions.setUserName,
        successSideEffect: (result) => {
            if (result._id) {
                userLocalStore.setRefreshToken(result._id);
            }
        },
    });


    if (result !== null) {
        yield put(togglerCreatorAction({
            type:  'isLoggedIn',
            value: true,
        }));
    }
}
