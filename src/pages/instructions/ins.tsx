import React, { useState, useEffect } from "react";
import mainImage from "../../assets/logo.png";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton, SecondaryButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import * as css from "./ins.css";

function InstructionsPage(props) {
  const navigate = useNavigate();
  return (
    <div className={css.instructions}>
      <MainText>¿Como funciona Pet Finder?</MainText>
      <SecondaryText>
        Compartiendo tu ubicacion, podes ver las mascotas perdidas por tu zona y
        ayudar a sus dueños a encontrarlas
      </SecondaryText>
      <img className={css.logo} src={mainImage} alt="logo" />
      <SecondaryText>
        Si perdiste tu mascota, podes reportarla y nosotros te avisaremos por
        mail si alguien la vio o la encontro
      </SecondaryText>

      <div className={css.container}>
        <SecondaryButton type="button" handleClick={() => {}}>
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
  );
}

export { InstructionsPage };
