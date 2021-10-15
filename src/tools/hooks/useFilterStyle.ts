// Core
import  { useState } from 'react';

export const useFilterStyle = () => {
    const [ isClicked, setIsClicked ] = useState(true);
    const [ visible, setVisible ] = useState(false);
    const [ isReset, setIsReset ] = useState(true);
    const [ isDisable, setIsDisable ] = useState(false);

    const clickVisibleTrue = () =>  setVisible(false);
    const clickVisibleFalse = () =>  setVisible(true);

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
        visible,
        clickVisibleTrue,
        clickVisibleFalse,
        isReset,
        clickIsResetFalse,
        clickIsResetTrue,
        clickIsDisableTrue,
        clickIsDisableFalse,
        isDisable,
    };
};
