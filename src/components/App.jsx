import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../common/GlobalStyles";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import SigninPage from "../pages/SigninPage";
import Layout from "./SharedLayout/Layout";
import NotFoundPage from "pages/NotFoundPage";

import Main from "../pages/Main";
import {
  RestrictedRouteHomePage,
  RestrictedRouteLogin,
} from "./RestrictedRoute";
import { PrivateRouter } from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/authOperationApi";

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
                component={<Main />}
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
            element={
              <PrivateRouter redirectTo="/signin" component={<HomePage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
