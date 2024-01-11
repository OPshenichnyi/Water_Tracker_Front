import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import sprite from "../../common/symbol-defs.svg";
import moment from "moment";

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
} from "./MonthStatsTable.styled";
import { useDispatch, useSelector } from "react-redux";
import { waterMonts } from "../../redux/water/operations";
import { selectMounthWater } from "../../redux/water/selector";
import DaysGeneralStats from "components/DaysGeneralStats/DaysGeneralStats";

const Month = () => {
  const dispatch = useDispatch();
  const mounthHistory = useSelector(selectMounthWater);

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState([]);

  const [isModalOpen, setModalOpen] = useState("");

  const handleButtonClick = (event) => {
    const name = event.target.parentNode.tagName;
    const data = event.target.parentNode.firstChild.textContent;
    if (name === "LI") {
      setModalOpen((prevData) => (prevData === data ? "" : data));
      return;
    }
    setModalOpen("");
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".Day")) {
        setModalOpen("");
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    setData(mounthHistory);
  }, [mounthHistory]);

  useEffect(() => {
    dispatch(waterMonts(`${year}-${month}`));
  }, [dispatch, month, year]);

  function getDaysInMonth(month, year, data) {
    const days = new Date(year, month, 0).getDate();
    const arrData = [];

    for (let day = 1; day <= days; day++) {
      const fullDate = moment(`${year}-${month}-${day}`, "YYYY-MM-DD").format(
        "YYYY-MM-DD"
      );
      const event = data.find((event) => event.date === fullDate);

      arrData.push({
        day,
        dailyNormFulfillment: event ? event.dailyNormFulfillment : 0,
        id: nanoid(),
        servingOfWater: event ? event.servingOfWater : 0,
        WaterRate: event ? event.WaterRate : 2,
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
      .toLocaleString("en-US", { month: "long" })
      .charAt(0)
      .toUpperCase()}${new Date(year, month - 1)
      .toLocaleString("en-US", { month: "long" })
      .slice(1)}, ${year}`;
  };

  const dataToday = getFormattedMonthName();

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
            <MonthName>{dataToday}</MonthName>
            <MonthSwipe
              onClick={handleNextMonthClick}
              disabled={
                year === new Date().getFullYear() &&
                month === new Date().getMonth() + 1
              }
            >
              <svg width="14" height="14">
                <use href={`${sprite}#arrow-right`}></use>
              </svg>
            </MonthSwipe>
          </CurrentMonth>
        </TodayDiv>
        <DayUl>
          {daysInMonth.map((item) => (
            <DayLi key={item.id}>
              <DayNumber onClick={handleButtonClick} className="Day">{item.day}</DayNumber>
              <WaterPercentage>{item.dailyNormFulfillment}%</WaterPercentage>
              {isModalOpen === item.day.toString() && (
                <DaysGeneralStats 
                  onClose={() => setModalOpen("")}
                  day={item.day}
                  dailyNorm={item.dailyNormFulfillment}
                  mounth={dataToday}
                  servingOfWater={item.servingOfWater}
                  WaterRate={item.WaterRate}                  
                />
              )}
            </DayLi>
          ))}
        </DayUl>
      </StatsWrapper>
    </>
  );
};

export default Month;
