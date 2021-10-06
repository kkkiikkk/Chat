import React from 'react';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingBasket } from '@material-ui/icons';
import { FC } from 'react';
type Props = {
    handleCart: Function,
    orderLen: number,
}

export const  Header: FC<Props> = ({ handleCart, orderLen }: Props) => {
    return (
        <AppBar
            position = 'static'
            sx = {{ background: 'purple' }}>
            <Toolbar>
                <Typography
                    component = 'span'
                    sx = {{ flexGrow: 1 }}
                    variant = 'h6'>
                    Rosik Shop
                </Typography>
                <IconButton
                    color = 'inherit'
                    onClick = { () => void handleCart() }>
                    <Badge
                        badgeContent = { orderLen }
                        color = 'secondary'>
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
