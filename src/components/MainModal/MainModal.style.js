import styled from "styled-components";

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
export const Content = styled.div``;
