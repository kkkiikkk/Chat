// Core
import { atom } from 'recoil';

export type Message = {
    _id: string,
    username: string,
    text:string,
    createdAt: string,
    updatedAt: string
}

export const getMessage = atom({
    key:     'getMessage',
    default: [] as Array<Message>,
});
