

// Redux
import { userAction } from '../../slices';

// Tools
import * as API from '../api/getMessages';
import {  UserState } from '../../types';
import { makeRequest } from '../../../../tools/utils';


export function* fetchUsers() {
    const result: UserState  = yield makeRequest<UserState>({
        fetcher:      API.getMessages,
        togglerType:  'isMessagesFetching',
        succesAction: userAction.setUsers,
    });
    yield console.log(result);
}
