import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { loggedInState, reportPetFlagState, userDataState } from "../../recoil";
import { useRecoilValue } from "recoil";
import { ReportLostPetForm } from "../../components/forms";
import { useReportPet } from "../../hooks";
import { ImageSlider } from "../../ui/slider";
import * as css from "./index.css";

function UserReports(props) {
  const slides = [
    { url: "https://picsum.photos/800/600", title: "logo" },
    { url: "https://picsum.photos/500/600", title: "logo" },
    { url: "https://picsum.photos/200/300", title: "logo" },
    { url: "https://picsum.photos/1000/1000", title: "logo" },
    { url: "https://picsum.photos/400/600", title: "logo" },
  ];
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
