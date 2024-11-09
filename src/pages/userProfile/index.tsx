import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton, SecondaryButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { loggedInState } from "../../recoil";
import { useRecoilValue } from "recoil";
import * as css from "./index.css";
import { ChangeUserDataForm } from "../../components/forms";

function UserProfile(props) {
  const navigate = useNavigate();
  const loggedInStatus = useRecoilValue(loggedInState);
  return (
    <div className={css.profile}>
      <ChangeUserDataForm
        name={loggedInStatus.user.firstName}
        email={loggedInStatus.user.email}
        handleChangeData={() => {}}
      ></ChangeUserDataForm>
    </div>
  );
}

export { UserProfile };
