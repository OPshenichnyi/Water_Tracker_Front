import Today from "./Today/Today";
import { CalendarWrap } from "./Calendar.styled";
import Month from "components/MonthStatsTable/MonthStatsTable";

const Calendar = () => {
  return (
    <CalendarWrap>
      <Today />
      <Month/>
    </CalendarWrap>
  );
};
export default Calendar;
