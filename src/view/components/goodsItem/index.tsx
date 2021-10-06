/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import  { FC }  from 'react';
import * as React from 'react';

type Props = {
    name: string,
    price: number,
    poster: string
}

export const GoodsItem: FC<Props> = (props: Props) => {
    const { name, price, poster } = props;

    return (
        <Grid
            item
            md = { 4 }
            xs = { 12 }>
            <Card sx = {{
                height: '100%',
            }}>
                <CardMedia
                    alt = { name }
                    component = 'img'
                    image = { poster }
                    sx = {{ height: 140 }}
                    title = { name }
                />
                <CardContent>
                    <Typography
                        component = 'h3'
                        variant = 'h6'>
                        {name}
                    </Typography>
                    <Typography variant = 'body1'>Цена: {price} грн.</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant = 'text'>
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
