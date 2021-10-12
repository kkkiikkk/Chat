// Core
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserBox = styled.div`
    position: relative;
`;

export const LoginBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgb(14 1 1 / 50%);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);
    border-radius: 10px;
`;

export const UserName = styled.h2`  
margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size:48px;
`;

export const CustomInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 32px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  &:focus ~ label{
    top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
  };
`;

export const CustomLabel = styled.label`
      position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
`;

export const CustomButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px;
  background: rgba(0,0,0,.5);
  box-shadow:0 15px 25px rgba(0,0,0,.6);
&:hover {
    background: #03e9f4;
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;
  }
`;

export const CustomLink = styled(NavLink)`
  text-decoration: none;
`;
