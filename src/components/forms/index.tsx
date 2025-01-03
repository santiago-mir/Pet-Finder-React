import React from "react";
import { MainButton } from "../../ui/buttons";
import { MyTextField } from "../../ui/text-fields";
import { SecondaryText, LinksText } from "../../ui/texts";
import Card from "@mui/material/Card";
import * as css from "./form.css";
import { Link, useNavigate } from "react-router-dom";
import { BasicDropzone } from "../dropzone";
import { Mapbox } from "../mapbox";
import { useRecoilValue } from "recoil";
import { reportIdState } from "../../recoil";

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

function ChangeUserDataForm({ name, token, handleChangeData }) {
  const navigate = useNavigate();
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
        <MainButton type="submit" handleClick={() => {}}>
          Editar Datos Personales
        </MainButton>
        <MainButton
          type="button"
          handleClick={() => {
            navigate("/");
          }}
        >
          Volver al menu
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
  const navigate = useNavigate();
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
        <MainButton
          type="button"
          handleClick={() => {
            navigate("/");
          }}
        >
          Volver al menu
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
  const navigate = useNavigate();
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
        <MainButton
          type="button"
          handleClick={() => {
            navigate("/");
          }}
        >
          Volver al menu
        </MainButton>
      </form>
    </Card>
  );
}
function EditLostPetForm({ handleReportPet, token }) {
  const reportId = useRecoilValue(reportIdState);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const target = e.target as any;
    handleReportPet(
      target.name.value,
      dataURL,
      dataLocation.lat,
      dataLocation.lng,
      reportId,
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
        Ingresá la siguiente información para editar el reporte de tu mascota
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
          Editar Reporte
        </MainButton>
        <MainButton
          type="button"
          handleClick={() => {
            navigate("/");
          }}
        >
          Volver al menu
        </MainButton>
      </form>
    </Card>
  );
}

function ReportSeenPet({ handleReportPet, petName, handleClose, ownerId }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const target = e.target as any;
    handleReportPet(
      target.name.value,
      target.phone.value,
      target.message.value,
      petName,
      ownerId
    );
  };
  return (
    <Card className={css.container}>
      <SecondaryText>Reportar informacion de {petName}</SecondaryText>
      <form onSubmit={onSubmit} className={css["form-report"]}>
        <MyTextField label="Tu nombre" type="text" name="name"></MyTextField>
        <MyTextField label="Tu telefono" type="tel" name="phone"></MyTextField>
        <MyTextField
          label="¿Donde lo viste?"
          type="textarea"
          name="message"
          multi={true}
        ></MyTextField>
        <MainButton type="submit" handleClick={() => {}}>
          Reportar Mascota
        </MainButton>
        <MainButton type="button" handleClick={handleClose}>
          Cerrar
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
  EditLostPetForm,
  ReportSeenPet,
};
