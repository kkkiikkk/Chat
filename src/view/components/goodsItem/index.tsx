/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import  { FC }  from 'react';
import * as React from 'react';

type Props = {
    id: string,
    name: string,
    price: number,
    poster: string,
    setOrder: Function
}

export const GoodsItem: FC<Props> = (props: Props) => {
    const { name, price, poster, setOrder } = props;

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
                        variant = 'text'
                        onClick = { () => setOrder({
                            id:    props.id,
                            name:  props.name,
                            price: props.price,
                        })
                        }>
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
