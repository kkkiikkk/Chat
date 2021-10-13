// Core
import  styled, { css }  from 'styled-components';


export const Message = styled.div<{userMessage: boolean}>`
border: 1px solid #ddd;
  padding: 7px 15px;
  border-radius: 20px;
  font-size: 23px;
  background:  ${(props: {userMessage: boolean}) => props.userMessage ? '#00cec9' : 'darkgreen'};  
  margin-bottom: 20px;
  width: 80%;
  word-wrap: break-word;
  float: ${(props: {userMessage: boolean}) => props.userMessage ? 'right' : 'left'};
`;

export const Chat = styled.div`
      border: 1px solid #ddd;
  width: 700px;
  height: 428px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 50px;
  margin: 0 auto;
`;

export const MessagesContainer = styled.div`
height: 342px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 15px 10px;
`;

export const CustomInput = styled.input`

  padding: 10px;
  width: 620px;
  border: 0;
  margin-right: 0px;
  font-size:30px;
  &:focus {
  left: 0;
  color: #03e9f4;
  }
`;

export const Footer = styled.div`
  display: flex;
  border-top: 1px solid #ddd;

`;

export const Send = styled.div<{disabled: boolean}>`
text-align:center;
background-color: #00cec9;
padding:8px;
margin:0;
${(props) => !props.disabled && css`
    &:hover {
    cursor: pointer;
    };
`};   
`;
