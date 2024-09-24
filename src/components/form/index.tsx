import React from "react";
import { MainButton } from "../../ui/buttons";
import { MyTextField } from "../../ui/text-fields";
import { SecondaryText, SmallText } from "../../ui/texts";
import Card from "@mui/material/Card";

import * as css from "./form.css";
import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <Card className={css.container}>
      <SecondaryText>Inicia Sesion</SecondaryText>
      <form className={css.form}>
        <MyTextField label="Email" type="email" name="email"></MyTextField>
        <MyTextField
          label="Contraseña"
          type="password"
          name="password"
        ></MyTextField>
        <MainButton handleClick={() => {}}>Iniciar sesion</MainButton>
      </form>
      <div className={css["text-container"]}>
        <Link className={css.texts} to={"/"}>
          <SmallText>¿No tenes cuenta? Registrate</SmallText>
        </Link>
        <Link className={css.texts} to={"/"}>
          <SmallText>¿Olvidate tu contraseña?</SmallText>
        </Link>
      </div>
    </Card>
  );
}

export { LoginForm };
