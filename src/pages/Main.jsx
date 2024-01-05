import DaysGeneralStats from 'components/DaysGeneralStats/DaysGeneralStats';
import EditWater from 'components/EditWater/EditWater';

import { Main } from 'components/Main/Main';

const MainPage = () => {
  return (
    <div>
      <Main />

      <EditWater />
      <DaysGeneralStats />
    </div>
  );
};
export default MainPage;
