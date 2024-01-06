import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogined, selectIsRegister } from "../redux/auth/selectorsAuth";

export const RestrictedRouteLogin = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isRegister = useSelector(selectIsRegister);
  return isRegister ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRouteHomePage = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLogined = useSelector(selectIsLogined);
  console.log('g')
  return isLogined ? <Navigate to={redirectTo} /> : Component;
};
