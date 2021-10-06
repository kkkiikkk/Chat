import { TextField } from '@material-ui/core';
import React, { FC } from 'react';

type Props = {
    value: string, onChange: any
}

export const Search:FC<Props>  = (props: Props) => {
    const { onChange, value } = props;

    return (
        <TextField
            fullWidth
            label = 'search'
            sx = {{
                mb: '1.5rem',
            }}
            type = 'search'
            value = { value }
            variant = 'standard'
            onChange = {  onChange }
        />
    );
};
