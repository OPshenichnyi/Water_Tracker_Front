import { useState } from 'react';
import sprite from '../../../common/symbol-defs.svg';
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
} from './Today.styled';

import { modalScrollOff } from 'components/Utils/utils';
import ModalAddWater from 'components/AddEditWater/NewModal';

const Today = () => {
  const [open, setOpen] = useState(false);

  modalScrollOff(open);

  return (
    <div>
      <TodayContainer>
        <TodayHeader>Today</TodayHeader>
        <TableWrapper>
          <TodayTable>
            <tbody>
              <TableRow>
                <TodayTableData>
                  <ImageWrapper>
                    <svg width={26} height={26}>
                      <use href={`${sprite}#cup`}></use>
                    </svg>
                  </ImageWrapper>
                </TodayTableData>
                <TextTableData>750 ml</TextTableData>
                <TimeTableData>14:00 PM</TimeTableData>
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
            </tbody>
          </TodayTable>
          <AddWaterButton onClick={() => setOpen(s => !s)}>
            +Add water
          </AddWaterButton>
        </TableWrapper>
      </TodayContainer>
      <ModalAddWater open={open} closeModal={() => setOpen(false)} />
    </div>
  );
};

export default Today;
