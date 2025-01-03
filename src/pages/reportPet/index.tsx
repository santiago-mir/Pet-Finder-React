import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import { SecondaryButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { loggedInState, reportPetFlag, reportPetFlagState } from "../../recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import * as css from "./index.css";
import { ReportLostPetForm } from "../../components/forms";
import { useReportPet, useUserReports } from "../../hooks";

function ReportPage(props) {
  const { handleReportPet } = useReportPet();
  const { handleUpdateUserReports } = useUserReports();
  const [report, setReportStatus] = useRecoilState(reportPetFlag);
  const reportStatus = useRecoilValue(reportPetFlagState);
  const navigate = useNavigate();
  const token = useRecoilValue(loggedInState);
  const [successClass, setSuccessClass] = useState(css.hidden);
  const [bgClass, setBgClass] = useState(css.container);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  useEffect(() => {
    if (reportStatus) {
      setReportStatus(null);
      handleUpdateUserReports(token);
      setSuccessClass(css.success);
      setBgClass(css.blur);
    }
  }, [reportStatus]);
  return (
    <div>
      <div className={bgClass}>
        <MainText>Reporta tu Mascota Perdida</MainText>
        <ReportLostPetForm
          handleReportPet={handleReportPet}
          token={token}
        ></ReportLostPetForm>
      </div>
      <div className={successClass}>
        <SecondaryText>El reporte se realizo con exito</SecondaryText>
        <SecondaryButton
          type="button"
          handleClick={() => {
            navigate("/user-reports");
          }}
        >
          Ver tus mascotas reportadas
        </SecondaryButton>
        <SecondaryButton
          type="button"
          handleClick={() => {
            navigate("/");
          }}
        >
          Volver al menu
        </SecondaryButton>
      </div>
    </div>
  );
}

export { ReportPage };
