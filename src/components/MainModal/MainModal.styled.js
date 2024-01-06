import styled from "styled-components";

export const Modal = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  transform: scale(0);
  display: flex;
  overflow: auto;
  &.active {
    transform: scale(1);
    align-items: center;
    justify-content: center;
  }
`;
export const Content = styled.div`
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
`;
