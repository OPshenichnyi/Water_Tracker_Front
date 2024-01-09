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
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addWaterVolume } from '../../redux/water/operations';
import { selectAddWaterVolume } from '../../redux/water/selector';
import { toast } from 'react-toastify';

function AddWater({ closeModal }) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [selectedTime, setSelectedTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const waterData = useSelector(selectAddWaterVolume);

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

  const handleSave = async () => {
    if (count === 0)
      return toast.info(
        'Amount of water- cannot be zero please enter a value!'
      );
    if (count > 5000)
      return toast.info('The entered data should not exceed 5000 ml');

    setLoading(true); // Встановити значення loading в true перед диспетчеризацією дії

    const hours = Math.floor(selectedTime / 60);
    const minutes = selectedTime % 60;
    const currentDate = new Date();

    currentDate.setHours(hours, minutes, 0, 0);

    const data = {
      waterVolume: count,
      date: currentDate.toISOString(),
    };

    toast.success('Data saved 👍');

    try {
      await dispatch(addWaterVolume(data));
      closeModal();
    } finally {
      setLoading(false);
    }
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
      />
      <CountSaveBtnBottom>
        <CounterBottom>{count || waterData.waterVolume}ml</CounterBottom>
        <ButtonSave type="button" onClick={handleSave}>
          Save
        </ButtonSave>
        {loading && <Loader />}
      </CountSaveBtnBottom>
    </Wrapper>
  );
}

export default AddWater;
