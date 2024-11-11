import React, { useState, useEffect } from "react";
import mainImage from "../../assets/logo.png";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { loggedInState, userDataState } from "../../recoil";
import { useRecoilValue } from "recoil";
import * as css from "./home.css";
import { useLogOut } from "../../hooks";

function HomePage(props) {
  const { handleLogOut } = useLogOut();
  const navigate = useNavigate();
  const token = useRecoilValue(loggedInState);
  const userData = useRecoilValue(userDataState);
  if (token) {
    console.log("estoy logueado");
  } else {
    console.log("no estoy logueado");
  }
  return (
    <div className={css.home}>
      <MainText>
        Bienvenido a Pet Finder {token ? <div>{userData.name}</div> : null}
      </MainText>
      <img className={css.logo} src={mainImage} alt="logo" />
      <SecondaryText>
        Encontrá y reportá mascotas perdidas cerca de tu ubicación
      </SecondaryText>
      {token ? (
        // si el user esta logueado
        <div className={css.container}>
          <MainButton
            type="button"
            handleClick={() => {
              console.log("hola");
            }}
          >
            Dar mi Ubicacion Actual
          </MainButton>
          <MainButton
            type="button"
            handleClick={() => {
              console.log("hola");
            }}
          >
            Reportar una Mascota Perdida
          </MainButton>
          <MainButton type="button" handleClick={handleLogOut}>
            Cerrar Sesion
          </MainButton>
        </div>
      ) : (
        // si el user no esta logueado
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
      )}
    </div>
  );
}

export { HomePage };
