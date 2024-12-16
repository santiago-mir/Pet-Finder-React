import React from "react";
import { MainButton } from "../../ui/buttons";
import { MyTextField } from "../../ui/text-fields";
import { SecondaryText, LinksText } from "../../ui/texts";
import Card from "@mui/material/Card";
import * as css from "./form.css";
import { Link } from "react-router-dom";
import { BasicDropzone } from "../dropzone";
import { Mapbox } from "../mapbox";

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
      target.email.value,
      target.password.value,
      target.confirmPassword.value,
      target.name.value
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

function ChangeUserDataForm({ name, ciudad, token, handleChangeData }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const target = e.target as any;
    handleChangeData(target.name.value, target.city.value, token);
  };
  return (
    <Card className={css.container}>
      <SecondaryText>Mis Datos Personales</SecondaryText>
      <form onSubmit={onSubmit} className={css.form}>
        <MyTextField
          label="Nombre"
          type="text"
          name="name"
          placeholder={name}
        ></MyTextField>
        <MyTextField
          label="Ciudad"
          type="text"
          name="city"
          placeholder={ciudad}
        ></MyTextField>
        <MainButton type="submit" handleClick={() => {}}>
          Editar Datos Personales
        </MainButton>
      </form>
      <div className={css["text-container"]}>
        <Link className={css.link} to={"/edit-password"}>
          <LinksText>Editar Contraseña</LinksText>
        </Link>
      </div>
    </Card>
  );
}
function ChangeUserPassword({ token, handleChangePassword }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const target = e.target as any;
    handleChangePassword(
      target.password.value,
      target.confirmPassword.value,
      token
    );
  };
  return (
    <Card className={css.container}>
      <SecondaryText>Tu contraseña</SecondaryText>
      <form onSubmit={onSubmit} className={css.form}>
        <MyTextField
          label="Nueva Contraseña"
          type="text"
          name="password"
        ></MyTextField>
        <MyTextField
          label="Confirmar Contraseña"
          type="text"
          name="confirmPassword"
        ></MyTextField>
        <MainButton type="submit" handleClick={() => {}}>
          Editar Contraseña
        </MainButton>
      </form>
      <div className={css["text-container"]}>
        <Link className={css.link} to={"/my-profile"}>
          <LinksText>Editar Datos Personales</LinksText>
        </Link>
      </div>
    </Card>
  );
}

function ReportLostPetForm({ handleReportPet, token }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const target = e.target as any;
    handleReportPet(
      target.name.value,
      dataURL,
      dataLocation.lat,
      dataLocation.lng,
      token
    );
  };
  let dataURL = "";
  let dataLocation = {
    lat: "",
    lng: "",
  };

  function handleImageUpload(data) {
    dataURL = data;
  }

  function handleLocation(data) {
    dataLocation = data;
  }
  return (
    <Card className={css.container}>
      <SecondaryText>
        Ingresá la siguiente información para realizar el reporte de la mascota
      </SecondaryText>
      <form onSubmit={onSubmit} className={css["form-report"]}>
        <MyTextField
          label="Nombre de tu mascota"
          type="text"
          name="name"
        ></MyTextField>
        <BasicDropzone onImageUpload={handleImageUpload} />
        <SecondaryText>¿Donde viste a tu mascota por ultima vez?</SecondaryText>
        <Mapbox onLocationUpdated={handleLocation} />
        <MainButton type="submit" handleClick={() => {}}>
          Reportar Mascota
        </MainButton>
      </form>
    </Card>
  );
}

export {
  LoginForm,
  SignUpForm,
  ChangeUserDataForm,
  ChangeUserPassword,
  ReportLostPetForm,
};
