/* eslint-disable max-statements-per-line */
import { FC, useState } from 'react';
import React from 'react';
import { ChangeEvent } from 'react';
import { Basket } from '../../components/basket';
import { Header } from '../../components/header';
import { GoodsList } from '../../components/goodsList';
import { Search } from '../../components/search';
import { Snack } from '../../components/snack';

import { goods, TypeGoodsState } from '../data';
import { Container } from '@material-ui/core';
import { ErrorBoundary } from '../../components/ErrorBoundary';

export const Main: FC = () => {
    const [ order, setOrder ] = useState<TypeGoodsState>([]);
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
                />
            </Container>
            <Basket
                cartOpen = { isCartOpen }
                closeCart = { () => void setCartOpen(false) }
                order = { order }
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
