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
    ${(props) => props.selected && css`
    :before { 
      content: '✓'; 
      position: absolute; 
      right: 7px; 
    } 
    `}

`;

const initialState = {
    minTemperature: '',
    maxTemperature: '',
};


export const Filt: FC<PropsType> = (props) => {
    const [ click, setClick ] = useState<number>(0);

    const [ form, handleChange, , resetForm ] = useForm<typeof initialState>(initialState);
    console.log(props.typeDay());
    const optionType = props.typeDay();

    return (
        <Filter >
            <CustomChekbox
                selected = { optionType === 'cloudy' }
                onClick = { () => {
                    setClick(1);

                    return (
                        props.togleDay(1)
                    );
                }
                }>Облачно
            </CustomChekbox>
            <CustomChekbox
                selected = { optionType === 'sunny' }
                onClick = { () => {
                    setClick(2);

                    return (
                        props.togleDay(2)
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
                    props.handleSubmitMax(form.maxTemperature),
                    props.typeDay(props.typeDay())
                );
            }
            }>Отфильтровать
            </CustomButton>
        </Filter>
    );
};
