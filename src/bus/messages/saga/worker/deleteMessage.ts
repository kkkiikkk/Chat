
// Tools
import { makeRequest } from '../../../../tools/utils/makeRequest';

// Actions
import { MessageAction } from '../../slices';

// API
import * as API from '../api/deleteMessages';

// Types
import { DeleteMessageContract } from '../types';

export function* deleteMessage(payload : ReturnType<DeleteMessageContract>) {
    yield makeRequest<boolean>({
        fetcher:      API.deleteMessage(payload.payload),
        succesAction: MessageAction.deleteMesage,
    });
}
