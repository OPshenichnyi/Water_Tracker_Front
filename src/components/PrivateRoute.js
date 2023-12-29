import { selectIsLogined, selectRefresh } from "../redux/auth/selectorsAuth";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ component: Component, redirectTo = "/" }) => {
  const isLogined = useSelector(selectIsLogined);
  const isRefresh = useSelector(selectRefresh);
  const shouldRedirect = !isLogined && !isRefresh;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
