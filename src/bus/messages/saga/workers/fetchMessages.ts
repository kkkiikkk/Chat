// Types
import { MessagesState } from '../../types';

// Sync actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Instruments
import { IControlledError, makeRequest } from '../../../../tools/utils';

export function* fetchMessages() {
    const combineResult: IControlledError & MessagesState = yield makeRequest<MessagesState>({
        fetcher:          API.fetchMessages,
        togglerType:      'isMessagesFetching',
<<<<<<< HEAD
        fill:             messagesActions.setMessages,
=======
        succesAction:     messagesActions.setMessages,
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62
        isControlledMode: true,
    });

    if (combineResult?.name === 'ControlledError') {
        console.log(combineResult.errorId);
    }

    // if (combineResult.length) {
    //     console.log(combineResult);
    // }
}
