import { useState } from "react";
import sprite from "../../../common/symbol-defs.svg";
import {
  TodayContainer,
  TodayHeader,
  TableWrapper,
  TodayTable,
  TableRow,
  TodayTableData,
  ImageWrapper,
  Button,
  TrashButton,
  TextTableData,
  TimeTableData,
  AddWaterButton,
} from "./Today.styled";
import React, { useEffect } from "react";
import { modalScrollOff } from "components/Utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { fetchWaterDataToday } from "../../../redux/water/operations";
import { FormatTime } from "../FormatTime/FormatTime";
import { selectTakeWaterHistory } from "../../../redux/water/selector";
import MainModal from "components/MainModal/MainModal";
import ModalAddWater from "components/AddWater/AddWater";
import EditWater from "components/EditWater/EditWater";

const Today = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalEditActive, setModalEditActive] = useState(false);
  modalScrollOff(modalActive);

  const waterData = useSelector(selectTakeWaterHistory);
  const dispatch = useDispatch();

  useEffect(() => {    
     dispatch(fetchWaterDataToday());
  }, [dispatch]);

  return (
    <>
      <TodayContainer>
        <TodayHeader>Today</TodayHeader>
        <TableWrapper>
          <TodayTable>
            <tbody>
              {waterData.map((waterRecord) => (
                <TableRow key={waterRecord._id}>
                  <TodayTableData>
                    <ImageWrapper>
                      <svg width={26} height={26}>
                        <use href={`${sprite}#cup`}></use>
                      </svg>
                    </ImageWrapper>
                  </TodayTableData>

                  <TextTableData>{waterRecord.waterVolume} ml</TextTableData>
                  <TimeTableData>{FormatTime(waterRecord.date)}</TimeTableData>

                  <TodayTableData>
                    <Button onClick={() => setModalEditActive(true)}>
                      <svg width={16} height={16}>
                        <use href={`${sprite}#pencil-square`}></use>
                      </svg>
                    </Button>
                  </TodayTableData>
                  <TodayTableData>
                    <TrashButton>
                      <svg width={16} height={16}>
                        <use href={`${sprite}#trash-can`}></use>
                      </svg>
                    </TrashButton>
                  </TodayTableData>
                </TableRow>
              ))}
            </tbody>
          </TodayTable>
          <AddWaterButton onClick={() => setModalActive(true)}>
            +Add water
          </AddWaterButton>
        </TableWrapper>
      </TodayContainer>

      <MainModal active={modalActive} setActive={setModalActive}>
        <ModalAddWater closeModal={() => setModalActive(false)} />
      </MainModal>
      <MainModal active={modalEditActive} setActive={setModalEditActive}>
        <EditWater closeModal={() => setModalEditActive(false)}  />
      </MainModal>
    </>
  );
};

export default Today;
