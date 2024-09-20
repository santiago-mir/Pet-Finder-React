import React, { useState, useEffect } from "react";
import { MyForm } from "../../components/form";
import * as css from "./login.css";

function LoginPage(props) {
  return (
    <div className={css.login}>
      <MyForm></MyForm>
    </div>
  );
}

export { LoginPage };
