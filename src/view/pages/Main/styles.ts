// Core
import  styled, { css }  from 'styled-components';


export const Message = styled.div<{userMessage: boolean}>`
border: 1px solid #ddd;
  padding: 7px 15px;
  border-radius: 20px;
  font-size: 23px;
  background:  ${(props: { userMessage: boolean }) => props.userMessage ? '#2b0e34' : '#1a071b'};
  margin-bottom: 20px;
  width: 60%;
  word-wrap: break-word;
  float: ${(props: {userMessage: boolean}) => props.userMessage ? 'right' : 'left'};
  `;

export const Chat = styled.div`
      
      width: 700px;
      height: 428px;
      border-radius: 8px;
      overflow: hidden;
      margin-left: 50px;
      margin: 0 auto;
      @media screen and (max-width: 710px){
        width: auto
      }
      `;

export const MessagesContainer = styled.div`
background-image: url('https://wallpapercave.com/wp/wp2039804.png');
      /* -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover; */
        background-size: cover;
height: 342px;
  overflow-y: scroll;
  padding: 15px 10px;
  ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
  border-radius: 4px;
}
::-webkit-scrollbar {
  width: 2px;
}

`;

export const CustomInput = styled.input`

  padding: 10px;
  width: 90%;
  margin-right: 0px;
  font-size:30px;
  &:focus {
  left: 0;
  color: #000039;

  }
`;

export const Footer = styled.div`
  display: flex;
  border-top: 1px solid #ddd;


`;

export const Send = styled.div<{disabled: boolean}>`
/* text-align:center; */
background-color: #E598AE;
padding:11px;
color: white;
margin:0;
${(props) => !props.disabled && css`
    &:hover {
    cursor: pointer;
    };
`};   

`;

export const Cancel = styled.div<{visible: boolean}>`
text-align:center;
background-color: #EBC4D1;
border-radius: 8px;
color: #E598AE;
font-size: 30px;
padding:8px;
margin:0;
display: ${(props) => props.visible ? 'block' : 'none'};
cursor: ${(props) => props.visible ? 'pointer' : 'none'};

`;

export const StyleP = styled.p`
color:white;
font-size: 10px;
`;


export const ButtonKeyBoard = styled.div`

margin: 0 auto;
margin-top: 20px;
background-color: #E598AE;
border-radius: 4px;
font-size: 20px;
width: 300px;
text-align: center;
padding:5px;
color: whitesmoke;
&:hover{
  cursor: pointer
}
`;


export const DeleteButton = styled.button`
  background-color: #E598AE;
  border-radius: 8px;
  width: 60px;
  color: darkblue;
  opacity: 1;
  float:right;
  
`;
export const StyleS = styled.p`
color: white;
margin: 3px;
clear: both;
`;
