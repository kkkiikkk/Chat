// Core
import  { useState } from 'react';

export const useFilterStyle = () => {
    const [ isClicked, setIsClicked ] = useState(true);
    const [ reset, setReset ] = useState(true);
    const [ isReset, setIsReset ] = useState(true);
    const [ isDisable, setIsDisable ] = useState(false);

    const clickResetTrue = () =>  setReset(false);
    const clickResetFalse = () =>  setReset(true);

    const clickTrue = () =>  setIsClicked(false);
    const clickFalse = () =>  setIsClicked(true);


    const clickIsResetTrue = () =>  setIsReset(false);
    const clickIsResetFalse = () =>  setIsReset(true);

    const clickIsDisableTrue = () =>  setIsDisable(false);
    const clickIsDisableFalse = () =>  setIsDisable(true);

    return {
        clickFalse,
        clickTrue,
        isClicked,
        reset,
        clickResetTrue,
        clickResetFalse,
        isReset,
        clickIsResetFalse,
        clickIsResetTrue,
        clickIsDisableTrue,
        clickIsDisableFalse,
        isDisable,
    };
};
