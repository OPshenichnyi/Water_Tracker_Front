// import { useState } from 'react';
import {
  DayUl,
  DayLi,
  DayNumber,
  WaterPercentage,
} from './MonthStatsTable.styled';

const Month = () => {
  // const [month, setMonth] = useState(5);
  // const [year, setYear] = useState(2023);

  function getDaysInMonth(month, year) {
    const days = new Date(year, month, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
  }
  const daysInMonth = getDaysInMonth(); //month, year
  return (
    <DayUl>
      {daysInMonth.map(item => (
        <DayLi>
          <DayNumber>{item}</DayNumber>
          <WaterPercentage>0%</WaterPercentage>
        </DayLi>
      ))}
    </DayUl>
  );
};

export default Month;
