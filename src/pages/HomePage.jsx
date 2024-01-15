import React from "react";
import DailyNorma from "components/DailyNorma/DailyNorma";
import Calendar from "components/Calendar/Calendar";
import { HomeContainer } from "components/DailyNorma/DailyNorma.styled";
import { LayoutMainContainer } from "components/DailyNorma/DailyNorma.styled";

const HomePage = () => {
  return (
    <LayoutMainContainer>
      <div className="container">
        <HomeContainer>
          <DailyNorma />
          <Calendar />
        </HomeContainer>
      </div>
    </LayoutMainContainer>
  );
};
export default HomePage;
