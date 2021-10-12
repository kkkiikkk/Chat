// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type User = {
    _id: string,
    username: string
}
export type Users = Array<User>


export type SetUsers = CaseReducer<Users, PayloadAction<Users>>
export type SetUser = CaseReducer<User, PayloadAction<User>>
export type UserNameContract = CaseReducer<User, PayloadAction<User>>
export type UserNameContract1 = CaseReducer<User, PayloadAction<string>>
