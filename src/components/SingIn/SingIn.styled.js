import styled from "styled-components";
import { Field } from "formik";
import PhoneBubbles from "../../images/PhoneBubbles.jpg";
import PhoneBubbles2x from "../../images/PhoneBubbles2x.jpg";
import TabletBotBut from "../../images/TabletBotBub.jpg";
import TabletBotBut2x from "../../images/TabletBotBub2x.jpg";
import DesktopBubbles from "../../images/DesktopBubbles.jpg";
import DesktopBubbles2x from "../../images/DesktopBubbles2x.jpg";

export const Container = styled.div`
  display: block;

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 20px;
    padding-top: 24px;
    background-image: image-set(
      url(${PhoneBubbles}) 1x,
      url(${PhoneBubbles2x}) 2x
    );
    background-repeat: no-repeat;
    background-position: top;
    flex-direction: column-reverse;
    justify-content: start;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: 0 auto;
    padding: 16px 32px;
    padding-top: 40px;
    background-image: image-set(
      url(${TabletBotBut}) 1x,
      url(${TabletBotBut2x}) 2x
    );

    background-repeat: no-repeat;
    background-position: center;
    align-items: start;  
    
  }

  @media screen and (min-width: 1440px) {
    padding: 20px;
    align-items: end;
    padding-top: 24px;
    background-image: image-set(
      url(${DesktopBubbles}) 1x,
      url(${DesktopBubbles2x}) 2x
    );
    display: flex;
    justify-content: start;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 280px;
  /* height: 210px; */

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    width: 880px;
    margin: 0px;
    display: block;
  }
`;

export const SignUpContainer = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    
  }

  @media screen and (min-width: 1440px) {
    margin-right: 216px;
  }
`;

export const H2 = styled.h2`
  font-size: 26px;
  margin-bottom: 16px;

  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;

export const SignUpLabel = styled.label`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SignUpInput = styled(Field)`
  width: 280px;
  height: 44px;
  border: 1px solid #d7e3ff;
  color: #9ebbff;
  border-radius: 6px;
  margin: 8px 0px 16px 0px;
  font-size: 16px;
  padding: 16px 8px;
  outline: none;
  &:active,
  &:focus,
  &:hover {
    color: #407bff;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;

export const SignUpButton = styled.button`
  height: 36px;
  color: #ffffff;
  background-color: #407bff;
  border-radius: 10px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);

  width: 280px;
  height: 36px;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    cursor: pointer;
  }

  &.active {
    cursor: pointer;
    box-shadow: none;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;

export const SignUpButton2 = styled.a`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  border: none;
  background-color: none;
  color: #407bff;
  margin-top: 16px;
  &:hover {
    color: #ff9d43;
  }
`;

export const SignUpFormContainer = styled.div`

`;

export const SignUpButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContainerInput = styled.div`
  position: relative;
  margin-bottom: 12px;
  display: inline-block;

  @media screen and (min-width: 768px) {
  }
`;

export const InputPasswordSvg = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-25%);
  cursor: pointer;
  stroke: #407bff;
  fill: none;
`;

export const WraperInputPass = styled.div`
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;
