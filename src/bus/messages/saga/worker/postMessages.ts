// Core
import { delay } from 'redux-saga/effects';

// Tools
import { makeRequest } from '../../../../tools/utils/makeRequest';

// Actions
import { MessageAction } from '../../slices';

// API
import * as API from '../api';

// Types
import { PostMessagesContract } from '../types';
import {  Message } from '../../types';

export function* sendMessages(payload : ReturnType<PostMessagesContract>) {
    yield makeRequest<Message>({
        fetcher:      API.createMessage(payload.payload),
        succesAction: MessageAction.setMessages,
    });
    delay(500);
}
