import React from "react";
import { MainButton } from "../../ui/buttons";
import { TextField } from "../../ui/text-fields";
import { SecondaryText } from "../../ui/texts";

import * as css from "./form.css";

function MyForm(props) {
  return (
    <div className={css.container}>
      <SecondaryText>Inicia Sesion</SecondaryText>
      <form className={css.form}>
        <TextField label="Email" type="email" name="email"></TextField>
        <TextField
          label="Contraseña"
          type="password"
          name="password"
        ></TextField>
        <MainButton>Iniciar sesion</MainButton>
      </form>
    </div>
  );
}

export { MyForm };
