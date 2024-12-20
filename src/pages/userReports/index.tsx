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
  const slides = userReports;
  return (
    <div>
      <h1>Soy la user reports</h1>
      <div className={css.container}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export { UserReports };
