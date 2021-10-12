import { API_URL } from '../../../../init';
import { User } from '../../types';

type IPostUser = (_id: string) => () => Promise<User>

export const getUser: IPostUser = (_id) => async () => {
    console.log('getUser');
    console.log(_id);

    const response = await fetch(`${API_URL}/users/refresh/${_id}`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    console.log(response);
    if (response.status !== 200) {
        throw new Error('Post User failed');
    }

    return response.json();
};
