import React, { useMemo } from "react";
import { MyHeader } from "../header";
import { MyFooter } from "../footer";
import * as css from "./layuot.css";

import { useNavigate, Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <div className={css.root}>
      <MyHeader />
      <div className={css.container}>
        <Outlet />
      </div>
      <MyFooter />
    </div>
  );
}

export { Layout };
