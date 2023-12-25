import React from 'react';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import Calendar from 'components/Calendar/Calendar';

const HomePage = () => {
  return (
    <>
      <div className="container">
        <DailyNorma />
        <Calendar />
      </div>
    </>
  );
};
export default HomePage;
