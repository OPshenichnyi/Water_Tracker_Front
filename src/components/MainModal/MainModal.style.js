import styled from 'styled-components';

export const Modal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw; 
  position: fixed;
  top: 0;
  left: 0;
  transform: scale(0);
  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
  }
  
`;
export const Content = styled.div`
   position: absolute;
  /* top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%); */
 width: 280px;
  height: 540px; 
  background-color: #ffffff;
  border-radius: 10px;
  padding-top: 24px;
  padding-right: 12px;
  padding-bottom: 24px;
  padding-left: 12px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 504px;
    borderradius: 10px;
    padding: 32px 24 px;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 504px;
  }
`;