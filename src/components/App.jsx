import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./SharedLayout/Layout";
import {
  RestrictedRouteHomePage,
  RestrictedRouteLogin,
} from "./RestrictedRoute";
import { PrivateRouter } from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/authOperationApi";
import MainPage from "../pages/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("../pages/HomePage"));
const SignUpPage = lazy(() => import("../components/SingIn/SignUp"));
const SigninPage = lazy(() => import("../components/SingIn/SingIn"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRouteHomePage
                redirectTo="/HomePage"
                component={<MainPage />}
              />
            }
          />
          <Route
            path="signup"
            element={
              <RestrictedRouteLogin
                redirectTo="/signin"
                component={<SignUpPage />}
              />
            }
          />
          <Route
            path="signin"
            element={
              <RestrictedRouteHomePage
                redirectTo="/HomePage"
                component={<SigninPage />}
              />
            }
          />
          <Route
            path="/HomePage"
            element={<PrivateRouter redirectTo="/" component={<HomePage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1000} className="toast-container" />
    </>
  );
};

export default App;
