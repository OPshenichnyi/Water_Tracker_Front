import React from "react";
import { TitleName, ButtonClose } from "../Component/ComponentSetingStyled";
import sprite from "../../../common/symbol-defs.svg";

export const TitleNameSet = ({ title }) => {
  return (
    <>
      <TitleName>{title}</TitleName>
    </>
  );
};

export const BtnClose = ({ closeModal }) => {
  return (
    <>
      <ButtonClose onClick={closeModal}>
        <svg width={12} height={12} stroke="#407BFF">
          <use href={`${sprite}#icon-cross`} />
        </svg>
      </ButtonClose>
    </>
  );
};
