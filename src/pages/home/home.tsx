import React, { useState, useEffect } from "react";
import mainImage from "../../assets/logo.png";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton } from "../../ui/buttons";
import { MyForm } from "../../components/form";
import * as css from "./home.css";

function HomePage(props) {
  return (
    <div className={css.home}>
      <MainText>Bienvenido a Pet Finder</MainText>
      <img className={css.logo} src={mainImage} alt="logo" />
      <SecondaryText>
        Encontrá y reportá mascotas perdidas cerca de tu ubicación
      </SecondaryText>
      <div className={css.container}>
        <MainButton>Inicia Sesion</MainButton>
        <MainButton>¿Como Funciona Pet Finder?</MainButton>
      </div>
      {/* <MyForm>Soy el form</MyForm> */}
    </div>
  );
}

export { HomePage };
