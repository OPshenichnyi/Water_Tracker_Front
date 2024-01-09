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
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWaterDataToday } from '../../../redux/water/operations';
import { FormatTime } from '../FormatTime/FormatTime';
import { selectTakeWaterHistory } from '../../../redux/water/selector';
import MainModal from 'components/MainModal/MainModal';
import ModalAddWater from 'components/AddWater/AddWater';
import EditWater from 'components/EditWater/EditWater';
import DeleteEntry from 'components/DeleteEntry/DeleteEntry';
import Loader from 'components/Loader/Loader';

const Today = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalEditActive, setModalEditActive] = useState(false);

  const [modalDelete, setModalDelete] = useState(false);
  const [idDelete, setIdDelete] = useState();

  const [selectedWaterRecord, setSelectedWaterRecord] = useState(null);

  const waterData = useSelector(selectTakeWaterHistory);
  const waterLoading = useSelector(state => state.water.loading);
  const updating = useSelector(state => state.water.updating);
  const deleting = useSelector(state => state.water.deleting);
  const dispatch = useDispatch();
  console.log(waterData);
  useEffect(() => {
    if (!waterData.length) {
      dispatch(fetchWaterDataToday());
    }
  }, [dispatch, waterData]);

  const openDel = id => {
    setIdDelete(id);
    setModalDelete(true);
  };

  return (
    <>
      {updating && <Loader />}
      <TodayContainer>
        <TodayHeader>Today</TodayHeader>
        <TableWrapper>
          <TodayTable>
            <tbody>
              {waterData.map(waterRecord => (
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
                    <Button
                      onClick={() => {
                        setModalEditActive(true);
                        setSelectedWaterRecord(waterRecord);
                      }}
                    >
                      <svg width={16} height={16}>
                        <use href={`${sprite}#pencil-square`}></use>
                      </svg>
                    </Button>
                  </TodayTableData>
                  <TodayTableData>
                    <TrashButton onClick={() => openDel(waterRecord._id)}>
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
          {waterData.length === 0 && waterLoading && <Loader />}{' '}
        </TableWrapper>
      </TodayContainer>
      {deleting && <Loader />}
      <MainModal active={modalDelete} setActive={setModalDelete}>
        <DeleteEntry closeModal={() => setModalDelete(false)} id={idDelete} />
      </MainModal>
      <MainModal active={modalActive} setActive={setModalActive}>
        <ModalAddWater closeModal={() => setModalActive(false)} />
      </MainModal>
      <MainModal active={modalEditActive} setActive={setModalEditActive}>
        <EditWater
          closeModal={() => setModalEditActive(false)}
          waterRecord={selectedWaterRecord}
        />
      </MainModal>
    </>
  );
};

export default Today;
