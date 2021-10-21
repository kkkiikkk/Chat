// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type ButtonMessage = number

export type StateButtonMessage = Array<ButtonMessage>

export type ButtonMessageContract = CaseReducer<StateButtonMessage, PayloadAction<ButtonMessage>>
