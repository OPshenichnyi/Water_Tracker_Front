import React from 'react';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import Calendar from 'components/Calendar/Calendar';
import { HomeContainer } from 'components/DailyNorma/DailyNorma.styled';

const HomePage = () => {
  return (
    <div className="container">
      <HomeContainer>
        <DailyNorma />
        <Calendar />
      </HomeContainer>
    </div>
  );
};
export default HomePage;
