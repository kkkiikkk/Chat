// Core
import React, { FC } from 'react';
import { useSelector } from '../../../tools/hooks';
// import { useUserName } from '../../../bus/profile';

// Components
import { ErrorBoundary } from '../../components';
// eslint-disable-next-line react-hooks/rules-of-hooks
const Messasger: FC = () => {
    const { stateUserSlice } = useSelector((state) => state);

    return (
        <>
            <h1>Helo User: {stateUserSlice.username}</h1>

        </>

    );
};

export default () => (
    <ErrorBoundary>
        <Messasger />
    </ErrorBoundary>
);
