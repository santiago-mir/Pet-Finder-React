import React from "react";
import { LoginForm } from "../../components/forms";
import * as css from "./login.css";
import { useLogin } from "../../hooks";

function LoginPage(props) {
  const { handleLogin } = useLogin();
  return (
    <div className={css.login}>
      <LoginForm handleLoginForm={handleLogin}></LoginForm>
    </div>
  );
}

export { LoginPage };
