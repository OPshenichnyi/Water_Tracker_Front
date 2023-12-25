import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../common/GlobalStyles';
import HomePage from '../pages/HomePage';
import SignUpPage from '../pages/SignUpPage';
import SigninPage from '../pages/SigninPage';
import Layout from './SharedLayout/Layout';
import NotFoundPage from 'pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/test" element={<HomePage />} />  FOR TESTING
        <Route index element={<PrivateRoute />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
