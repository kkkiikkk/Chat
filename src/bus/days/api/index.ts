// Tools
import { API_URL } from '../../../init';

// Types
import { DaysState } from '../types';

export const fetchDays = async (): Promise<DaysState | null> => {
    try {
        const response = await fetch(`${API_URL}/forecast`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw new Error('fetchDays failed');
        }

        const { data }: { data: DaysState } = await response.json();

        return data.slice(0, 7);
    } catch (error) {
        console.log(error);

        return null;
    }
};
