import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { loggedInState, reportPetFlagState, userDataState } from "../../recoil";
import { useRecoilValue } from "recoil";
import * as css from "./index.css";
import { ReportLostPetForm } from "../../components/forms";
import { useReportPet } from "../../hooks";

function ReportPage(props) {
  const { handleReportPet } = useReportPet();
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
      <div className={successClass}>hola que tal</div>
    </div>
  );
}

export { ReportPage };