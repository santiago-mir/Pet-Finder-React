import React, { useMemo } from "react";
import { MyForm } from "../searchForm";
import("./layuot.css");

import { useNavigate, Outlet } from "react-router-dom";

function Layout(props) {
  const navigate = useNavigate();
  function handleClick(value) {
    navigate("/search/" + value);
  }
  return (
    <div className="root-layout">
      <MyForm onSearch={handleClick}></MyForm>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
