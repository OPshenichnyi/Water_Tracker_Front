import { useState } from 'react';
import { nanoid } from 'nanoid';
import sprite from '../../common/symbol-defs.svg';
import {
  DayUl,
  DayLi,
  DayNumber,
  StatsWrapper,
  WaterPercentage,
  TodayDiv,
  CurrentMonth,
  MonthSwipe,
  MonthName,
  MonthTitle,
} from './MonthStatsTable.styled';

const Month = () => {
  const data = [
    {
      date: '2023-3-2',
      dailyNormFulfillment: 30,
      WaterRate: 2,
      servingOfWater: 1,
    },
    {
      date: '2023-3-24',
      dailyNormFulfillment: 90,
      WaterRate: 2,
      servingOfWater: 3,
    },
  ];
  const [month] = useState(3);
  const [year] = useState(2023);
  const [dataM] = useState(data);

  function getDaysInMonth(month, year, data) {
    const days = new Date(year, month, 0).getDate();
    const arrData = [];

    for (let day = 1; day <= days; day++) {
      const fullDate = `${year}-${month}-${day}`;
      const event = data.find(event => event.date === fullDate);

      arrData.push({
        day,
        dailyNormFulfillment: event ? event.dailyNormFulfillment : 0,
      });
    }
    return arrData;
  }

  const daysInMonth = getDaysInMonth(month, year, dataM); 
  return (
    <>
      <StatsWrapper>
        <TodayDiv>
          <MonthTitle>Month</MonthTitle>
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
            <DayLi key={nanoid()}>
              <DayNumber>{item.day}</DayNumber>
              <WaterPercentage>{item.dailyNormFulfillment}%</WaterPercentage>
            </DayLi>
          ))}
        </DayUl>
      </StatsWrapper>
    </>
  );
};

export default Month;
