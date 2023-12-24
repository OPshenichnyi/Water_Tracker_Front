import { Box } from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';

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
} from './AddWater.styled';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const increase = () => {
  //   setCount(count + 10);
  // };

  const decrease = () => {
    if(count <= 0){
     return setCount (0)
    }
    setCount(count - 50);
  };

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleUpdateCount = () => {
    const newValue = parseInt(inputValue, 10);
    if (!isNaN(newValue)) {
      setCount(newValue);
      setInputValue('');
    } else {
      alert('Будь ласка, введіть число.');
    }
  };

  const handleInputBlur = () => {
    handleUpdateCount();
  };

  return (
    <div>
      <button onClick={handleOpen}>Open modal</button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <BlockTop>
            <BlockTitle> Add water</BlockTitle>
            <ButtonClose onClick={handleClose}>
              {' '}
              <svg width={12} height={12} stroke="#407BFF">
                <use href={`${icons}#icon-cross`} />
              </svg>
            </ButtonClose>
          </BlockTop>

          <ValueP>Choose a value:</ValueP>
          <AmountP>Amount of water:</AmountP>

          <BlockCount>
            <ButtonCount onClick={decrease}>
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
          <SelectTime>time</SelectTime>
          <ValueP>Enter the value of the water used:</ValueP>
          <InputStyle
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Введіть число"
          />
          <div>
          <CounterBottom>{count}ml</CounterBottom>
          <ButtonSave type='button'>Save</ButtonSave>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// const TimeSelector = () => {
//   const [selectedTime, setSelectedTime] = useState(0);

//   // Генеруємо варіанти часу з інтервалом 5 хвилин
//   const generateTimeOptions = () => {
//     const options = [];
//     for (let i = 0; i < 24 * 60; i += 5) {
//       const hours = Math.floor(i / 60);
//       const minutes = i % 60;
//       const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
//       options.push(
//         <option key={i} value={i}>
//           {timeString}
//         </option>
//       );
//     }
//     return options;
//   };

//   // Отримання поточного часу та встановлення його як початкового значення
//   useEffect(() => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const currentTime = hours * 60 + minutes;
//     setSelectedTime(currentTime - (currentTime % 5)); // Округлення до найближчого значення з інтервалом 5 хвилин
//   }, []);

//   // Обробник зміни вибраного часу
//   const handleTimeChange = (e) => {
//     setSelectedTime(parseInt(e.target.value, 10));
//   };

//   return (
//     <div>
//       <select value={selectedTime} onChange={handleTimeChange}>
//         {generateTimeOptions()}
//       </select>
//       <p>Вибраний час: {Math.floor(selectedTime / 60).toString().padStart(2, '0')}:
//       {(selectedTime % 60).toString().padStart(2, '0')}</p>
//     </div>
//   );
// };

// export default TimeSelector;
