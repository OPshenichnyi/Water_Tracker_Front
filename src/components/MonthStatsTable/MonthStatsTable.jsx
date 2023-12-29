// import { useState } from 'react';
import sprite from '../../common/symbol-defs.svg';
import {
  DayUl,
  DayLi,
  DayNumber,
  WaterPercentage,
  TodayDiv,
  CurrentMonth,
  MonthSwipe,
  MonthName,
} from './MonthStatsTable.styled';

const Month = () => {
  // const [month, setMonth] = useState(2);
  // const [year, setYear] = useState(2023);

  function getDaysInMonth(month, year) {
    const days = new Date(year, month, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }
  const daysInMonth = getDaysInMonth(); //month, year
  return (
    <>
      <TodayDiv>
        <h2>Month</h2>
        <CurrentMonth>
          <MonthSwipe>
            <svg width="14" height="14">
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </MonthSwipe>
          <MonthName>February</MonthName>
          <MonthSwipe>
            <svg width="14" height="14">
              <use href={`${sprite}#arrow-right`}></use>
            </svg>
          </MonthSwipe>
        </CurrentMonth>
      </TodayDiv>
      <DayUl>
        {daysInMonth.map(item => (
          <DayLi>
            <DayNumber>{item}</DayNumber>
            <WaterPercentage>0%</WaterPercentage>
          </DayLi>
        ))}
      </DayUl>
    </>
  );
};

export default Month;
