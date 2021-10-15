// Tools
import { API_URL } from '../../../../init';

// Types
import { Message } from '../../types';

type IPostUser = (messages: {text: string, username: string}) => () => Promise<Message>

export const createMessage: IPostUser = ({ text, username }) => async () => {
    const response = await fetch(`${API_URL}/messages`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, username }),
    });

    if (response.status !== 201) {
        throw new Error('Post User failed');
    }

    return response.json();
};
