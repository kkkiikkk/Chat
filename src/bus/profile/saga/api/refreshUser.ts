import { API_URL } from '../../../../init';
import { Profile } from '../../types';

type IPostUser = (_id: string) => () => Promise<Profile>

export const refreshProfile: IPostUser = (_id) => async () => {
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
