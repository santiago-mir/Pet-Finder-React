import React, { useEffect } from "react";
import { MainText } from "../../ui/texts";
import emptyImage from "../../assets/empty.png";
import { loggedInState, reportIdAtom, userReportsState } from "../../recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { ImageSlider } from "../../ui/slider";
import { useNavigate } from "react-router-dom";
import * as css from "./index.css";

function UserReports(props) {
  const navigate = useNavigate();
  const token = useRecoilValue(loggedInState);
  const userReports = useRecoilValue(userReportsState);
  const [reportId, setReportId] = useRecoilState(reportIdAtom);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  if (userReports) {
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
}

export { UserReports };
