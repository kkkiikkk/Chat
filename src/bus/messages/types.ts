// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type Message = {
    _id: string,
    username: string,
    text:string,
    createdAt: string,
    updatedAt: string
}

export type Messages = Array<Message>


export type FilMessageContract = CaseReducer<Messages, PayloadAction<Messages>>
export type AddMessageContract = CaseReducer<Messages, PayloadAction<Message>>
