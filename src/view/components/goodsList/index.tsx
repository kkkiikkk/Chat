import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { TypeGoods, TypeGoodsState  } from '../../pages/data';

import { GoodsItem } from '../goodsItem';

type Props = {
    goods: TypeGoodsState
}

export const GoodsList:FC<Props> = (props: Props) => {
    const { goods } = props;

    return (
        <Grid
            container
            spacing = { 2 }>
            {goods.map((item: TypeGoods) => (
                <GoodsItem
                    key = { item.id }
                    { ...item }
                />
            ))}
        </Grid>
    );
};
