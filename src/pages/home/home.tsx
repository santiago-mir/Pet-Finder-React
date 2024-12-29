import React, { useState, useEffect } from "react";
import mainImage from "../../assets/logo.png";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import {
  loggedInState,
  userDataState,
  userReportsAtom,
  userReportsState,
} from "../../recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import * as css from "./home.css";
import { useLogOut, useUserLocation, useUserReports } from "../../hooks";

function HomePage(props) {
  const { handleLogOut } = useLogOut();
  const { handleUpdateUserReports } = useUserReports();
  const { handleUserLocation } = useUserLocation();
  const navigate = useNavigate();
  const token = useRecoilValue(loggedInState);
  const userData = useRecoilValue(userDataState);
  const userReports = useRecoilValue(userReportsState);
  if (token && !userReports) {
    console.log("entre por el handle");
    handleUpdateUserReports(token);
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
              navigator.geolocation.getCurrentPosition((res) => {
                handleUserLocation(res.coords.latitude, res.coords.longitude);
              });
            }}
          >
            Ver mascotas perdidas cerca de tu zona
          </MainButton>
          <MainButton
            type="button"
            handleClick={() => {
              navigate("/report-pet");
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
