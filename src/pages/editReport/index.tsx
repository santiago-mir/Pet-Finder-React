import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton, SecondaryButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import {
  loggedInState,
  reportPetFlag,
  reportPetFlagState,
  userDataState,
} from "../../recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import * as css from "./index.css";
import { EditLostPetForm } from "../../components/forms";
import { useEditReport, useReportPet, useUserReports } from "../../hooks";

function EditReportPage(props) {
  const { handleEditReport } = useEditReport();
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
        <MainText>Edita tu Reporte</MainText>
        <EditLostPetForm
          handleReportPet={handleEditReport}
          token={token}
        ></EditLostPetForm>
      </div>
      <div className={successClass}>
        <SecondaryText>El reporte se edito con exito</SecondaryText>
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

export { EditReportPage };
