import React from "react";

import { MainButton } from "../../ui/buttons";
import { TextField } from "../../ui/text-fields";
import { SecondaryText } from "../../ui/texts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import * as css from "./form.css";

function MyForm(props) {
  return (
    <Card className={css.container}>
      <SecondaryText>Inicia Sesion</SecondaryText>
      <form className={css.form}>
        <TextField label="Email" type="email" name="email"></TextField>
        <TextField
          label="Contraseña"
          type="password"
          name="password"
        ></TextField>
        <MainButton handleClick={() => {}}>Iniciar sesion</MainButton>
      </form>
    </Card>
  );
}

export { MyForm };
