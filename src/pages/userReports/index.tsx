import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import emptyImage from "../../assets/empty.png";
import { reportIdAtom, userReportsState } from "../../recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { ImageSlider } from "../../ui/slider";
import * as css from "./index.css";
import { useNavigate } from "react-router-dom";

function UserReports(props) {
  const navigate = useNavigate();
  const userReports = useRecoilValue(userReportsState);
  const [reportId, setReportId] = useRecoilState(reportIdAtom);
  if (userReports.length > 0) {
    return (
      <div className={css.reports}>
        <MainText>Tus Reportes</MainText>
        <div className={css.container}>
          <ImageSlider
            slides={userReports}
            handleClick={(reportId: number) => {
              setReportId(reportId);
              navigate("/edit-report");
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
