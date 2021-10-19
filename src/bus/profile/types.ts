// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type Profile = {
    _id: string,
    username: string
}
export type ProfileState = Array<Profile>


export type SetUsers = CaseReducer<ProfileState, PayloadAction<ProfileState>>
export type SetUser = CaseReducer<Profile, PayloadAction<Profile>>
export type UserProfileContract = CaseReducer<Profile, PayloadAction<Profile>>
export type UserNameContract = CaseReducer<Profile, PayloadAction<string>>
