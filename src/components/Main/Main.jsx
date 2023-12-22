import { NavLink } from 'react-router-dom';
import {
  BenefitsItem,
  BenefitsList,
  BenefitsTittle,
  FirstBlock,
  MainTittle,
  RecordTittle,
  SecondBlock,
  TryBtn,
} from './Main.styled';

export const Main = () => {
  return (
    <div>
      <FirstBlock>
        <MainTittle>Water consumption tracker</MainTittle>
        <RecordTittle>Record daily water intake and track</RecordTittle>
        <BenefitsTittle>Tracker Benefits</BenefitsTittle>
        <BenefitsList>
          <BenefitsItem>Habit drive</BenefitsItem>
          <BenefitsItem>View statistics</BenefitsItem>
          <BenefitsItem>Personal rate setting</BenefitsItem>
        </BenefitsList>
        <nav>
          <TryBtn to="/register">Try tracker</TryBtn>
        </nav>
      </FirstBlock>
      <SecondBlock>
        <h3>Why drink water</h3>
        <ul>
          <li>Supply of nutrients to all organs</li>
          <li>Providing oxygen to the lungs</li>
          <li>Maintaining the work of the heart</li>
          <li>Release of processed substances</li>
          <li>Ensuring the stability of the internal environment</li>
          <li>Maintaining within the normal temperature</li>
          <li>Maintaining an immune system capable of resisting disease</li>
        </ul>
      </SecondBlock>
    </div>
  );
};
