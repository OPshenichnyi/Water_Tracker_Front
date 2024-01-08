import styled from 'styled-components';
import color from '../../common/Variables';

export const DailyModal = styled.div`
  position: absolute;
  top: 100%;
  left: -43%;
  transform: translateY(-130%);

  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  gap: 16px;

  width: 292px;
  height: 188px;
  padding: 24px 16px;

  background-color: ${color.whitePrimary};
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  z-index: 2;

  @media screen and (min-width: 768px) {
    left: 50%;
    transform: translate(0%, -131%);
    width: 292px;
  }
  @media screen and (min-width: 1440px) {
    transform: translateY(0);
    transform: translate(0%, -131%);
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  background-color: #fff;
  position: absolute;
  right: 16px;
`;

export const Date = styled.p`
  color: ${color.bluePrimary};
  line-height: 1.25;
`;

export const Value = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: ${color.bluePrimary};
`;
