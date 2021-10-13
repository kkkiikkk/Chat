// Core
import React, { FC, useState } from 'react';
import { useSelector } from '../../../tools/hooks';
import { useAuth } from '../../../bus/profile/saga';
import { useUsers } from '../../../bus/messages';
// Components
import { ErrorBoundary } from '../../components';
import { Box, Typography, CardContent } from '@mui/material';
import  moment  from 'moment';
// Styles
import { GlobalStylesComponents } from '../Registration/GlobalStyles';
import { CustomButton, CustomInput } from '../Registration/styles';
import { NavLink } from 'react-router-dom';
import { useUserName } from '../../../bus/profile';
import { useMessage } from '../../../bus/messages/saga';


const initial = {
    username: '',
    text:     '',
};

const Messasger: FC = () => {
    const { stateUserSlice } = useSelector((state) => state);
    const { logOutUser } = useAuth();
    const { deleteUserName } = useUserName();
    const { users } = useUsers();
    const [ message, setMessage ] = useState<string>(initial.text);
    const { createMessages } = useMessage();

    const p = users.map(({ text, _id, username, createdAt, updatedAt }) => {
        return (
            <CardContent
                key = { _id }
                sx = {{ height: '100px', margin: '40px' }}>
                <Typography sx = {{ height: '40px', backgroundColor: 'purple' }}>{username}</Typography>
                <Typography sx = {{ height: '40px', backgroundColor: 'purple' }}>{text}</Typography>
                <Typography sx = {{ height: '40px', backgroundColor: 'purple' }}>{moment(createdAt).format('LT')}</Typography>
                <Typography sx = {{ height: '40px', backgroundColor: 'purple' }}>{createdAt === updatedAt ? 'Неисправлено' : 'Исправлено' }</Typography>
            </CardContent>
        );
    }).reverse();
    initial.username = stateUserSlice.username;

    return (
        <>
            <GlobalStylesComponents />
            <CustomButton
                type = 'submit'
                onClick = { () => {
                    logOutUser();
                    deleteUserName();
                } }>
                <NavLink
                    to = '/login'>
                    Log Out
                </NavLink>
            </CustomButton>
            <Typography sx = {{ fontSize: '40px', margin: '0 auto' }}>Helo User: {stateUserSlice.username}</Typography>
            <Box
                sx = {{
                    float:          'left',
                    clear:          'both',
                    width:          '600px',
                    padding:        '0 10px',
                    maxHeight:      '100%',
                    overflowY:      'auto',
                    display:        'flex',
                    flexDirection:  'column',
                    justifyContent: 'center',
                    margin:         '0 auto',

                }}>
                {p}
                <CustomInput
                    type = 'text'
                    value = { message }
                    onChange = { (event) => void setMessage(event.target.value) }>
                </CustomInput>
                <CustomButton
                    onClick = { () =>  {
                        createMessages({ text: message, username: stateUserSlice.username });
                        setMessage('');
                    } }>
                    Send
                </CustomButton>
            </Box>
        </>

    );
};

export default () => (
    <ErrorBoundary>
        <Messasger />
    </ErrorBoundary>
);
