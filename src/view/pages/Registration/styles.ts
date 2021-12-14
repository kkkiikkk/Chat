// Core
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserBox = styled.div`
    position: relative;
`;

export const LoginBox = styled.div`
@media (max-width: 410px) {
    width: 80%;
  }
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
export const MessageBox = styled.div`
    position: absolute;
    top: 81%;
    margin-top: 70px;
    left: 50%;
    width: 400px;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
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
  color: #baa2cb;
  font-size: 12px;
};
@media (max-width: 410px) {
    width: 80%;
  }
width:300px;
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

export const CustomButton = styled.button<{disabled: boolean}>`
@media (max-width: 430px) {
    width: 40%;
    font-size:8px;
  }
  behavior: 'smooth';
  position: relative;
  width: 180px;
  display: inline-block;
  padding:  10px 20px;
  color: #baa2cb;
  font-size: 24px;
  text-align:center;
  text-decoration: none;
  text-transform: uppercase;
  transition: .5s;
  letter-spacing: 4px;
  background: rgba(0,0,0,.5);
  box-shadow:0 15px 25px rgba(0,0,0,.6);
  ${(props) => !props.disabled && css`
    &:hover {
    background: #baa2cb;
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #baa2cb,
                0 0 25px #baa2cb,
                0 0 50px #baa2cb,
                0 0 100px #baa2cb;
  }
  `}
`;
export const CustomButtonOut = styled.button`
  behavior: 'smooth';
  position: relative;
  width: 180px;
  margin-bottom: 30px;
  margin-top: 20px;
  display: inline-block;
  padding:  10px 20px;
  color: #baa2cb;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: .5s;
  letter-spacing: 4px;
  background: rgba(0,0,0,.5);
  box-shadow:0 15px 25px rgba(0,0,0,.6);
&:hover {
    background: #baa2cb;
    cursor: pointer;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #baa2cb,
                0 0 25px #baa2cb,
                0 0 50px #baa2cb,
                0 0 100px #baa2cb;
  }
`;

export const CustomLink = styled(NavLink)`
  text-decoration: none;
`;
export const CustomSection = styled.section`
overflow-x: hidden;
margin: 0 auto;
@media screen and (max-width: 710px){
        width: 100%
      }
`;
