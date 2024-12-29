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

function LostPets(props) {
  const lostPets = useRecoilValue(lostPetsState);
  const userLocation = useRecoilValue(userLocationState);
  console.log(lostPets);
  return (
    <div className={css.reports}>
      <MainText>Mascotas perdidas cerca de {userLocation.city}</MainText>
      <div className={css.container}>
        <ImageSlider slides={lostPets} />
      </div>
    </div>
  );
}

export { LostPets };
