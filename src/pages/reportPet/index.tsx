import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { loggedInState, userDataState } from "../../recoil";
import { useRecoilValue } from "recoil";
import * as css from "./index.css";
import { ReportLostPetForm } from "../../components/forms";

function ReportPage(props) {
  return (
    <div className={css.home}>
      <MainText>Reporta tu Mascota Perdida</MainText>
      <ReportLostPetForm
        handleReportPet={() => {
          console.log("hola");
        }}
      ></ReportLostPetForm>
    </div>
  );
}

export { ReportPage };
