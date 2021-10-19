// Tools
import { API_URL } from '../../../../init';


type IPostUser = (messages: {_id: string}) => () => Promise<boolean>

export const deleteMessage: IPostUser = ({ _id }) => async () => {
    const response = await fetch(`${API_URL}/messages/${_id}`, {
        method:  'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('Delete Message failed');
    }

    return response.json();
};
