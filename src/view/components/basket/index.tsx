/* eslint-disable no-undefined */
/* eslint-disable no-mixed-operators */
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { ShoppingBasket } from '@material-ui/icons';
import React, { FC } from 'react';
import { BasketItem } from '../basketItem';
import { TypeGoods, TypeGoodsState } from '../../pages/data';


type Props = {
    cartOpen: boolean,
    closeCart: Function,
    order: TypeGoodsState,
    removeFromOrder: Function,
}

export const Basket: FC<Props> = (props: Props) => {
    const {
        cartOpen,
        closeCart,
        order = [],
        removeFromOrder,
    } = props;

    return (
        <Drawer
            anchor = 'right'
            open = { cartOpen }
            onClose = { () => closeCart() }>
            <List sx = {{ width: '400px' }}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary = 'Корзина' />
                </ListItem>
                <Divider />

                {!order.length ? (
                    <ListItem>Корзина пуста!</ListItem>
                ) : (
                    <>
                        {order.map((item: TypeGoods) => (
                            <BasketItem
                                key = { item.name }
                                removeFromOrder = { removeFromOrder }
                                { ...item }
                            />
                        ))}
                        <Divider />
                        <ListItem>
                            <Typography sx = {{ fontWeight: 700 }}>
                                Общая стоимость:{''}
                                {order.reduce((acc: number, item:TypeGoods): number => {
                                    return acc + item.price * item.quantity;
                                }, 0)}{' '}
                                грн.
                            </Typography>
                        </ListItem>
                    </>
                )}

            </List>
        </Drawer>
    );
};
