import { RegisterForm } from "components/Form/TestForm";
import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />

      <Outlet />
      <RegisterForm></RegisterForm>
    </div>
  );
};
export default Layout;
