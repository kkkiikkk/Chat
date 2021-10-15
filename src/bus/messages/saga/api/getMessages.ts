// Tolls
import { API_URL } from '../../../../init';


export const fillMessage =  async () => {
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
};
