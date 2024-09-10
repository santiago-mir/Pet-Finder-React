import React, { useMemo } from "react";
import * as css from "./header.css";
import mainImage from "../../assets/logo.png";
import BasicMenu from "../../ui/material-menu";

function MyHeader(props) {
  return (
    <header className={css.header}>
      <img className={css.logo} src={mainImage} alt="logo" />
      <BasicMenu></BasicMenu>
    </header>
  );
}

export { MyHeader };
