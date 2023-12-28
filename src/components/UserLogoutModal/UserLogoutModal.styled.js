
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

`;



export const Svg = styled.svg`
  margin-right:8px;
  

`;

export const Item = styled.li`
  &:not(:last-child) {
   margin-bottom: 16px;
  }
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 280px;
  height: 260px;
 display: inline-flex;
padding: 32px 24px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
border-radius: 10px;
background: #FFF;
`;

export const ButtonCancel = styled.button`
display: flex;
padding: 8px 30px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
background: var(--Secondary-color-5, #D7E3FF);
color: var(--Primery-Color-Blue, #407BFF);
text-align: center;

font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.25; 
`;

export const ButtonLogout = styled.button`
display: flex;
padding: 8px 30px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
background: var(--Secondary-color-3, #EF5050);
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
color: #FFF;
text-align: center;
font-size: 16px;
line-height: 1.25; 
`;

export const TitleStyle = styled.h2`
color: #2F2F2F;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 1.23077; 
`;

export const DescriptionStyle = styled.p`
color: #2F2F2F;

font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 1.111; 
`;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #fff;
`;



export const Backdrop = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1100;
    transition: opacity color 0.3s ease-in-out ,visibility color 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.80);
    position: fixed;
    top: 0;
    left: 0;

 width: 100%;
  height: 100%;
  z-index: 2000; /* Установите нужное значение */
  transition: opacity color 0.3s ease-in-out, visibility color 0.3s ease-in-out;
  background: rgba(0, 0, 0, 0.80);
  position: fixed;
  top: 0;
  left: 0;


`;



