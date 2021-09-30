// Core
import { put, call } from 'redux-saga/effects';

// Redux
<<<<<<< HEAD
import { errorsActions  } from '../../bus/client/errors';
=======
import { errorsActions } from '../../bus/client/errors';
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62
import { TogglersKeys } from '../../bus/client/togglers';

// Action
import { togglerCreatorAction } from '../../bus/client/togglers';
import { IControlledError } from './controlledError';

type OptionsType<T> = {
    fetcher: (...args: any) => Promise<T>;
    togglerType?: TogglersKeys;
<<<<<<< HEAD
    fill?: (payload: T) => {
        type: string;
        payload: T;
    };
=======
    succesAction?: (payload: T) => {
        type: string;
        payload: T;
    };
    errorAction?: Function;
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62
    successSideEffect?: Function;
    errorSideEffect?: Function;
    isControlledMode?: boolean
};

export function* makeRequest<T>(options: OptionsType<T>) {
    const {
<<<<<<< HEAD
        fetcher,
        togglerType,
        fill,
        successSideEffect,
        errorSideEffect,
=======
        fetcher, togglerType,
        succesAction, errorAction,
        successSideEffect, errorSideEffect,
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62
        isControlledMode,
    } = options;

    try {
        // ------------- SUCCESS BLOCK START -------------
        if (togglerType) {
            yield put(togglerCreatorAction({
                type:  togglerType,
                value: true,
            }));
        }

        const result: T = yield call(fetcher);

<<<<<<< HEAD
        if (fill) {
            yield put(fill(result));
        }

        if (successSideEffect) {
            yield put(successSideEffect());
=======
        if (succesAction) {
            yield put(succesAction(result));
        }

        if (successSideEffect) {
            yield successSideEffect();
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62
        }

        return result;
        // ------------- SUCCESS BLOCK END -------------
    } catch (error) {
        // ------------- ERROR BLOCK START -------------
        if (errorSideEffect) {
<<<<<<< HEAD
            yield put(errorSideEffect());
=======
            yield errorSideEffect();
        }

        if (errorAction) {
            yield put(errorAction());
>>>>>>> d11fd3327596b6cf0668d67ebe514215fe4aac62
        }

        if (isControlledMode) {
            const controlledError = error as IControlledError;
            yield put(errorsActions.setControlledError(controlledError));

            return controlledError;
        }

        return null;
        // ------------- ERROR BLOCK END -------------
    } finally {
        // ------------- FINALLY BLOCK START -------------
        if (togglerType) {
            yield put(togglerCreatorAction({
                type:  togglerType,
                value: false,
            }));
        }
        // ------------- FINALLY BLOCK END -------------
    }
}

