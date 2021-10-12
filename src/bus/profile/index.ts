// Core
import { useDispatch } from 'react-redux';


// Action
import { stateUserActions } from './slice';


export const useUserName = () => {
    const dispatch = useDispatch();
    const userName = (userName: string) => void dispatch(
        stateUserActions.introducedUserName(userName),
    );


    return {
        userName,
    };
};
