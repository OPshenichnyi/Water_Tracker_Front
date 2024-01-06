import React from 'react';
import icons from '../../common/symbol-defs.svg';
import {
  AmountWater,
  BlockAmount,
  BlockAmountText,
  BlockFormula,
  BlockTitle,
  BlockTop,
  ButtonClose,
  ButtonSave,
  ButtonSaveWrap,
  ContainerGender,
  Description,
  DescriptionSpan,
  Formula,
  FormulaSpan,
  InputStyle,
  SecondTitle,
  TextP,
  Wrapper,
} from './EditDailyNorma.styled';

function EditDailyNorma({ closeModal }) {
  return (
    <Wrapper>
      <BlockTop>
        <BlockTitle>My daily norma</BlockTitle>
        <ButtonClose onClick={closeModal}>
          <svg width={12} height={12} stroke="#407BFF">
            <use href={`${icons}#icon-cross`} />
          </svg>
        </ButtonClose>
      </BlockTop>

      <BlockFormula>
        <li>
          <Formula>
            For girl:<FormulaSpan>V=(M*0,03) + (T*0,4)</FormulaSpan>{' '}
          </Formula>
        </li>
        <li>
          <Formula>
            For man:<FormulaSpan>V=(M*0,04) + (T*0,6)</FormulaSpan>
          </Formula>
        </li>
      </BlockFormula>
      <Description>
        <DescriptionSpan>* </DescriptionSpan>V is the volume of the water norm
        in liters per day, M is your body weight, T is the time of active
        sports, or another type of activity commensurate in terms of loads (in
        the absence of these, you must set 0)
      </Description>

      <SecondTitle>Calculate your rate:</SecondTitle>
      <ContainerGender>
        <label>
          <input
            type="radio"
            name="gender"
            value="girl"
            //   checked={formik.values.gender === "girl"}
            //   onChange={formik.handleChange}
          />
          <label>For girl</label>
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="man"
            //   checked={formik.values.gender === "man"}
            //   onChange={formik.handleChange}
          />
          <label>For man</label>
        </label>
      </ContainerGender>

      <TextP>Your weight in kilograms:</TextP>

      <InputStyle
        type="text"
        // value={inputValue}
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
        placeholder="0"
      />
      <TextP>
        The time of active participation in sports or other activities with a
        high physical. load:
      </TextP>

      <InputStyle
        type="text"
        // value={inputValue}
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
        placeholder="0"
      />
      <BlockAmount>
        <BlockAmountText>
          The required amount of water in liters per day:
        </BlockAmountText>
        <AmountWater>1.8 L</AmountWater>
      </BlockAmount>
      <SecondTitle>Write down how much water you will drink:</SecondTitle>
      <InputStyle
        type="text"
        // value={inputValue}
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
        placeholder="0"
      />
      <ButtonSaveWrap>
        <ButtonSave type="button">Save</ButtonSave>
      </ButtonSaveWrap>
    </Wrapper>
  );
}

export default EditDailyNorma;
