
// Tools
import { userAction } from '../../slices';
import {  User } from '../../types';

import { makeRequest } from '../../../../tools/utils/makeRequest';
import * as API from '../api/postMessages';

// Types
import { PostMessagesContract } from '../types';

export function* sendMessages(payload : ReturnType<PostMessagesContract>) {
    const result: User  = yield makeRequest<User>({
        fetcher:      API.postMessages(payload.payload),
        togglerType:  'isMessagePost',
        succesAction: userAction.setMessages,
    });
    yield console.log(result);
}
