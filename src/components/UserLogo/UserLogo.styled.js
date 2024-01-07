import styled from "styled-components";
import color from "../../common/Variables";

export const User = styled.div`
  display: flex;
  align-items: center;
`;



export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const ButtonMenu = styled.button`
  color: ${color.bluePrimary};
  margin-left: 4px;
  text-align: center;
  background: #ffff;
`;

export const ButtonAvt = styled.button`
  color: ${color.bluePrimary};
  text-align: center;
  background: #ffff;
`;
export const Svg = styled.svg`
  fill: ${color.bluePrimary};
  position: relative;
`;

export const Avatar = styled.div`
  width: 28px;
  height: 28px;
  overflow: hidden;
  background: #fff;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border: ${color.bluePrimary} 1px solid;
  text-align: center;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
text-align: right;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.25; 
`;

