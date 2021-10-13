// Core
import { useDispatch } from 'react-redux';


// Action
import { stateUserActions } from './slice';


export const useUserName = () => {
    const dispatch = useDispatch();
    const deleteUserName = () => void dispatch(
        stateUserActions.introducedUserName(''),
    );


    return {
        deleteUserName,
    };
};
