import React from "react";
import { MainButton } from "../../ui/buttons";
import { MyTextField } from "../../ui/text-fields";
import { SecondaryText, LinksText } from "../../ui/texts";
import Card from "@mui/material/Card";
import * as css from "./form.css";
import { Link } from "react-router-dom";

function LoginForm({ handleLoginForm }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const target = e.target as any;
    handleLoginForm(target.email.value, target.password.value);
  };
  return (
    <Card className={css.container}>
      <SecondaryText>Inicia Sesion</SecondaryText>
      <form onSubmit={onSubmit} className={css.form}>
        <MyTextField label="Email" type="email" name="email"></MyTextField>
        <MyTextField
          label="Contraseña"
          type="password"
          name="password"
        ></MyTextField>
        <MainButton type="submit" handleClick={() => {}}>
          Iniciar sesion
        </MainButton>
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

function SignUpForm({ handleSignupForm }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const target = e.target as any;
    handleSignupForm(
      target.name.value,
      target.email.value,
      target.password.value,
      target.confirmPassword.value
    );
  };
  return (
    <Card className={css.container}>
      <SecondaryText>Registrate</SecondaryText>
      <form onSubmit={onSubmit} className={css.form}>
        <MyTextField label="Nombre" type="text" name="name"></MyTextField>
        <MyTextField label="Email" type="email" name="email"></MyTextField>
        <MyTextField
          label="Contraseña"
          type="password"
          name="password"
        ></MyTextField>
        <MyTextField
          label="Confirmar Contraseña"
          type="password"
          name="confirmPassword"
        ></MyTextField>
        <MainButton type="submit" handleClick={() => {}}>
          Iniciar sesion
        </MainButton>
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
