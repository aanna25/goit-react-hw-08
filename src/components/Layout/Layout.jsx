import { Suspense } from "react";
import { AppBar } from "../AppBar/AppBar";
import Loader from "../Loader/Loader";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <main className={css.main}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
