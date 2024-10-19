import React, { useState, useEffect } from "react";
import mainImage from "../../assets/logo.png";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { loggedInState } from "../../recoil";
import * as css from "./home.css";
import { useRecoilValue } from "recoil";

function HomePage(props) {
  const navigate = useNavigate();
  const loggedInStatus = useRecoilValue(loggedInState);
  if (loggedInStatus) {
    console.log("estoy logueado");
    console.log(loggedInStatus);
  } else {
    console.log("no estoy logueado");
  }
  return (
    <div className={css.home}>
      <MainText>Bienvenido a Pet Finder</MainText>
      <img className={css.logo} src={mainImage} alt="logo" />
      <SecondaryText>
        Encontrá y reportá mascotas perdidas cerca de tu ubicación
      </SecondaryText>
      <div className={css.container}>
        <MainButton
          type="button"
          handleClick={() => {
            navigate("/login");
          }}
        >
          Inicia Sesion
        </MainButton>
        <MainButton
          type="button"
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
