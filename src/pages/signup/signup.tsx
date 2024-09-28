import React from "react";
import { SignUpForm } from "../../components/form";
import * as css from "./signup.css";

function SignUpPage(props) {
  return (
    <div className={css.signup}>
      <SignUpForm></SignUpForm>
    </div>
  );
}

export { SignUpPage };
