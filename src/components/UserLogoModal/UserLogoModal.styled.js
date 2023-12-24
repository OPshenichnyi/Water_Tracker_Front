import styled from 'styled-components';
import color from '../../common/Variables';

export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;

`;

export const Button = styled.button`
 color: ${color.bluePrimary};
margin-right:8px;
text-align:center;
background: #FFFF;
font-size: 16px;

`;

export const Modal = styled.div`
  position: absolute;
  top:5%;
  right:20%;
  width: 118px;
  height: 88px;
 padding: 12px;
 border-radius:3px;
 background: #FFFF;
 box-shadow: 0px 4px 8px 0px #407BFF33;

`;
