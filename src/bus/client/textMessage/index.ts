// Core
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../tools/hooks/useSelector';

// Action
import { textMessageAction } from './slices';

export const useTextMessage = () => {
    const dispatch = useDispatch();
    const { textMessage } = useSelector((state) => state);
    const textMessages = (text: string) => void dispatch(
        textMessageAction.textMessage(text),
    );

    const clearMessages =  () => void dispatch(
        textMessageAction.clearMessage(),
    );
    const deleteElements =  () => void dispatch(
        textMessageAction.deleteElement(),
    );
    const text = textMessage;

    return {
        text,
        textMessages,
        clearMessages,
        deleteElements,
    };
};
