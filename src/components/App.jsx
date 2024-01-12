import { Route, Routes } from "react-router-dom";
import { lazy, useState } from "react";
// import HomePage from '../pages/HomePage';
// import SignUpPage from '../pages/SignUpPage';
import Layout from "./SharedLayout/Layout";
// import NotFoundPage from 'pages/NotFoundPage';
// import SigninPage from '../pages/SigninPage';
import {
  RestrictedRouteHomePage,
  RestrictedRouteLogin,
} from "./RestrictedRoute";
import { PrivateRouter } from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/authOperationApi";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader/Loader";

const MainPage = lazy(() => import("../pages/Main"));
const HomePage = lazy(() => import("../pages/HomePage"));
const SignUpPage = lazy(() => import("../components/SingIn/SignUp"));
const SigninPage = lazy(() => import("../components/SingIn/SingIn"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const App = () => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      setLoading(true);
      dispatch(refreshUser());
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 300); 
    }
}, [dispatch]);

if (loading) {
  return <Loader />;
}
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
          {/* <Route index element={<Main />} /> */}
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <Route
            path="signup"
            element={
              <RestrictedRouteLogin
                redirectTo="/signin"
                component={<SignUpPage />}
              />
            }
          />
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <Route
            path="signin"
            element={
              <RestrictedRouteHomePage
                redirectTo="/HomePage"
                component={<SigninPage />}
              />
            }
          />
          <Route path="signin" element={<SigninPage />} />
          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <Route
            path="/HomePage"
            element={<PrivateRouter redirectTo="/" component={<HomePage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1000} className="toast-container"/>
    </>
  );
};

export default App;
