import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { useState, useEffect } from 'react';
import icons from '../../common/symbol-defs.svg';
import {
  style,
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
  DataWater,
  DataTime,
} from './EditWaterModal.styled';
import {
  decrease,
  generateTimeOptions,
  handleUpdateCount,
  setInitialTime,
} from 'components/Utils/utils';

export default function BasicModalEdit() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [selectedTime, setSelectedTime] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <div>
      <button onClick={handleOpen}>Open modal Edit</button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div>
            <BlockTop>
              <BlockTitle>Edit the entered amount of water</BlockTitle>
              <ButtonClose onClick={handleClose}>
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
              <DataWater>water</DataWater>
              <DataTime>time</DataTime>
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
              <CounterBottom>{count}ml</CounterBottom>
              <ButtonSave type="button">Save</ButtonSave>
            </CountSaveBtnBottom>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
