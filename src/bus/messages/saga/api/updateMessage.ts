// Tools
import { API_URL } from '../../../../init';

// Types
import { Message } from '../../types';

type IPostUser = (messages: {text: string, _id: string}) => () => Promise<Message>

export const updateMessage: IPostUser = ({ text, _id }) => async () => {
    const response = await fetch(`${API_URL}/messages/${_id}`, {
        method:  'PUt',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    if (response.status !== 201) {
        throw new Error('Put User failed');
    }

    return response.json();
};
