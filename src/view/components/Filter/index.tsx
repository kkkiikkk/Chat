/* eslint-disable no-nested-ternary */

// Core
import React, { FC, useState } from 'react';


// Styles
import { Filter, CustomButton, CustomLabel, CustomInput, P, CustomChekbox  } from './style';

// Hooks
import { useForm } from '../../../tools/hooks/useForm';

type PropsType = {
    handleSubmit: Function,
    handleSubmitMax: Function,
    togleDay: Function
    typeDay: Function
    resetValue: Function
    resetFiltred: Function
}

const initialState = {
    minTemperature: '',
    maxTemperature: '',
};


export const Filt: FC<PropsType> = (props) => {
    const [ form, handleChange, , resetForm ] = useForm<typeof initialState>(initialState);
    const optionType: string = props.typeDay();
    const [ isClicked, setIsClicked ] = useState<boolean>(true);
    const [ reset, setReset ] = useState<boolean>(true);
    const [ isReset, setIsReset ] = useState<boolean>(Boolean);
    const [ isDisable, setIsDisable ] = useState<boolean>(false);
    const clickNotReset = () => {
        return (
            props.handleSubmit(form.minTemperature),
            props.handleSubmitMax(form.maxTemperature),
            setReset(false),
            props.typeDay(),
            setIsReset(false),
            setIsDisable(true)
        );
    };
    const clickReset = () => {
        return (
            setReset(true),
            setIsReset(true),
            resetForm(form.maxTemperature, form.minTemperature),
            props.togleDay(0),
            props.resetValue(),
            setIsClicked(true),
            setIsDisable(false),
            props.resetFiltred()
        );
    };

    return (
        <Filter >
            <CustomChekbox
                disabled = { isDisable }
                isReset = { isReset }
                selected = { optionType === 'cloudy' }
                onClick = { () => {
                    return (
                        props.togleDay(1),
                        setIsClicked(false)
                    );
                }
                }>Облачно
            </CustomChekbox>
            <CustomChekbox
                disabled = { isDisable }
                isReset = { isReset }
                selected = { optionType === 'sunny' }
                onClick = { () => {
                    return (
                        props.togleDay(2),
                        setIsClicked(false)
                    );
                }
                }>Солнечно
            </CustomChekbox>
            <P>
                <CustomLabel>Минимальная температура</CustomLabel>
                <CustomInput
                    disabled = {    isDisable }
                    name = 'minTemperature'
                    type = 'number'
                    value = { form.minTemperature }
                    onChange = { (event) => void  handleChange(event, true) &&  setIsClicked(false) }
                />
            </P>
            <P>
                <CustomLabel>Максимальная температура</CustomLabel>
                <CustomInput
                    disabled = { isDisable }
                    name = 'maxTemperature'
                    type = 'number'
                    value = { form.maxTemperature }
                    onChange = { (event) => {
                        return (
                            handleChange(event, true),
                            setIsClicked(false)
                        );
                    } }
                />
            </P>
            <CustomButton
                disabled = { isClicked }
                onClick = { !reset ?  clickReset : clickNotReset     }>{reset ?  'Отфильтровать' : 'Сбросить'}
            </CustomButton>
        </Filter>
    );
};
