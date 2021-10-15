// Core
import { lazy } from 'react';

export const Messager = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Login = lazy(() => import('./Registration'));
