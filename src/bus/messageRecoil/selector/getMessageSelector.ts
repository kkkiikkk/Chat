// Core
import { selector } from 'recoil';

// Tolls
import { API_URL } from '../../../init';

export type Message = {
    _id: string,
    username: string,
    text:string,
    createdAt: string,
    updatedAt: string
}

export type Messages = Array<Message>

export const getMessageSelector = selector<Messages>({
    key: 'getMessageSelector',
    get: async () => {
        const response = await fetch(`${API_URL}/messages`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('Post User failed');
        }

        return response.json();
    },
});
