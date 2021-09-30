
// Core
import React, { FC } from 'react';


// Styles
import { Filter, CustomButton, CustomLabel, CustomInput, P, CustomChekbox  } from './style';

// Hooks
import { useForm } from '../../../tools/hooks/useForm';
import { useFilterStyle } from '../../../tools/hooks/useFilterStyle';

type PropsType = {
    handleSubmit: Function,
    handleSubmitMax: Function,
    togleDay: Function
    typeDay: Function
    resetMax: Function
    resetMin: Function
}

const initialState = {
    minTemperature: '',
    maxTemperature: '',
};


export const Filt: FC<PropsType> = (props) => {
    const [ form, handleChange, , resetForm ] = useForm<typeof initialState>(initialState);
    const optionType: string = props.typeDay();
    const {
        clickFalse,
        clickTrue,
        isClicked,
        clickResetFalse,
        clickResetTrue,
        reset,
        clickIsResetFalse,
        clickIsResetTrue,
        isReset,
        clickIsDisableFalse,
        clickIsDisableTrue,
        isDisable,
    } = useFilterStyle();
    const clickNotReset = () => {
        return (
            props.handleSubmit(form.minTemperature),
            props.handleSubmitMax(form.maxTemperature),
            clickResetTrue(),
            props.typeDay(),
            clickIsResetTrue(),
            clickIsDisableFalse()
        );
    };
    const clickReset = () => {
        return (
            clickResetFalse(),
            clickIsResetFalse(),
            resetForm(form.maxTemperature, form.minTemperature),
            props.togleDay('reset'),
            clickFalse(),
            clickIsDisableTrue(),
            props.resetMax('max'),
            props.resetMin('min')
        );
    };

    return (
        <Filter >
            <CustomChekbox
                disabled = { isDisable }
                isReset = { isReset }
                selected = { optionType === 'cloudy' }
                onClick = { () => {
                    if (isClicked) {
                        return (
                            props.togleDay('cloudy'),
                            clickTrue()
                        );
                    }
                }
                }>Облачно
            </CustomChekbox>
            <CustomChekbox
                disabled = { isDisable }
                isReset = { isReset }
                selected = { optionType === 'sunny' }
                onClick = { () => {
                    if (isClicked) {
                        return (
                            props.togleDay('sunny'),
                            clickTrue()
                        );
                    }
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
                    onChange = { (event) => {
                        return (
                            handleChange(event, true),
                            clickTrue()
                        );
                    } }
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
                            clickTrue()
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
