import React, { useState, useEffect } from "react";
import { MainText, SecondaryText } from "../../ui/texts";
import { MainButton, SecondaryButton } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { loggedInState, userDataState } from "../../recoil";
import { useRecoilValue } from "recoil";
import * as css from "./index.css";
import { ChangeUserDataForm, ChangeUserPassword } from "../../components/forms";
import { useUpdateData } from "../../hooks";
import { useUpdatePassword } from "../../hooks";

function UserProfile(props) {
  const { handleUpdateData } = useUpdateData();
  const navigate = useNavigate();
  const token = useRecoilValue(loggedInState);
  const userData = useRecoilValue(userDataState);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  if (!token) {
    return null;
  } else {
    return (
      <div className={css.profile}>
        <ChangeUserDataForm
          name={userData.name}
          ciudad={userData.city}
          token={token}
          handleChangeData={handleUpdateData}
        ></ChangeUserDataForm>
      </div>
    );
  }
}

function UserPassword(props) {
  const token = useRecoilValue(loggedInState);
  const { handleUpdatePassword } = useUpdatePassword();
  return (
    <div className={css.profile}>
      <ChangeUserPassword
        token={token}
        handleChangePassword={handleUpdatePassword}
      ></ChangeUserPassword>
    </div>
  );
}

export { UserProfile, UserPassword };
