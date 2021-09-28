/* eslint-disable no-nested-ternary */

// Core
import React, { FC, useState, DetailedHTMLProps } from 'react';
import styled, { css } from 'styled-components';


// Styles
import { Filter, CustomButton, CustomLabel, CustomInput, P  } from './style';

// Hooks
import { useForm } from '../../../tools/hooks/useForm';

type PropsType = {
    handleSubmit: Function,
    handleSubmitMax: Function,
    togleDay: Function
    typeDay: Function
}
interface ButtonProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    // use React.Ref instead of React.LegacyRef to prevent type incompatibility errors with styled-components types
    selected: boolean;
}

export const CustomChekbox = styled.span<ButtonProps>`
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    display: inline-flex;
    align-items: center;
    margin-bottom: 25px;
    &:hover {
    cursor: pointer;
    }
    &::after {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    border: solid 1px #fff;
    border-radius: 3px;
    margin-left: 14px;
    }
    content: '1'
`;

const initialState = {
    minTemperature: '',
    maxTemperature: '',
};

const type = {
    isSunny:  'sunny',
    isCloudy: 'cloudy',
};

export const Filt: FC<PropsType> = (props) => {
    const [ click, setClick ] = useState<number>();

    const [ form, handleChange, , resetForm ] = useForm<typeof initialState>(initialState);
    console.log(props.typeDay())
    const optionType = props.typeDay()

    return (
        <Filter >
            <CustomChekbox
                selected = { optionType === 'cloudy' }
                onClick = { () => {
                    return (
                        setClick(0),
                        props.togleDay(click)
                    );
                }
                }>Облачно
            </CustomChekbox>
            <CustomChekbox
                selected = {true}
                onClick = { () => {
                    return (
                        setClick(1),
                        props.togleDay(click)
                    );
                }
                }>Солнечно
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
