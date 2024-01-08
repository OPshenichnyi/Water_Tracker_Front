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
  return (
    <div>
      <DailyModal>
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
