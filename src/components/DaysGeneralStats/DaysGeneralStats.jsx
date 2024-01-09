import icons from "../../common/symbol-defs.svg";
import { CloseBtn, DailyModal, Date, Value } from "./DaysGeneralStats.styled";

export default function DaysGeneralStats({
  onClose,
  day,
  dailyNorm,
  mounth,
  servingOfWater,
  WaterRate,
}) {
  const nameMount = mounth || "";
  const monthName = nameMount.split(",")[0].trim();

  const leftDay = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31];
  const position = leftDay.includes(day);
  const x = position ? 20 : -280;

  function topCalculate(day) {
    const row = Math.floor(day/5)
    return -200 + (row * 68);
  }

  return (
    <div>
      <DailyModal left={x} top={topCalculate(day)}>
        {" "}
        <Date>
          {day}, {monthName}
        </Date>
        <CloseBtn onClick={onClose}>
          {" "}
          <svg width={12} height={12} stroke="#407BFF">
            <use href={`${icons}#icon-cross`} />
          </svg>
        </CloseBtn>
        <p>
          Daily norma:<Value> {WaterRate} L</Value>
        </p>
        <p>
          Fulfillment of the daily norm:<Value> {dailyNorm}%</Value>
        </p>
        <p>
          How many servings of water:<Value> {servingOfWater}</Value>
        </p>
      </DailyModal>
    </div>
  );
}
