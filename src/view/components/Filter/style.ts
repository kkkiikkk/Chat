// Core
import styled, { css } from 'styled-components';
import { DetailedHTMLProps } from 'react';


interface ButtonProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    // use React.Ref instead of React.LegacyRef to prevent type incompatibility errors with styled-components types
    selected: boolean;
    isReset: boolean;
    disabled: boolean
}

export const Filter = styled.div`
    position: absolute;
    top: 2%;
    right: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

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
    ${(props) => !props.disabled && css`
    &:hover {
    cursor: pointer;
    };
    `}
    &::after {
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    border: solid 1px #fff;
    border-radius: 3px;     
    margin-left: 14px;
    }
    ${(props) => props.selected  && css`
    ::before { 
      content: '✓'; 
      position: absolute; 
      right: 7px; 
    } 
    `}
    ${(props) => props.isReset && css`
    ::before
        content: '';
    `}
`;

export const P = styled.p`
    margin-bottom: 26px;
`;

export const CustomInput = styled.input<{disable?: boolean}>`
    border-bottom: solid 1px #fff;
    border-top: none;
    border-right: none;
    border-left: none;
    background: transparent;
    width: 40px;
    outline: none;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
`;

export const CustomLabel = styled.label`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    margin-right: 14px;
`;

export const CustomButton = styled.button<{disabled?: boolean}>`
    background-color: #C584BC;
    border: none;
    padding: 10px 15px;
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
    ${(props) => !props.disabled && css`
    :hover {
    cursor: pointer;
    background-color: #966590;
        };
    `};
`;
