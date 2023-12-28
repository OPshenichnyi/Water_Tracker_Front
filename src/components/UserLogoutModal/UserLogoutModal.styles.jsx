import styled from 'styled-components';
import { Button } from '@mui/material';

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 592,
  height: 208,
  bgcolor: '#FFFFFF',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};

export const ButtonCancel = styled(Button)`
  background: #EF5050;
  padding: 10px 30px;
  width: 160px;
  height: 44px;
  border-radius: 10px;
  color: #FFFFFF;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;

export const ButtonLogout = styled(Button)`
  background: #D7E3FF;
  padding: 10px 30px;
  width: 160px;
  height: 44px;
  border-radius: 10px;
  color: #407BFF;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;

export const titleStyle = {
  color: '#407bff',
  fontFamily: 'Roboto',
  fontWeight: 500,
  fontSize: 26,
  lineHeight: 32,
};

export const descriptionStyle = {
  color: '#407bff',
  fontFamily: 'Roboto',
  fontWeight: 500,
  fontSize: 18,
  lineHeight: 20,
};
