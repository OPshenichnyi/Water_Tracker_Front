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
} from "./DailyNorma.styled";
import sprite from "../../common/symbol-defs.svg";

import MobileBottle from "../../images/MobileBottle.png";
import MobileBottle2 from "../../images/MobileBottle@2x.png";
import TabletBottle from "../../images/TabletHomeBottle.png";
import TabletBottle2 from "../../images/TabletHomeBottle@2x.png";
import DesktopBottle from "../../images/DesktopHomeBottle.png";
import DesktopBottle2 from "../../images/DesktopHomeBottle@2x.png";
import MainModal from "components/MainModal/MainModal";
import ModalAddWater from "components/AddWater/AddWater";
import { useEffect, useState } from "react";
import { modalScrollOff } from "components/Utils/utils";
import { useSelector } from "react-redux";
import { selectStageWater } from "../../redux/water/selector";
import { toast } from "react-toastify";

export const DailyNorma = () => {
  const [modalActive, setModalActive] = useState(false);
  const [alreadyShownToast, setAlreadyShownToast] = useState(false);

  modalScrollOff(modalActive);

  const { percentage } = useSelector(selectStageWater);

  useEffect(() => {
    if (percentage === 100 && !alreadyShownToast) {
      toast.success(
        "Congratulations. Daily water requirement has been reached!"
      );
      setAlreadyShownToast(true);
    }
  }, [percentage, alreadyShownToast]);

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
        <AddWaterButton onClick={() => setModalActive(true)}>
          <svg width={24} height={24}>
            <use href={`${sprite}#plus-circle`} />
          </svg>
          Add Water
        </AddWaterButton>
      </ProgressContainer>
      <MainModal active={modalActive} setActive={setModalActive}>
        <ModalAddWater closeModal={() => setModalActive(false)} />
      </MainModal>
    </Container>
  );
};
