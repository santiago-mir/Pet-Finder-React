import React from "react";
import { MainButton } from "../../ui/buttons";
import { MyTextField } from "../../ui/text-fields";
import { SecondaryText, LinksText } from "../../ui/texts";
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
        <Link className={css.link} to={"/signup"}>
          <LinksText>¿No tenes cuenta? Registrate</LinksText>
        </Link>
        <Link className={css.link} to={"/"}>
          <LinksText>¿Olvidate tu contraseña?</LinksText>
        </Link>
      </div>
    </Card>
  );
}

function SignUpForm(props) {
  return (
    <Card className={css.container}>
      <SecondaryText>Registrate</SecondaryText>
      <form className={css.form}>
        <MyTextField label="Nombre" type="text" name="name"></MyTextField>
        <MyTextField label="Email" type="email" name="email"></MyTextField>
        <MyTextField
          label="Contraseña"
          type="password"
          name="password"
        ></MyTextField>
        <MainButton handleClick={() => {}}>Iniciar sesion</MainButton>
      </form>
      <div className={css["text-container"]}>
        <Link className={css.link} to={"/login"}>
          <LinksText>¿Ya tenes cuenta? Inicia Sesion</LinksText>
        </Link>
      </div>
    </Card>
  );
}

export { LoginForm, SignUpForm };
