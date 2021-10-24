
// Tools
import { makeRequest } from '../../../../tools/utils/makeRequest';

// Actions
import { MessageAction } from '../../slices';

// API
import * as API from '../api';

// Types
import { UpdateMessageContract } from '../types';
import {  Message } from '../../types';

export function* updateMessage(payload : ReturnType<UpdateMessageContract>) {
    yield makeRequest<Message>({
        fetcher:      API.updateMessage(payload.payload),
        succesAction: MessageAction.updateMessage,
    });
}
