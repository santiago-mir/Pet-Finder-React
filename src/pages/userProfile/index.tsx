import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton, SecondaryButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { loggedInState } from "../../recoil";
import { useRecoilValue } from "recoil";
import * as css from "./index.css";
import { ChangeUserDataForm } from "../../components/forms";
import { useUpdateData } from "../../hooks";

function UserProfile(props) {
  const { handleUpdateData } = useUpdateData();
  const navigate = useNavigate();
  const loggedInStatus = useRecoilValue(loggedInState);
  useEffect(() => {
    if (!loggedInStatus) {
      navigate("/login");
    }
  }, [loggedInStatus]);
  if (!loggedInStatus) {
    return null;
  } else {
    return (
      <div className={css.profile}>
        <ChangeUserDataForm
          name={loggedInStatus.user.firstName}
          ciudad={loggedInStatus.user.city}
          token={loggedInStatus.token}
          handleChangeData={handleUpdateData}
        ></ChangeUserDataForm>
      </div>
    );
  }
}

export { UserProfile };
