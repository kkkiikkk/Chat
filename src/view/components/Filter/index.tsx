
// Core
import React, { FC, useState } from 'react';
import styled from 'styled-components';

// Styles
import { Filter, CustomButton, CustomLabel, CustomInput, P  } from './style';

// Hooks
import { useForm } from '../../../tools/hooks/useForm';

type PropsType = {
    handleSubmit: Function,
    handleSubmitMax: Function,

}

export const CustomChekbox = styled.span`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    display: inline-flex;
    align-items: center;
    margin-bottom: 25px;
    :hover {
    cursor: pointer;
    }
    ::after {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    border: solid 1px #fff;
    border-radius: 3px;
    margin-left: 14px;
    }
    ::before {
    content: '1';
    position: absolute;
    right: 7px;
}
`;
const initialState = {
    minTemperature: '',
    maxTemperature: '',
};

export const Filt: FC<PropsType> = (props) => {
    const [ text, setText ] = useState('');

    const [ form, handleChange, , resetForm ] = useForm<typeof initialState>(initialState);

    return (
        <Filter >
            <CustomChekbox >Облачно
            </CustomChekbox>
            <CustomChekbox >Солнечно
            </CustomChekbox>
            <P>
                <CustomLabel>Минимальная температура</CustomLabel>
                <CustomInput
                    name = 'minTemperature'
                    type = 'number'
                    value = { form.minTemperature }
                    onChange = { (event) => void  handleChange(event, true) }
                />
            </P>
            <P>
                <CustomLabel>Максимальная температура</CustomLabel>
                <CustomInput
                    name = 'maxTemperature'
                    type = 'number'
                    value = { form.maxTemperature }
                    onChange = { (event) => void  handleChange(event, true) }
                />
            </P>
            <CustomButton onClick = { () => {
                return (
                    props.handleSubmit(form.minTemperature),
                    props.handleSubmitMax(form.maxTemperature)

                );
            }
            }>Отфильтровать
            </CustomButton>
        </Filter>
    );
};
