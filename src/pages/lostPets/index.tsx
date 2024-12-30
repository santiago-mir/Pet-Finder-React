import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import {
  loggedInState,
  lostPetsState,
  reportPetFlagState,
  userDataState,
  userLocationState,
  userReportsState,
} from "../../recoil";
import { useRecoilValue } from "recoil";
import { ImageSlider } from "../../ui/slider";
import * as css from "./index.css";
import { ReportSeenPet } from "../../components/forms";
import { useReportSeenPet } from "../../hooks";

function LostPets(props) {
  const { handleReportSeenPet } = useReportSeenPet();
  const lostPets = useRecoilValue(lostPetsState);
  const userLocation = useRecoilValue(userLocationState);
  const [formClass, setFormClass] = useState(css.hidden);
  const [bgClass, setBgClass] = useState(css.reports);
  const [petName, setPetName] = useState(null);
  const [ownerId, setOwnerId] = useState(null);
  console.log(lostPets);
  useEffect(() => {
    if (petName) {
      setFormClass(css.form);
      setBgClass(css.blur);
    }
  }, [petName]);
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
    </div>
  );
}

export { LostPets };
