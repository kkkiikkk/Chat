import {  Snackbar } from '@material-ui/core';
import { Alert } from '@mui/material';
import React, { FC } from 'react';

type Props = {
    handleClose: Function,
    isOpen: boolean,
}

export const  Snack: FC<Props> = (props: Props) => {
    return (
        <Snackbar
            autoHideDuration = { 3000 }
            open = { props.isOpen }
            onClose = { () =>  props.handleClose() }>
            <Alert
                severity = 'success'>Товар добавлен в корзину!
            </Alert>
        </Snackbar>
    );
};
