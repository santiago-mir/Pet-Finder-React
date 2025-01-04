import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton, SecondaryButton } from "../../ui/buttons";
import emptyImage from "../../assets/empty.png";
import { useNavigate } from "react-router-dom";
import {
  lostPetsState,
  seenPetReport,
  seenPetState,
  userLocationAtom,
  userLocationState,
} from "../../recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { ImageSlider } from "../../ui/slider";
import { ReportSeenPet } from "../../components/forms";
import { useReportSeenPet } from "../../hooks";
import * as css from "./index.css";

function LostPets(props) {
  const { handleReportSeenPet } = useReportSeenPet();
  const navigate = useNavigate();
  const [report, setReport] = useRecoilState(seenPetReport);
  const reportSeenPet = useRecoilValue(seenPetState);
  const lostPets = useRecoilValue(lostPetsState);
  const [location, setLocation] = useRecoilState(userLocationAtom);
  const userLocation = useRecoilValue(userLocationState);
  const [formClass, setFormClass] = useState(css.hidden);
  const [bgClass, setBgClass] = useState(css.reports);
  const [successClass, setSuccessClass] = useState(css.hidden);
  const [petName, setPetName] = useState(null);
  const [ownerId, setOwnerId] = useState(null);
  useEffect(() => {
    if (!location) {
      navigate("/instructions");
    }
  }, [location]);
  useEffect(() => {
    if (petName) {
      setFormClass(css.form);
      setBgClass(css.blur);
    }
  }, [petName]);
  useEffect(() => {
    if (reportSeenPet) {
      setFormClass(css.hidden);
      setSuccessClass(css.success);
    }
  });
  if (userLocation) {
    if (lostPets.length > 0) {
      return (
        <div>
          <div className={bgClass}>
            <MainText>Mascotas perdidas cerca de {userLocation.city}</MainText>
            <div className={css.container}>
              <ImageSlider
                slides={lostPets}
                handleClick={(name: string, ownerId: number) => {
                  setPetName(name);
                  setOwnerId(ownerId);
                }}
              />
            </div>
            <div className={css.button}>
              <MainButton
                type={"button"}
                handleClick={() => {
                  navigate("/");
                }}
              >
                Volver al menu
              </MainButton>
            </div>
          </div>
          <div className={formClass}>
            <ReportSeenPet
              handleReportPet={handleReportSeenPet}
              petName={petName}
              ownerId={ownerId}
              handleClose={() => {
                setPetName(null);
                setOwnerId(null);
                setFormClass(css.hidden);
                setBgClass(css.reports);
              }}
            ></ReportSeenPet>
          </div>
          <div className={successClass}>
            <SecondaryText>El reporte se realizo con exito</SecondaryText>
            <SecondaryButton
              type="button"
              handleClick={() => {
                navigate("/");
              }}
            >
              Volver al menu
            </SecondaryButton>
            <SecondaryButton
              type="button"
              handleClick={() => {
                setReport(null);
                setSuccessClass(css.hidden);
                setBgClass(css.reports);
              }}
            >
              Cerrar
            </SecondaryButton>
          </div>
        </div>
      );
    } else {
      return (
        <div className={css.reports}>
          <MainText>No hay mascotas perdidas cerca de tu zona</MainText>
          <img className={css.image} src={emptyImage} alt="empty" />
        </div>
      );
    }
  }
}

export { LostPets };
