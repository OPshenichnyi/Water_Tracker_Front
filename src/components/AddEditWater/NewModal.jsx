import ReactDOM from 'react-dom';
import {
  ButtonClose,
  ButtonCount,
  InputStyle,
  BlockTop,
  BlockTitle,
  BlockCount,
  BtnCounter,
  ValueP,
  AmountP,
  SelectTime,
  CounterBottom,
  ButtonSave,
  CountSaveBtnBottom,
  Modal,
  Overlay,
  Content,
} from './NewAddWater.styled';
import {
  decrease,
  generateTimeOptions,
  handleUpdateCount,
  setInitialTime,
} from '../Utils/utils';
import React, { useEffect, useState } from 'react';
import icons from '../../common/symbol-defs.svg';

import { useDispatch, useSelector } from 'react-redux';
import { addWaterVolume } from '../../redux/water/operations';
import { selectAddWaterVolume } from '../../redux/water/selector'

function ModalAddWater({ open, closeModal }) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [selectedTime, setSelectedTime] = useState(0);

  const dispatch = useDispatch();
  const waterData = useSelector(selectAddWaterVolume );

  const handleDecrease = () => {
    decrease(count, setCount);
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleUpdateCountWrapper = () => {
    handleUpdateCount(inputValue, setCount, setInputValue);
  };

  const handleInputBlur = () => {
    handleUpdateCountWrapper();
  };

  useEffect(() => {
    setInitialTime(setSelectedTime);
  }, []);

  const handleTimeChange = e => {
    setSelectedTime(parseInt(e.target.value, 10));
  };

  const handleSave = () => {
    const data = {
      waterVolume: count,
      date: new Date().toISOString(),
    };

    dispatch(addWaterVolume(data));
    closeModal();
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <Modal>
      {' '}
      modal
      <Overlay onClick={closeModal}>overlay</Overlay>
      <Content>
        <BlockTop>
          <BlockTitle> Add water</BlockTitle>
          <ButtonClose onClick={closeModal}>
            {' '}
            <svg width={12} height={12} stroke="#407BFF">
              <use href={`${icons}#icon-cross`} />
            </svg>
          </ButtonClose>
        </BlockTop>

        <ValueP>Choose a value:</ValueP>
        <AmountP>Amount of water:</AmountP>

        <BlockCount>
          <ButtonCount onClick={handleDecrease}>
            <svg width={24} height={24} fill="#407BFF">
              <use href={`${icons}#icon-minus`} />
            </svg>
          </ButtonCount>
          <BtnCounter>{count}ml</BtnCounter>
          <ButtonCount onClick={() => setCount(count + 50)}>
            <svg width={24} height={24} fill="#407BFF">
              <use href={`${icons}#icon-plus`} />
            </svg>
          </ButtonCount>
        </BlockCount>

        <AmountP>Recording time:</AmountP>

        <SelectTime value={selectedTime} onChange={handleTimeChange}>
          {generateTimeOptions()}
        </SelectTime>

        <ValueP>Enter the value of the water used:</ValueP>
        <InputStyle
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          placeholder={count}
        />
        <CountSaveBtnBottom>
          <CounterBottom>{waterData.waterVolume}ml</CounterBottom>
          <ButtonSave type="button" onClick={handleSave}>Save</ButtonSave>
        </CountSaveBtnBottom>
      </Content>
    </Modal>,
    document.getElementById('modal')
  );
}

export default ModalAddWater;
