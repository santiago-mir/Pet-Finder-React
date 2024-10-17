import React from "react";
import { SignUpForm } from "../../components/forms";
import * as css from "./signup.css";
import { handleLogin } from "../../hooks/index";

function SignUpPage(props) {
  return (
    <div className={css.signup}>
      <SignUpForm
        handleForm={(event) => {
          event.preventDefault();
          const target = event.target as any;
          console.log(
            target.name.value,
            target.email.value,
            target.password.value,
            target.confirmPassword.value
          );
          handleLogin(
            target.name.value,
            target.email.value,
            target.password.value,
            target.confirmPassword.value
          );
        }}
      ></SignUpForm>
    </div>
  );
}

export { SignUpPage };
