import React, { useEffect, useState } from "react";
import icons from "../../common/symbol-defs.svg";
import {
  AmountWater,
  BlockAmount,
  BlockAmountText,
  BlockFormula,
  BlockTitle,
  BlockTop,
  ButtonClose,
  ButtonSave,
  ButtonSaveWrap,
  ContainerGender,
  Description,
  DescriptionSpan,
  Formula,
  FormulaSpan,
  InputGender,
  InputStyle,
  LabelGender,
  SecondTitle,
  SpanGender,
  TextP,
  WrapAmount,
  Wrapper,
} from "./EditDailyNorma.styled";
import sprite from "../../common/symbol-defs.svg";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { saveWaterRate } from "../../redux/auth/authOperationApi";

function EditDailyNorma({ closeModal }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  

  const [gender, setGender] = useState("girl");
  const [inputValueK, setInputValueK] = useState("");
  const [inputValueT, setInputValueT] = useState("");
  const [calculatedResult, setCalculatedResult] = useState(null);
  const [isValidInputK, setIsValidInputK] = useState(true);
  const [isValidInputT, setIsValidInputT] = useState(true);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleInputChange = (event, setInputValue, setIsValidInputT) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue) || !inputValue  ) {
      setInputValue(inputValue);
      setIsValidInputT(true);
    } else {
      setIsValidInputT(false);
      toast.error("please enter the numbers");
    }
  };

  const handleInputChangeKilo = (event) => {
    handleInputChange(event, setInputValueK, setIsValidInputK);
  };

  const handleInputChangeTime = (event) => {
    handleInputChange(event, setInputValueT, setIsValidInputT);
  };

  const errorBorderStyleK = {
    border: "1px solid #EF5050",
  };
  const errorBorderStyleT = {
    border: "1px solid #EF5050",
  };

  useEffect(() => {
    const waterCalc = () => {
      if (inputValueK && inputValueT && gender) {
        let result;
        if (gender === "girl") {
          result = inputValueK * 0.03 + inputValueT * 0.4;
        } else {
          result = inputValueK * 0.04 + inputValueT * 0.6;
        }
        result = result.toFixed(1);

        setCalculatedResult(result);
      } else {
        setCalculatedResult(null);
      }
    };
    waterCalc();
  }, [inputValueK, inputValueT, gender]);
  
  const handleInputChangeValue = (event) => {
    const inputValue = event.target.value;
    if (/^[1-9]\d*(?:[.,]\d{0,1})?$/.test(inputValue) || inputValue === "") {
      setInputValue(inputValue);
      
    } else {
      
      toast.error("Please enter valid numbers");
    }
  };

  const saveWater = () => {
    if (inputValue === "") return toast.info("Fill in the column how much water you will drink");
    if(inputValue === '0') return toast.info('Value must not be 0 L');
    if (inputValue > 15) return toast.info("The maximum daily intake cannot exceed 15 L");
    dispatch(saveWaterRate(Number(inputValue) * 1000));
    toast.success("Daily water intake changed 👍");
    setInputValue("");
    closeModal();
  };

  return (
    <Wrapper>
      <BlockTop>
        <BlockTitle>My daily norma</BlockTitle>
        <ButtonClose onClick={closeModal}>
          <svg width={12} height={12} stroke="#407BFF">
            <use href={`${icons}#icon-cross`} />
          </svg>
        </ButtonClose>
      </BlockTop>

      <BlockFormula>
        <li>
          <Formula>
            For girl:<FormulaSpan>V=(M*0,03) + (T*0,4)</FormulaSpan>{" "}
          </Formula>
        </li>
        <li>
          <Formula>
            For man:<FormulaSpan>V=(M*0,04) + (T*0,6)</FormulaSpan>
          </Formula>
        </li>
      </BlockFormula>

      <Description>
        <DescriptionSpan>* </DescriptionSpan>V is the volume of the water norm
        in liters per day, M is your body weight, T is the time of active
        sports, or another type of activity commensurate in terms of loads (in
        the absence of these, you must set 0)
      </Description>

      <SecondTitle>Calculate your rate:</SecondTitle>

      <ContainerGender>
        <LabelGender htmlFor="girl">
          {gender === "girl" ? (
            <svg width={14} height={14}>
              <use href={`${sprite}#radio-btn-active`} />
            </svg>
          ) : (
            <svg width={14} height={14}>
              <use href={`${sprite}#radio-btn`} />
            </svg>
          )}

          <InputGender
            id="girl"
            type="radio"
            name="gender"
            value="girl"
            checked={gender === "girl"}
            onChange={handleChange}
          />
          <SpanGender>For girl</SpanGender>
        </LabelGender>

        <LabelGender htmlFor="man">
          {gender === "girl" ? (
            <svg width={14} height={14}>
              <use href={`${sprite}#radio-btn`} />
            </svg>
          ) : (
            <svg width={14} height={14}>
              <use href={`${sprite}#radio-btn-active`} />
            </svg>
          )}
          <InputGender
            id="man"
            type="radio"
            name="gender"
            value="man"
            checked={gender === "man"}
            onChange={handleChange}
          />
          <SpanGender>For man</SpanGender>
        </LabelGender>
      </ContainerGender>

      <TextP>Your weight in kilograms:</TextP>

      <InputStyle
        type="text"
        value={inputValueK}
        onChange={handleInputChangeKilo}
        placeholder="0"
        style={isValidInputK ? {} : errorBorderStyleK}
      />

      <TextP>
        The time of active participation in sports or other activities with a
        high physical. load:
      </TextP>

      <InputStyle
        type="text"
        value={inputValueT}
        onChange={handleInputChangeTime}
        placeholder="0"
        style={isValidInputT ? {} : errorBorderStyleT}
      />
      <BlockAmount>
        <BlockAmountText>
          The required amount of water in liters per day:
        </BlockAmountText>
        <WrapAmount>
          {calculatedResult && <AmountWater>{calculatedResult} L</AmountWater>}
        </WrapAmount>
      </BlockAmount>
      <SecondTitle>Write down how much water you will drink:</SecondTitle>
      <InputStyle
        type="text"
        value={inputValue}
        onChange={handleInputChangeValue}
        placeholder="Maximum permissible displacement 15 liters"
        max="15"
        pattern="^[1-9][0-9]*\.?[0-9]*$"
      />
      <ButtonSaveWrap>
        <ButtonSave type="button" onClick={saveWater}>
          Save
        </ButtonSave>
      </ButtonSaveWrap>
    </Wrapper>
  );
}

export default EditDailyNorma;
