import { IconButton, ListItem, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Close } from '@material-ui/icons';

type Props = {
    name: string,
    price: number,
    quantity: number,
}

export const BasketItem: FC<Props> = ({  name, price, quantity }: Props) => {
    return (
        <ListItem>
            <Typography
                variant = 'body1'>
                {name} {price}грн x{quantity}
            </Typography>
            <IconButton>
                <Close />
            </IconButton>
        </ListItem>
    );
};

