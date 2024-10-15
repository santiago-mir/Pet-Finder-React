import React, { useMemo } from "react";
import * as css from "./header.css";
import mainImage from "../../assets/logo.png";
import BasicMenu from "../../ui/material-menu";
import { Link } from "react-router-dom";

function MyHeader(props) {
  return (
    <header className={css.header}>
      <Link className={css.link} to={"/"}>
        <img className={css.logo} src={mainImage} alt="logo" />
      </Link>
      <BasicMenu></BasicMenu>
    </header>
  );
}

export { MyHeader };
