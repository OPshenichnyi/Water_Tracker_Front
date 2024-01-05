import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import sprite from '../../common/symbol-defs.svg';
import moment from 'moment';

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
import { useDispatch, useSelector } from 'react-redux';
import {  waterMonts } from '../../redux/water/operations';
import { selectMounthWater } from '../../redux/water/selector';

const Month = () => {
  const dispatch = useDispatch();
  const mounthHistory = useSelector(selectMounthWater);  

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState([]);
  
  useEffect(() => {
      setData(mounthHistory);
  }, [mounthHistory]);


  useEffect(() =>  {
    const fetchData = async () => {
      try {
        const currentDate = moment().format('YYYY-MM-DD');
        await dispatch(waterMonts(currentDate));

      } catch (error) {
        console.error("Error fetching data", error);
      }
    };  
    fetchData();
  }, [dispatch]);


  function getDaysInMonth(month, year, data) {
    const days = new Date(year, month, 0).getDate();
    const arrData = [];

    for (let day = 1; day <= days; day++) {
      const fullDate = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format('YYYY-MM-DD');
      const event = data.find((event) => event.date === fullDate);

      arrData.push({
        day,
        dailyNormFulfillment: event ? event.dailyNormFulfillment : 0,
      });
    }
    return arrData;
  }

  const daysInMonth = getDaysInMonth(month, year, data);

  const handleMonthChange = (newMonth, newYear) => {
    setMonth(newMonth);
    setYear(newYear);
  };
  const handlePrevMonthClick = () => {
    const newMonth = month === 1 ? 12 : month - 1;
    const newYear = month === 1 ? year - 1 : year;
    handleMonthChange(newMonth, newYear);
  };
  const handleNextMonthClick = () => {
    const newMonth = month === 12 ? 1 : month + 1;
    const newYear = month === 12 ? year + 1 : year;
    handleMonthChange(newMonth, newYear);
  };

  const getFormattedMonthName = () => {
    return `${new Date(year, month - 1)
      .toLocaleString('en-US', { month: 'long' })
      .charAt(0)
      .toUpperCase()}${new Date(year, month - 1)
      .toLocaleString('en-US', { month: 'long' })
      .slice(1)}, ${year}`;
  };
  return (
    <>
      <StatsWrapper>
        <TodayDiv>
          <MonthTitle>Month</MonthTitle>
          <CurrentMonth>        
            <MonthSwipe onClick={handlePrevMonthClick}>   
                <svg width="14" height="14">
                  <use href={`${sprite}#arrow-left`}></use>
                </svg>
            </MonthSwipe>
            <MonthName>{getFormattedMonthName()}</MonthName>            
            <MonthSwipe onClick={handleNextMonthClick}
              disabled={year === new Date().getFullYear() && month === new Date().getMonth() + 1}>
                <svg width="14" height="14">
                  <use href={`${sprite}#arrow-right`}></use>
                </svg>
            </MonthSwipe>
          </CurrentMonth>
        </TodayDiv>
      <DayUl>
        {daysInMonth.map((item) => (
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
