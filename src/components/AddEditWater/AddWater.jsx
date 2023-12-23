// import * as React from 'react';
import { Box} from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import styled from 'styled-components';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  height: 540,
  bgcolor: '#FFFFFF',
  border: '2px solid #000',
  borderRadius: 2.5,
  boxShadow: 24,
  p: 4,
};

const ButtonStyle = styled.button`
width: 256px;
height: 36px;
    border-radius: 10px;
background: #407BFF;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);


`
const ButtonCount = styled.button`
width: 24px;
height: 24px;
    border-radius: 30px;
border: 1px solid #9EBBFF;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.20);


`
const InputStyle = styled.input`
border-radius: 6px;
border: 1px solid #D7E3FF;
width: 120px;
height: 44px;

`


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const increase = () => {
  //   setCount(count + 10);
  // };

  // const decrease = () => {
  //   setCount(count - 10);
  // };

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
          <button onClick={handleClose}>Close modal</button>
          <h3> Add water</h3>
          <p>Choose a value:</p>
          <p>Amount of water:</p>
          <ButtonCount onClick={()=>setCount(count + 10)}>+</ButtonCount>
          <p>{count}</p>
          <ButtonCount onClick={()=>setCount(count - 10)}>-</ButtonCount>
          <p>Recording time:</p>
          <p>Enter the value of the water used:</p>
          <InputStyle
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder="Введіть число"
          />
          <p>{count}</p>
          <ButtonStyle>Save</ButtonStyle>
        </Box>
      </Modal>
    </div>
  );
}
