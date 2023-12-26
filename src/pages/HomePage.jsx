import React from 'react';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import Calendar from 'components/Calendar/Calendar';
import { HomeContainer } from 'components/DailyNorma/DailyNorma.styled';

const HomePage = () => {
  return (
    <HomeContainer>
      <div className="container">
        <DailyNorma />
        <Calendar />
      </div>
    </HomeContainer>
  );
};
export default HomePage;
