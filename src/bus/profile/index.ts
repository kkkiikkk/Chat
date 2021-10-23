// Core
import { useDispatch } from 'react-redux';


// Action
import { stateProfileActions } from './slice';

// Hooks
import { useSelector } from '../../tools/hooks';

export const useUserProfile = () => {
    const dispatch = useDispatch();
    const { stateUserSlice } = useSelector((state) => state);

    const deleteUserName = () => void dispatch(
        stateProfileActions.introducedUserName(''),
    );

    const userName = stateUserSlice.username;

    return {
        deleteUserName,
        userName,
    };
};
