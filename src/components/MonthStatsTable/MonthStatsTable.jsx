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

const Month = () => {
  const dispatch = useDispatch();
  const mounthHistory = useSelector(state => state.water.mounthHistory);

console.log('mounthHistory',mounthHistory)

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState([ 
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
  },]);
console.log("data",data)


useEffect(() => {
  const fetchData = async () => {
    const currentDate = moment().format('YYYY-MM-DD');
    const result = await dispatch(waterMonts(currentDate));
    
    if (result.payload && result.payload.length > 0 && result.payload[0]?.result?.length > 0) {
      console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
      setData(result.payload[0].result);
    }
  };

  fetchData();
}, [dispatch]);




  function getDaysInMonth(month, year, data) {
    const days = new Date(year, month, 0).getDate();
    const arrData = [];

    for (let day = 1; day <= days; day++) {
      const fullDate = `${year}-${month}-${day}`;
      const event = data.find((event) => event.date === fullDate);
// console.log(event)
      arrData.push({
        day,
        dailyNormFulfillment: event ? event.dailyNormFulfillment : 0,
      });
    }
    return arrData;
  }

  const daysInMonth = getDaysInMonth(month, year, data);
console.log("gggggggggggggggggggggggggg",daysInMonth)
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
            <MonthSwipe onClick={() => setMonth(prevMonth => prevMonth - 1)}>
              <svg width="14" height="14">
                <use href={`${sprite}#arrow-left`}></use>
              </svg>
            </MonthSwipe>
            <MonthName>{getFormattedMonthName()}</MonthName>
            <MonthSwipe onClick={() => setMonth(prevMonth => prevMonth + 1)}>
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

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import sprite from '../../common/symbol-defs.svg';
// import {
//   DayUl,
//   DayLi,
//   DayNumber,
//   StatsWrapper,
//   WaterPercentage,
//   TodayDiv,
//   CurrentMonth,
//   MonthSwipe,
//   MonthName,
//   MonthTitle,
// } from './MonthStatsTable.styled';

// const Month = () => {
//   const data = [
//     {
//       date: '2023-3-2',
//       dailyNormFulfillment: 30,
//       WaterRate: 2,
//       servingOfWater: 1,
//     },
//     {
//       date: '2023-3-24',
//       dailyNormFulfillment: 90,
//       WaterRate: 2,
//       servingOfWater: 3,
//     },
//   ];
//   const [month] = useState(3); //setMonth
//   const [year] = useState(2023); //setYear
//   const [dataM] = useState(data); //setData

//   function getDaysInMonth(month, year, data) {
//     const days = new Date(year, month, 0).getDate();
//     const arrData = [];

//     for (let day = 1; day <= days; day++) {
//       const fullDate = `${year}-${month}-${day}`;
//       const event = data.find(event => event.date === fullDate);

//       arrData.push({
//         day,
//         dailyNormFulfillment: event ? event.dailyNormFulfillment : 0,
//       });
//     }
//     return arrData;
//   }

//   const daysInMonth = getDaysInMonth(month, year, dataM); //month, year
//   return (
//     <>
//       <StatsWrapper>
//         <TodayDiv>
//           <MonthTitle>Month</MonthTitle>
//           <CurrentMonth>
//             <MonthSwipe>
//               <svg width="14" height="14">
//                 <use href={`${sprite}#arrow-left`}></use>
//               </svg>
//             </MonthSwipe>
//             <MonthName>February</MonthName>
//             <MonthSwipe>
//               <svg width="14" height="14">
//                 <use href={`${sprite}#arrow-right`}></use>
//               </svg>
//             </MonthSwipe>
//           </CurrentMonth>
//         </TodayDiv>
//         <DayUl>
//           {daysInMonth.map(item => (
//             <DayLi key={nanoid()}>
//               <DayNumber>{item.day}</DayNumber>
//               <WaterPercentage>{item.dailyNormFulfillment}%</WaterPercentage>
//             </DayLi>
//           ))}
//         </DayUl>
//       </StatsWrapper>
//     </>
//   );
// };

// export default Month;