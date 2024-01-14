import styled from 'styled-components';
import color from '../../common/Variables';



export const Wrapper = styled.ul`
  display:flex;
  flex-direction:column;
  align-items: center;
  

`;

export const Button = styled.button`
 color: ${color.bluePrimary};

text-align:center;
background: #FFFF;
font-size: 16px;
 &:focus,
  &:hover {
    outline: none;
    color:${color.secondaryLightOrange};
  }

`;

export const Modal = styled.div`
  position: absolute;

   top: ${({ position }) => position.top}px;
  left: ${({ position }) => position.left-10}px;
  transform: translate(-50%);
  width: 118px;
  height: 88px;
  padding: 16px;
  background: #FFFF;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.20);
`;

export const Svg = styled.svg`
  margin-right:8px;
  stroke:${color.bluePrimary};

   &:focus,
  &:hover {
    outline: none;
    stroke:${color.secondaryLightOrange};
  }


`;

export const Item = styled.li`
  display:flex;
  align-items: center;
  &:not(:last-child) {
   margin-bottom: 16px;
  }

`;
