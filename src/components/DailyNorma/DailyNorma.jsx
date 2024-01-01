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

import MobileBottle from '../../images/MobileBottle.png';
import MobileBottle2 from '../../images/MobileBottle@2x.png';
import TabletBottle from '../../images/TabletHomeBottle.png';
import TabletBottle2 from '../../images/TabletHomeBottle@2x.png';
import DesktopBottle from '../../images/DesktopHomeBottle.png';
import DesktopBottle2 from '../../images/DesktopHomeBottle@2x.png';
import NewModal from 'components/AddEditWater/NewModal';
import { useState } from 'react';
import { modalScrollOff } from 'components/Utils/utils';
import { useSelector } from 'react-redux';
import { selectStageWater } from '../../redux/water/selector';

export const DailyNorma = () => {
  const [open, setOpen] = useState(false);
  modalScrollOff(open);

  const { percentage } = useSelector(selectStageWater);
  return (
    <Container>
      <NormaContainer>
        <NormaTitle>My daily norma</NormaTitle>
        <DailyNormaWrapper>
          <NormaP>2.0 L</NormaP>
          <NormaButton>Edit</NormaButton>
        </DailyNormaWrapper>
      </NormaContainer>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`${DesktopBottle} 1x, ${DesktopBottle2} 2x`}
          type="image/png"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${TabletBottle} 1x, ${TabletBottle2} 2x`}
          type="image/png"
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${MobileBottle} 1x, ${MobileBottle2} 2x`}
          type="image/webp"
        />
        <Image src={DesktopBottle} alt="bottle" />
      </picture>
      <ProgressContainer>
        <WaterProgress>
          <p>Today</p>
          <WaterMeter percentage={percentage}>
            <div />
          </WaterMeter>
          <WaterInfo>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </WaterInfo>
        </WaterProgress>
        <AddWaterButton onClick={() => setOpen(s => !s)}>
          <svg width={24} height={24}>
            <use href={`${sprite}#plus-circle`} />
          </svg>
          Add Water
        </AddWaterButton>
      </ProgressContainer>
      <NewModal open={open} closeModal={() => setOpen(false)} />
    </Container>
  );
};
