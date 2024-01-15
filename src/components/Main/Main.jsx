import {
  Container,
  ContainerWrap,
  ReasonItem,
  ReasonList,
  WhyTittle,
  Wrappper,
} from "./Main.styled";
import icons from "../../common/symbol-defs.svg";
import {
  BenefitsItem,
  BenefitsList,
  BenefitsTittle,
  FirstBlock,
  MainTittle,
  RecordTittle,
  SecondBlock,
  TryBtn,
} from "./Main.styled";
import { useEffect } from "react";
import { sleep } from "../../redux/auth/authOperationApi";

const Main = () => {
  useEffect(() => {
    sleep();
  }, []);
  return (
    <Wrappper>
      <Container>
        <ContainerWrap>
          <FirstBlock>
            <MainTittle>Water consumption tracker</MainTittle>
            <RecordTittle>Record daily water intake and track</RecordTittle>
            <BenefitsTittle>Tracker Benefits</BenefitsTittle>
            <BenefitsList>
              <BenefitsItem>
                <svg width={40} height={40}>
                  <use href={`${icons}#icon-outline11`} />
                </svg>
                Habit drive
              </BenefitsItem>
              <BenefitsItem>
                <svg width={40} height={40}>
                  <use href={`${icons}#icon-outline12`} />
                </svg>
                View statistics
              </BenefitsItem>
              <BenefitsItem>
                <svg width={40} height={40}>
                  <use href={`${icons}#icon-outline13`} />
                </svg>
                Personal rate setting
              </BenefitsItem>
            </BenefitsList>
            <nav>
              <TryBtn to="/signup">Try tracker</TryBtn>
            </nav>
          </FirstBlock>
          <SecondBlock>
            <WhyTittle>Why drink water</WhyTittle>
            <ReasonList>
              <ReasonItem>Supply of nutrients to all organs</ReasonItem>
              <ReasonItem>Providing oxygen to the lungs</ReasonItem>
              <ReasonItem>Maintaining the work of the heart</ReasonItem>
              <ReasonItem>Release of processed substances</ReasonItem>
              <ReasonItem>
                Ensuring the stability of the internal environment
              </ReasonItem>
              <ReasonItem>Maintaining within the normal temperature</ReasonItem>
              <ReasonItem>
                Maintaining an immune system capable of resisting disease
              </ReasonItem>
            </ReasonList>
          </SecondBlock>
        </ContainerWrap>
      </Container>
    </Wrappper>
  );
};

export default Main;
