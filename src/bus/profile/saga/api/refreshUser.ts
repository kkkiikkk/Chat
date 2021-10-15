import { API_URL } from '../../../../init';
import { User } from '../../types';

type IPostUser = (_id: string) => () => Promise<User>

export const fillUser: IPostUser = (_id) => async () => {
    const response = await fetch(`${API_URL}/users/refresh/${_id}`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Post User failed');
    }

    return response.json();
};
