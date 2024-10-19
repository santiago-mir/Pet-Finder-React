import React, { useState, useEffect } from "react";
import { LoginForm } from "../../components/forms";
import * as css from "./login.css";

function LoginPage(props) {
  return (
    <div className={css.login}>
      <LoginForm handleLoginForm={() => {}}></LoginForm>
    </div>
  );
}

export { LoginPage };
