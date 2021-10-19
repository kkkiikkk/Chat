// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type TextMessage = string


export type TextMessageContract = CaseReducer<TextMessage, PayloadAction<TextMessage>>
export type TextClearMessageContract = CaseReducer<TextMessage>
