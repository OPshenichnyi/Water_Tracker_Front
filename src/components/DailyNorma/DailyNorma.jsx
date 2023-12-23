import {
  Container,
  NormaContainer,
  NormaTitle,
  DailyNormaWrapper,
  NormaP,
  Image,
  NormaButton,
  ProgressContainer,
  WaterProgress,
  WaterInfo,
  WaterMeter,
  AddWaterButton,
} from './DailyNorma.styled';
import sprite from '../../common/symbol-defs.svg';

import imgBottle from '../../images/bottle_home_mob@1x.jpg';

export const DailyNorma = () => {
  return (
    <Container>
      <NormaContainer>
        <NormaTitle>My daily norma</NormaTitle>
        <DailyNormaWrapper>
          <NormaP>2.0 L</NormaP>
          <NormaButton>Edit</NormaButton>
        </DailyNormaWrapper>
      </NormaContainer>
      <Image src={imgBottle} alt="bottle" />
      <ProgressContainer>
        <WaterProgress>
          <p>Today</p>
          <WaterMeter>
            <div />
          </WaterMeter>
          <WaterInfo>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </WaterInfo>
        </WaterProgress>
        <AddWaterButton>
          <svg width={24} height={24}>
            <use href={`${sprite}#icon-outline7`} />
          </svg>
          Add Water
        </AddWaterButton>
      </ProgressContainer>
    </Container>
  );
};
