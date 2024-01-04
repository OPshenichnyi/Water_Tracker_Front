import { toast } from 'react-toastify';
import React, { useState, useEffect } from 'react';
import icons from '../../common/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
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
  BlockWaterTime,
  
  Wrapper,
  
  DataWater,
  DataTime,
} from './.styled';
import {
  decrease,
  generateTimeOptions,
  handleUpdateCount,
  setInitialTime,
} from 'components/Utils/utils';
import { addWaterVolume } from '../../redux/water/operations';
import { selectAddWaterVolume } from '../../redux/water/selector';
import { FormatTime } from '../Calendar/FormatTime/FormatTime';





export default function EditWater({ closeModal, id}) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [selectedTime, setSelectedTime] = useState(0);

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

  const handleSave = () => {
    if (count === 0)
      return toast.info(
        'Amount of water- cannot be zero please enter a value!'
      );
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
    closeModal();
  };



  return (
    <Wrapper>
      <BlockTop>
        <BlockTitle>Edit the entered amount of water</BlockTitle>
        <ButtonClose onClick={closeModal}>
          {' '}
          <svg width={12} height={12} stroke="#407BFF">
            <use href={`${icons}#icon-cross`} />
          </svg>
        </ButtonClose>
      </BlockTop>
      <BlockWaterTime>
        <svg width={36} height={36} fill="#407BFF">
          <use href={`${icons}#icon-glass`} />
        </svg>
        <DataWater>{waterData.waterVolume} ml</DataWater>
        <DataTime>{FormatTime(waterData.date)}</DataTime>
      
      </BlockWaterTime>
      <ValueP>Correct entered data:</ValueP>
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
        placeholder="50"
      />
      <CountSaveBtnBottom>
        <CounterBottom>{waterData.waterVolume}ml</CounterBottom>
        <ButtonSave type="button" onClick={handleSave}>
          Save
        </ButtonSave>
      </CountSaveBtnBottom>
    </Wrapper>
  );
}
