// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type User = {
    _id: string,
    username: string,
    text:string,
    createdAt: string,
    updatedAt: string
}

export type UserState = Array<User>


export type SetUserContract = CaseReducer<UserState, PayloadAction<UserState>>
export type SetMessagesContract = CaseReducer<UserState, PayloadAction<User>>
