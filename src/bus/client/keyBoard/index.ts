// Core
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../tools/hooks/useSelector';

// Action
import { buttonMessageAction } from './slices';

export const useButtonCode = () => {
    const dispatch = useDispatch();
    const { buttonCodeMessages } = useSelector((state) => state);


    const codeButton =  (code: number) => {
        console.log(buttonCodeMessages);
        if (!buttonCodeMessages.includes(code)) {
            dispatch(
                buttonMessageAction.buttonCode(code),
            );
        }
    };

    const deleteButtonCode = (code: number) => void dispatch(
        buttonMessageAction.deleteButtonCode(code),
    );

    const code  = buttonCodeMessages;

    return {
        code,
        codeButton,
        deleteButtonCode,
    };
};
