import React, { useState, useEffect } from "react";
import mainImage from "../../assets/logo.png";
import { MainText, SecondaryText } from "../../ui/texts";
import * as css from "./home.css";

function HomePage(props) {
  return (
    <div className={css.home}>
      <MainText>Bienvenido a Pet Finder</MainText>
      <img className={css.logo} src={mainImage} alt="logo" />
      <SecondaryText>
        Encontrá y reportá mascotas perdidas cerca de tu ubicación
      </SecondaryText>
    </div>
  );
}

export { HomePage };
