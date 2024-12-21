import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
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
  return (
    <div className={css.reports}>
      <MainText>Tus Reportes</MainText>
      <div className={css.container}>
        <ImageSlider slides={userReports} />
      </div>
    </div>
  );
}

export { UserReports };
