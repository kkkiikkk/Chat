import { IconButton, ListItem, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Close } from '@material-ui/icons';

type Props = {
    id: string,
    name: string,
    price: number,
    quantity: number,
    removeFromOrder: Function,
}

export const BasketItem: FC<Props> = ({ id, name, price, quantity, removeFromOrder }: Props) => {
    return (
        <ListItem>
            <Typography
                variant = 'body1'>
                {name} {price}грн x{quantity}
            </Typography>
            <IconButton
                onClick = { () => removeFromOrder(id) }>
                <Close />
            </IconButton>
        </ListItem>
    );
};

