
import BasicModalEdit from 'components/EditWaterModal/EditWaterModal';
import Main from '../components/Main/Main';
import DaysGeneralStats from 'components/DaysGeneralStats/DaysGeneralStats';
import EditWater from 'components/EditWater/EditWater';


const MainPage = () => {
  return (
    <div>
      <Main />
      <BasicModalEdit />
      <EditWater />
      <DaysGeneralStats />
    </div>
  );
};
export default MainPage;
