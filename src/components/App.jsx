import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import SigninPage from '../pages/SigninPage';
import Layout from './SharedLayout/Layout';
import NotFoundPage from 'pages/NotFoundPage';
import MainPage from '../pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
