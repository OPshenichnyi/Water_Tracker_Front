import { useState } from "react";

const Month = () => {
  const [month, setMonth] = useState(2);
  const [year, setYear] = useState(2023);

  function getDaysInMonth(month, year) {
    const days = new Date(year, month, 0).getDate();
    return Array.from({ length: days }, (_, i) => i + 1);
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
