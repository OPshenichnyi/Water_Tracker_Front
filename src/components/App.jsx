import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import SigninPage from "../pages/SigninPage";
import Main from "../pages/Main";
import Layout from "./SharedLayout/Layout";
import NotFoundPage from "pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
