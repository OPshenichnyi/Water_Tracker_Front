import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SignUpPage from '../pages/SignUpPage';
import SigninPage from '../pages/SigninPage';
import Main from '../pages/Main';
import Layout from './SharedLayout/Layout';
import NotFoundPage from 'pages/NotFoundPage';
const HomePage = lazy(() => import('../pages/HomePage.jsx'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
