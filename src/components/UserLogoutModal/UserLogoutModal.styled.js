
import styled from 'styled-components';

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 592,
  Height: 208,
  bgcolor: "#FFFFFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};



export const ModalBox = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  width: 280px;
  height: 260px;
 display: inline-flex;
padding: 32px 24px;
flex-direction: column;
justify-content: center;
align-items: center;

border-radius: 10px;
background: #FFF;

& > :not(:last-child) {
    margin-bottom: 24px;
  }
  
  @media screen and (min-width: 768px) {
    width: 592px;
    height: 208px;

  }
`;

export const ButtonWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:24px;



 @media screen and (min-width: 768px) {
  flex-direction: row;
  justify-content: flex-end;
  margin-left:auto;
  }
`;


export const ButtonCancel = styled.button`
display: flex;
padding: 8px 30px;
justify-content: center;
align-items: center;
width:232px;
border-radius: 10px;
background: var(--Secondary-color-5, #D7E3FF);
color: var(--Primery-Color-Blue, #407BFF);
text-align: center;

font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 1.25; 
&:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    width: 160px;


  }


`;

export const ButtonLogout = styled.button`
display: flex;
width:232px;
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
&:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
@media screen and (min-width: 768px) {
    width: 160px;


  }
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


 @media screen and (min-width: 768px) {
 margin-right:auto;

  }
`;

export const ButtonClose = styled.button`
  display: flex;
  
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #fff;
 &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
  
`;

export const TitleContainer = styled.div`
 display: flex;
 gap:112px;

  @media screen and (min-width: 768px) {
 width:100%;
    justify-content:space-between;

  }


`;


