import React, { useState, useEffect } from "react";
import mainImage from "../../assets/logo.png";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton, SecondaryButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { useUserLocation } from "../../hooks";
import * as css from "./ins.css";
import { userLocationAtom } from "../../recoil";
import { useRecoilState, useRecoilValue } from "recoil";

function InstructionsPage(props) {
  const navigate = useNavigate();
  const { handleUserLocation } = useUserLocation();
  return (
    <div className={css.layout}>
      <div className={css.instructions}>
        <MainText>¿Como funciona Pet Finder?</MainText>
        <SecondaryText>
          Compartiendo tu ubicacion, podes ver las mascotas perdidas por tu zona
          y ayudar a sus dueños a encontrarlas
        </SecondaryText>
        <img className={css.logo} src={mainImage} alt="logo" />
        <SecondaryText>
          Si perdiste tu mascota, podes reportarla y nosotros te avisaremos por
          mail si alguien la vio o la encontro
        </SecondaryText>

        <div className={css.container}>
          <SecondaryButton
            type="button"
            handleClick={() => {
              navigator.geolocation.getCurrentPosition((res) => {
                handleUserLocation(res.coords.latitude, res.coords.longitude);
              });
            }}
          >
            Compartir mi Ubicacion
          </SecondaryButton>
          <SecondaryButton
            type="button"
            handleClick={() => {
              navigate("/login");
            }}
          >
            Iniciar Sesion
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export { InstructionsPage };
