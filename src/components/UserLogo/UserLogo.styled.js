import styled from "styled-components";
import color from "../../common/Variables";

export const Wrapper = styled.div`
  display: flex;

  align-items: center;
  z-index: 1000;
`;

export const Button = styled.button`
  color: ${color.bluePrimary};
  margin-left: 8px;
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
    padding: 5px; 
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border:  ${color.bluePrimary} 1px solid;
    text-align:center;
 
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
`;
