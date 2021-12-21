// Core
import {  useRecoilValue, useRecoilState } from 'recoil';

// Selector
import * as selector from './selector';

// Atom
import * as atom from './atom';
import { useEffect } from 'react';

let intervalId: ReturnType<typeof setInterval> | void = void 0;


export const useMessagess = () => {
    const getMessage = useRecoilValue;
    const message = useRecoilValue(selector.getMessageSelector);
    const [ mes, setMes ] = useRecoilState(atom.getMessage);

    useEffect(() => {
        if (intervalId) {
            return void 0;
        }
        setMes((ol) => ol.concat(getMessage(selector.getMessageSelector)));

        intervalId = setInterval(() => {
            setMes((ol) => ol.concat(getMessage(selector.getMessageSelector)));
        }
        , 4000);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);


    return {
        messageRecoil: message,
    };
};
