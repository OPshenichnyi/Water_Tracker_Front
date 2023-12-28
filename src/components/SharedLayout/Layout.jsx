import { Header } from "components/Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import SettingModal from "components/SettingModal/SettingModal";
const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <NavLink to="/seting">SettingModal</NavLink>
    </div>
  );
};
export default Layout;
