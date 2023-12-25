import HomePage from "pages/HomePage";
import MainPage from "pages/Main";
import { selectIsLogined } from "../redux/auth/selectorsAuth";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { isLoggedIn } = useSelector(selectIsLogined);
  return isLoggedIn ? <HomePage /> : <MainPage />;
};

export default PrivateRoute;
