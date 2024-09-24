import React, { useState, useEffect } from "react";
import { LoginForm } from "../../components/form";
import * as css from "./login.css";

function LoginPage(props) {
  return (
    <div className={css.login}>
      <LoginForm></LoginForm>
    </div>
  );
}

export { LoginPage };
