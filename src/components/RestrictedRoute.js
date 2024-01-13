import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectIsLogined,
  selectIsPending,
  selectIsRegister,
} from "../redux/auth/selectorsAuth";
import Loader from "./Loader/Loader";

export const RestrictedRouteLogin = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isRegister = useSelector(selectIsRegister);
  const isLoading = useSelector(selectIsPending);
  if (isLoading) {
    return <Loader />;
  }
  return isRegister ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRouteHomePage = ({
  component: Component,
  redirectTo = "/HomePage",
}) => {
  const isLogined = useSelector(selectIsLogined);
  const isLoading = useSelector(selectIsPending);
  if (isLoading) {
    return <Loader />;
  }
  return isLogined ? <Navigate to={redirectTo} /> : Component;
};
