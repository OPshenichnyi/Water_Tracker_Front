import { useState } from "react";

const Month = () => {
  const data = [
    {
      date: "2023-12-23",
      dailyNormFulfillment: 30,
      WaterRate: 2,
      servingOfWater: 1,
    },
    {
      date: "2023-12-24",
      dailyNormFulfillment: 90,
      WaterRate: 2,
      servingOfWater: 3,
    },
  ];
  const [month, setMonth] = useState(2);
  const [year, setYear] = useState(2023);

  function getDaysInMonth(month, year) {
    const days = new Date(year, month, 0).getDate();
    const dataInMonts = Array.from({ length: days }, (_, i) => i + 1);
    return dataInMonts;
  }
  const daysInMonth = getDaysInMonth(month, year);

  return (
    <ul>
      {daysInMonth.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Month;
