import styled from 'styled-components';
import color from '../../common/Variables';

export const Wrapper = styled.div`
  display:flex;

  align-items: center;

`;

export const Button = styled.button`
 color: ${color.bluePrimary};
margin-left:8px;
text-align:center;
background: #FFFF;


`;
export const Svg = styled.svg`
 fill: ${color.bluePrimary};



`;

export const Modal = styled.div`
  position: absolute;
  top:50%;
  right:35%;
  width: 118px;
  height: 88px;
 padding: 12px;
 border-radius:3px;
 background: #FFFF;
 box-shadow: 0px 4px 8px 0px #407BFF33;

`;
