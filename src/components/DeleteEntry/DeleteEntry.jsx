import React from 'react';
import {
  ButtonCancel,
  ButtonClose,
  ButtonDelete,
  ButtonWrapper,
  DescriptionStyle,
  ModalBox,
  TitleContainer,
  TitleStyle,
} from './DeleteEntry.styled';
import icons from '../../common/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { deleteWaterVolume } from '../../redux/water/operations';

function DeleteEntry({ closeModal, id }) {
  const dispatch = useDispatch();

  const deleteEntry = () => {
    dispatch(deleteWaterVolume(id));
    closeModal();
  };

  return (
    <div>
      <ModalBox>
        <TitleContainer>
          <TitleStyle>Delete entry</TitleStyle>

          <ButtonClose onClick={closeModal}>
            {' '}
            <svg width={12} height={12} stroke="#407BFF">
              <use href={`${icons}#icon-cross`} />
            </svg>
          </ButtonClose>
        </TitleContainer>

        <DescriptionStyle>
          Are you sure you want to delete the entry?
        </DescriptionStyle>
        <ButtonWrapper>
          <ButtonDelete onClick={() => deleteEntry()}>Delete</ButtonDelete>
          <ButtonCancel onClick={closeModal}>Cancel</ButtonCancel>
        </ButtonWrapper>
      </ModalBox>
    </div>
  );
}

export default DeleteEntry;
