import styled from "styled-components";
import color from "../../common/Variables";

export const DailyModal = styled.div`
  box-sizing: border-box;
  width: 292px;
  height: 188px;
  background-color: ${color.whitePrimary};
  display: inline-flex;
  padding: 24px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  z-index: 1;
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
