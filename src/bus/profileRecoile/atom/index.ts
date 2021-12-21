// Core
import { atom } from 'recoil';

export type Profile = {
    _id: string | null,
    username: string | null
}

const profile = atom<Profile>({
    key:     'profile',
    default: {
        _id:      null,
        username: null,
    },
});
