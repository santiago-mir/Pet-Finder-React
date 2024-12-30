import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import emptyImage from "../../assets/empty.png";
import { MainButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import {
  loggedInState,
  reportPetFlagState,
  userDataState,
  userReportsState,
} from "../../recoil";
import { useRecoilValue } from "recoil";
import { ReportLostPetForm } from "../../components/forms";
import { useReportPet } from "../../hooks";
import { ImageSlider } from "../../ui/slider";
import * as css from "./index.css";

function UserReports(props) {
  const userReports = useRecoilValue(userReportsState);
  if (userReports) {
    return (
      <div className={css.reports}>
        <MainText>Tus Reportes</MainText>
        <div className={css.container}>
          <ImageSlider
            slides={userReports}
            handleClick={() => {
              console.log("soy el handle");
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={css.reports}>
        <MainText>No reportaste ninguna mascota aun</MainText>
        <img className={css.image} src={emptyImage} alt="empty" />
      </div>
    );
  }
}

export { UserReports };
