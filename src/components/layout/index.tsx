import React, { useMemo } from "react";
import { MyHeader } from "../header";
import("./layuot.css");

import { useNavigate, Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <div className="root-layout">
      <MyHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
