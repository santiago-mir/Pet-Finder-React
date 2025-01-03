import React from "react";
import { SignUpForm } from "../../components/forms";
import { useLogin } from "../../hooks";
import * as css from "./signup.css";

function SignUpPage(props) {
  const { handleLogin } = useLogin();

  return (
    <div className={css.signup}>
      <SignUpForm handleSignupForm={handleLogin}></SignUpForm>
    </div>
  );
}

export { SignUpPage };
