// Core
import { lazy } from 'react';

export const Messager = lazy(() => import(/* webpackChunkName: "Main" */ './Messsager'));
export const Login = lazy(() => import('./Registration'));
