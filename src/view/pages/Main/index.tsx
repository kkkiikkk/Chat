/* eslint-disable max-statements-per-line */
// Core
import { FC, useState } from 'react';
import React from 'react';
import { Container } from '@material-ui/core';
import { ChangeEvent } from 'react';
// Components
import { Basket } from '../../components/basket';
import { Header } from '../../components/header';
import { GoodsList } from '../../components/goodsList';
import { Search } from '../../components/search';
import { Snack } from '../../components/snack';
import { ErrorBoundary } from '../../components/ErrorBoundary';
// Type
import { goods, TypeGoodsState, TypeGoods } from '../data';

export const Main: FC = () => {
    const [ order, setOrder ] = useState<any>([]);
    const [ search, setSearch ] = useState('');
    const [ products, setProducts ] = useState(goods);
    const [ isCartOpen, setCartOpen ] = useState(false);
    const [ isSnackOpen, setSnackOpen ] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        if (!event.target.value) {
            setProducts(goods);
            setSearch('');

            return;
        }


        setSearch(event.target.value);
        setProducts(
            products.filter((good) => good.name.toLowerCase().includes(event.target.value.toLowerCase())),
        );
    };
    const addToOrder = (goodsItem: TypeGoods) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item: TypeGoods) => item.id === goodsItem.id,
        );

        if (indexInOrder > -1) {
            quantity = order[ indexInOrder ].quantity + 1;

            setOrder(order.map((item: TypeGoods)  => {
                if (item.id !== goodsItem.id) { return item; }

                return {
                    id:    item.id,
                    name:  item.name,
                    price: item.price,
                    quantity,
                };
            }));
        } else {
            setOrder([
                ...order,
                {
                    id:    goodsItem.id,
                    name:  goodsItem.name,
                    price: goodsItem.price,
                    quantity,
                },
            ]);
        }
        setSnackOpen(true);
    };
    const removeFromOrder = (goodsItem: string): void  => {
        setOrder(order.filter((item: TypeGoods) => item.id !== goodsItem));
    };

    return (
        <>
            <Header
                handleCart = { () => void setCartOpen(true) }
                orderLen = { order.length }
            />
            <Container >
                <Search
                    value = { search }
                    onChange = { handleChange }
                />
                <GoodsList
                    goods = { products }
                    setOrder = { addToOrder }
                />
            </Container>
            <Basket
                cartOpen = { isCartOpen }
                closeCart = { () => void setCartOpen(false) }
                order = { order }
                removeFromOrder = { removeFromOrder }
            />
            <Snack
                handleClose = { () => void setSnackOpen(false) }
                isOpen = { isSnackOpen }
            />
        </>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
