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
  Wrapper,
} from './AddWater.styled';
import {
  decrease,
  generateTimeOptions,
  handleUpdateCount,
  setInitialTime,
} from '../Utils/utils';
import React, { useEffect, useState } from 'react';
import icons from '../../common/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { addWaterVolume } from '../../redux/water/operations';
import { toast } from 'react-toastify';

function AddWater({ closeModal }) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [selectedTime, setSelectedTime] = useState(0);
  const [isValidInput, setIsValidInput] = useState(true);
  const [inputDisabled, setInputDisabled] = useState(false);

  const dispatch = useDispatch();

  const handleDecrease = () => {
    decrease(count, setCount);
  };

  const handleInputChange = event => {
    const inputNumber = event.target.value;
    if (/^\d*$/.test(inputNumber) || !setInputDisabled) {
      setInputValue(inputNumber);
      setIsValidInput(true);
    } else {
      setIsValidInput(false);
      toast.error('please enter the numbers');
    }
  };

  const handleUpdateCountWrapper = () => {
    handleUpdateCount(inputValue, setCount, setInputValue);
  };

  const handleInputBlur = () => {
    handleUpdateCountWrapper();
    setIsValidInput(true);
  };

  useEffect(() => {
    setInitialTime(setSelectedTime);
  }, []);

  const handleTimeChange = e => {
    setSelectedTime(parseInt(e.target.value, 10));
  };

  const handleSave = () => {
    if (count === 0)
      return toast.info(
        'Amount of water- cannot be zero please enter a value!'
      );
    if (count > 5000)
      return toast.info('The entered data should not exceed 5000 ml');

    const hours = Math.floor(selectedTime / 60);
    const minutes = selectedTime % 60;
    const currentDate = new Date();
    currentDate.setHours(hours, minutes, 0, 0);

    const data = {
      waterVolume: count,
      date: currentDate.toISOString(),
    };
    toast.success('Data saved 👍');
    dispatch(addWaterVolume(data));
    setCount(0);
    closeModal();
  };
  const errorBorderStyle = {
    border: '1px solid #EF5050',
  };
  return (
    <Wrapper>
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
        style={isValidInput ? {} : errorBorderStyle}
        disabled={inputDisabled}
      />
      <CountSaveBtnBottom>
        <CounterBottom>{count}ml</CounterBottom>
        <ButtonSave type="button" onClick={handleSave}>
          Save
        </ButtonSave>
      </CountSaveBtnBottom>
    </Wrapper>
  );
}

export default AddWater;
