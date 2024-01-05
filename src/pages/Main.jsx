import DaysGeneralStats from 'components/DaysGeneralStats/DaysGeneralStats';
import BasicModalEdit from 'components/EditWaterModal/EditWaterModal';
import { Main } from 'components/Main/Main';

const MainPage = () => {
  return (
    <div>
      <Main />

      <BasicModalEdit />
      <DaysGeneralStats />
    </div>
  );
};
export default MainPage;
