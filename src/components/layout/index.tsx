import React, { useMemo } from "react";
import { MyHeader } from "../header";
import { MainButton } from "../../ui/buttons";
import { MainText } from "../../ui/texts";
import * as css from "./layuot.css";

import { useNavigate, Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <div className={css.root}>
      <MyHeader />
      <div className={css.container}>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
