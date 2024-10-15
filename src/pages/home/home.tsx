import React, { useState, useEffect } from "react";
import mainImage from "../../assets/logo.png";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton } from "../../ui/buttons";

import { useNavigate } from "react-router-dom";
import * as css from "./home.css";

function HomePage(props) {
  const navigate = useNavigate();
  return (
    <div className={css.home}>
      <MainText>Bienvenido a Pet Finder</MainText>
      <img className={css.logo} src={mainImage} alt="logo" />
      <SecondaryText>
        Encontrá y reportá mascotas perdidas cerca de tu ubicación
      </SecondaryText>
      <div className={css.container}>
        <MainButton
          handleClick={() => {
            navigate("/login");
          }}
        >
          Inicia Sesion
        </MainButton>
        <MainButton
          handleClick={() => {
            navigate("/instructions");
          }}
        >
          ¿Como Funciona Pet Finder?
        </MainButton>
      </div>
    </div>
  );
}

export { HomePage };
