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

import { useDispatch, useSelector } from 'react-redux';
import { fetchWaterDataToday } from "../../../redux/water/operations"
import {FormatTime} from  "../FormatTime/FormatTime"


const Today = () => {
  const waterData = useSelector(state => state.water);
  const dispatch = useDispatch();

useEffect(() => {
  const fetchData = async () => {
    try {
      await dispatch(fetchWaterDataToday());
    } catch (error) {
      console.error('Ошибка при получении данных о воде в useEffect:', error);
    }
  };

  fetchData();
}, [dispatch]);

  return (
    <TodayContainer>
      <TodayHeader>Today</TodayHeader>
      <TableWrapper>
        <TodayTable>
          <tbody>
            
          {waterData.history.map((waterRecord) => (
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
                  <Button>
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
        <AddWaterButton type="submit">+ Add water</AddWaterButton>
      </TableWrapper>
    </TodayContainer>
  );
};

export default Today;
