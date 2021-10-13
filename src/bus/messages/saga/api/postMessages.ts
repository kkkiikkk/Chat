// Types
import { User } from '../../types';
import { API_URL } from '../../../../init';

type IPostUser = (messages: {text: string, username: string}) => () => Promise<User>

export const postMessages: IPostUser = ({ text, username }) => async () => {
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
