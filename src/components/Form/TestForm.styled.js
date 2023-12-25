import styled from "styled-components";
import { Field } from "formik";

export const RegistrFormStyle = styled.div`
  margin: auto;
  margin-top: 25px;
  text-align: center;
  width: 350px;
  min-height: 500px;
  background: white;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
  button {
    width: 40%;
    height: 50px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #573b8a;
    font-size: 1em;
    font-weight: bold;
    margin-top: 60px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s ease-in;
    cursor: pointer;
  }
  button:hover {
    background: #6d44b8;
  }
  label {
    color: black;
    font-size: 1.3em;
    justify-content: center;
    display: flex;
    margin: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
`;
export const FiledStyle = styled(Field)`
  width: 60%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 2px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;
