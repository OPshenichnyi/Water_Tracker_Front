import HomePage from "pages/HomePage";
import MainPage from "pages/Main";
import { selectIsLogined } from "../redux/auth/selectorsAuth";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const isLogined = useSelector(selectIsLogined);
  return isLogined ? <HomePage /> : <MainPage />;
};

export default PrivateRoute;
